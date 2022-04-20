/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACK_API: process.env.BACK_API
  }
}

module.exports = nextConfig
