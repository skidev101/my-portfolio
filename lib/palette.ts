/* Mirrors the colour tokens in app/globals.css. CSS custom properties can't be
   read from TypeScript, and next/og renders without CSS at all, so these two
   files are the only places a colour value is spelled out. Change both. */
export const palette = {
  canvas: "#000000",
  surface: "#111214",
  line: "#1f2124",
  ink: "#f5f6f7",
  copy: "#9ba1a6",
  quiet: "#7d8388",
  signal: "#f07a3c",
} as const;
