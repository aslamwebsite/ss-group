/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'build',
  devIndicators: {
    buildActivity: false,
  },
  images: {
   remotePatterns: [
      {
        protocol: 'https',
        hostname: 'triverseadvertising.com',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;