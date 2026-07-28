import type { NextConfig } from "next";

// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.hashnode.com" }],
  },
};

export default nextConfig;
