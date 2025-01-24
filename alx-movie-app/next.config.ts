import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'm.media-amazon.com',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
