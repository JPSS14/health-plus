/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig:{
    baseUrl: process.env.BASE_URL || 'http://localhost:3000/'
  }
}

module.exports = nextConfig
