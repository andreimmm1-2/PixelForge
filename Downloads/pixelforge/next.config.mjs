/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PixelForge',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;