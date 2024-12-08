/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/anime-store/',
  basePath: '/anime-store',
}

module.exports = nextConfig
