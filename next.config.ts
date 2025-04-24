import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: false, // 关闭严格模式
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/sprites/**',
      },
    ],
  },
};

export default nextConfig;
