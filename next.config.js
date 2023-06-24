/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'images.unsplash.com',
      'wembleypark.com',
      'i0.wp.com',
      'images.pexels.com',
    ],
  },
};

module.exports = nextConfig;
