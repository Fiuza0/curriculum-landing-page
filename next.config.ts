import type { NextConfig } from "next";

const repo = 'curriculum-landing-page'; // Your repository name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
};

export default nextConfig;