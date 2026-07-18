import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → Cloudflare Pages serves the generated `out/` directory.
  output: "export",
  // Static export ships no runtime image optimizer; serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
