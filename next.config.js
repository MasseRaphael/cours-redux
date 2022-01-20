/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.gaylordjulien.dev'],
  },
  env: {
    api: "https://api.gaylordjulien.dev"
  }
}

module.exports = nextConfig
