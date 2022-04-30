/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "trade-group.su",
      "trade-group.su,",
      "trade-group.su%2C"
    ]
  }
}

module.exports = nextConfig
