import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "image.thum.io",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**"
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
