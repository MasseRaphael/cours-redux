/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  image: {
    domains: ['api.gaylordjulien.dev'],
  },
  env: {
    api: "https://api.gaylordjulien.dev"
  }
}

module.exports = nextConfig
