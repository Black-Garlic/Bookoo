/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';
const {parsed: dotenv} = require('dotenv').config({path: `env/.${isDev? 'dev' : 'prod'}.env`})
console.log('[ENV]', dotenv)

const nextConfig = {
  reactStrictMode: true,
  env: {...dotenv},
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
