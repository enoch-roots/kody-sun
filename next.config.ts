import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (30–50% smaller than WebP), fall back to WebP, then JPEG.
    // Next.js handles format negotiation via Accept header automatically.
    formats: ['image/avif', 'image/webp'],
    // Reasonable device sizes for srcset generation — covers mobile, tablet, desktop, HiDPI
    deviceSizes: [390, 640, 828, 1080, 1280, 1920],
    // Intermediate sizes used for fill/responsive images
    imageSizes: [64, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
};

export default nextConfig;
