/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
