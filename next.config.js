/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  publicRuntimeConfig:{
    baseUrl: process.env.NEXT_PUBLIC_BASE_PATH || 'http://localhost:3000/'
  }
}

module.exports = nextConfig
