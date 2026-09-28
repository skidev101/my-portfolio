import { ImageResponse } from "next/og";
import { palette } from "@/lib/palette";

/* No custom font. next/font resolves at build into a form next/og can't read,
   and shipping a second copy of a typeface purely for this route isn't worth
   it — next/og's bundled default renders this card correctly. This route is
   generated on demand, not at build, so a failure here cannot break a deploy. */
export const alt =
  "Monaski — full-stack engineer building reliable systems and thoughtful digital products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const { canvas, line, ink, copy, quiet, signal } = palette;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: canvas,
          paddingTop: 76,
          paddingBottom: 76,
          paddingLeft: 84,
          paddingRight: 84,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: 4,
              backgroundColor: signal,
            }}
          />
          <div style={{ fontSize: 22, color: copy }}>
            Available for work
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 104,
              color: ink,
              letterSpacing: -3,
              lineHeight: 1.05,
              fontWeight: 600,
            }}
          >
            Monaski
          </div>
          <div
            style={{
              fontSize: 32,
              color: copy,
              lineHeight: 1.4,
              maxWidth: 860,
            }}
          >
            Full-stack engineer carrying a product from the first useful
            interaction through to production.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${line}`,
            paddingTop: 28,
            fontSize: 22,
            color: quiet,
          }}
        >
          <div style={{ display: "flex" }}>Ojomona Ethan Inedu</div>
          <div style={{ display: "flex", color: copy }}>monaski.vercel.app</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
