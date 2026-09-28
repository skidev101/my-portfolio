import type { NextConfig } from "next";

/* No remote image patterns: every image ships from /public, and the tech icons
   that previously came from a third-party CDN are now plain text. */
const nextConfig: NextConfig = {};

export default nextConfig;
