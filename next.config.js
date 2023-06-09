/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      }
    ]
  }
}

module.exports = nextConfig
