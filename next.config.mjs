/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/apsara-makeover-website',
  assetPrefix: '/apsara-makeover-website/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig