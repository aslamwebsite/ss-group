/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'build',
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ['ssgroup.triverseadvertising.com'],
  }
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
