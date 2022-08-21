/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.pexels.com', 'vercel.com'],
    loader: 'imgix',
    path: '',
  },
  swcMinify: true,
};

module.exports = nextConfig;

/* module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.pexels.com'],
    loader: 'imgix',
    path: '',
  },
};
 */
