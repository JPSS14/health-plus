/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/health-plus/',
  assetPrefix: '/health-plus/',
  publicRuntimeConfig:{
    baseUrl: process.env.BASE_URL || 'http://localhost:3000/'
  }
}

module.exports = nextConfig
