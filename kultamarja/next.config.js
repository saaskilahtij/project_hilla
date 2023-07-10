/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
