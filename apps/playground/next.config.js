/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@radix-ui/themes'],
  output: 'standalone',
  distDir: '.next',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sink',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
