import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose']
  }
};

export default nextConfig;
