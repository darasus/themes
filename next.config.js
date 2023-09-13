/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "files.stripe.com"],
  },
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
