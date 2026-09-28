#!/usr/bin/env node
/**
 * Full-page capture for the impeccable finish review.
 *
 *   node .impeccable/capture.mjs [url]        # default http://localhost:3000
 *
 * Writes .impeccable/review/desktop.png and .impeccable/review/mobile.png.
 *
 * Zero dependencies on purpose: Brave is Chromium, and Node has a global
 * WebSocket, so the DevTools Protocol can be driven with the standard library
 * alone. Nothing here is imported by the app.
 */
import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const TARGET = process.argv[2] ?? "http://localhost:3000";
const OUT_DIR = process.env.CAPTURE_OUT ?? ".impeccable/review";
const PORT = 9333;
const PROFILE = join(tmpdir(), `capture-profile-${process.pid}`);

/* Chromium refuses to rasterise a capture taller than its max texture size.
   Exceeding it yields a blank or truncated image, which is exactly the kind of
   malformed evidence the reviewer rejects — so the scale factor is clamped. */
const TEXTURE_CEILING = 16000;

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900, dsf: 2, mobile: false },
  { name: "mobile", width: 390, height: 844, dsf: 3, mobile: true },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      await fetch(url, { redirect: "manual" });
      return;
    } catch {
      await sleep(500);
    }
  }
  throw new Error(`No server responded at ${url} — start it first (pnpm dev).`);
}

async function waitForBrowser(port, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      const { webSocketDebuggerUrl } = await response.json();
      if (webSocketDebuggerUrl) return webSocketDebuggerUrl;
    } catch {
      /* not up yet */
    }
    await sleep(250);
  }
  throw new Error("Brave never opened its debugging port.");
}

function connect(wsUrl) {
  const socket = new WebSocket(wsUrl);
  const pending = new Map();
  let nextId = 1;
  let sessionId = null;

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    const entry = pending.get(message.id);
    if (!entry) return;
    pending.delete(message.id);
    if (message.error) entry.reject(new Error(JSON.stringify(message.error)));
    else entry.resolve(message.result ?? {});
  });

  const ready = new Promise((resolve, reject) => {
    socket.addEventListener("open", () => resolve(), { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  /* Commands without a session go to the browser; the rest go to the page. */
  const send = (method, params = {}, useSession = true) =>
    new Promise((resolve, reject) => {
      const id = nextId;
      nextId += 1;
      pending.set(id, { resolve, reject });
      socket.send(
        JSON.stringify({
          id,
          method,
          params,
          ...(useSession && sessionId ? { sessionId } : {}),
        }),
      );
    });

  return {
    ready,
    send,
    attach: (id) => {
      sessionId = id;
    },
    close: () => socket.close(),
  };
}

async function capture(client, viewport) {
  const { targetId } = await client.send(
    "Target.createTarget",
    { url: "about:blank" },
    false,
  );
  const { sessionId } = await client.send(
    "Target.attachToTarget",
    { targetId, flatten: true },
    false,
  );
  client.attach(sessionId);

  await client.send("Page.enable");
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: viewport.dsf,
    mobile: viewport.mobile,
  });

  await client.send("Page.navigate", { url: TARGET });

  /* Load *and* webfonts. Capturing before the face swaps renders the fallback
     metrics, which changes line breaks and every vertical rhythm below it. */
  await client.send("Runtime.evaluate", {
    expression: `(async () => {
      while (document.readyState !== "complete") {
        await new Promise((r) => setTimeout(r, 100));
      }
      await document.fonts.ready;
      return true;
    })()`,
    awaitPromise: true,
    returnByValue: true,
  });

  /* The hero's `rise` runs once for 500ms; let it land so nothing is captured
     mid-transform. */
  await sleep(800);

  const metrics = await client.send("Page.getLayoutMetrics");
  const content = metrics.cssContentSize ?? metrics.contentSize;
  const width = Math.ceil(content.width);
  const height = Math.ceil(content.height);

  /* The clip is the document's real layout box, not the width we asked for.
     A mobile page with no viewport meta lays out at 980px, so the capture
     would be a wide desktop layout filed under "mobile" — plausible enough to
     pass a glance, and exactly the malformed evidence check 0 rejects. */
  if (Math.abs(width - viewport.width) > 1) {
    console.warn(
      `  ! ${viewport.name}: laid out at ${width}px, expected ${viewport.width}px` +
        ` — check the viewport meta tag`,
    );
  }

  const scale =
    height * viewport.dsf > TEXTURE_CEILING
      ? Math.max(1, TEXTURE_CEILING / height)
      : viewport.dsf;

  await client.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: scale,
    mobile: viewport.mobile,
  });

  const { data } = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
    fromSurface: true,
    clip: { x: 0, y: 0, width, height, scale: 1 },
  });

  const file = join(OUT_DIR, `${viewport.name}.png`);
  await writeFile(file, Buffer.from(data, "base64"));
  await client.send("Target.closeTarget", { targetId }, false);

  const kb = Math.round(Buffer.from(data, "base64").length / 1024);
  console.log(
    `  ${viewport.name}.png  ${width}x${height} css  @${scale}x  ${kb}KB`,
  );
}

async function main() {
  await waitForServer(TARGET);
  await mkdir(OUT_DIR, { recursive: true });

  const browser = spawn(
    "brave-browser",
    [
      "--headless=new",
      `--remote-debugging-port=${PORT}`,
      /* Chrome 111+ refuses a CDP socket that carries an Origin header */
      "--remote-allow-origins=*",
      `--user-data-dir=${PROFILE}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-gpu",
      "--hide-scrollbars",
      /* Deterministic colour: a mismatched profile shifts every sampled pixel */
      "--force-color-profile=srgb",
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  let client;
  try {
    client = connect(await waitForBrowser(PORT));
    await client.ready;
    console.log(`Capturing ${TARGET}`);
    for (const viewport of VIEWPORTS) {
      await capture(client, viewport);
    }
  } finally {
    client?.close();
    /* Wait for the browser to actually exit before deleting its profile.
       SIGTERM returns immediately and Brave keeps flushing, so an instant rm
       races it and throws ENOTEMPTY — a non-zero exit *after* the captures were
       written, which reads as a failed run to anything scripting this. */
    await new Promise((resolve) => {
      const force = setTimeout(() => {
        browser.kill("SIGKILL");
        resolve();
      }, 3000);
      browser.once("exit", () => {
        clearTimeout(force);
        resolve();
      });
      browser.kill("SIGTERM");
    });
    await rm(PROFILE, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
}

main().catch((error) => {
  console.error(`capture failed: ${error.message}`);
  process.exit(1);
});
