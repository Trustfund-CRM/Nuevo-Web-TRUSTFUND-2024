const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['trustfundcrm.testeoenzo.online'],
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@pages'] = path.join(__dirname, 'src', 'pages');
    return config;
  },
};

module.exports = nextConfig;
