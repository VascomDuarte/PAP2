/** @type {import('next').NextConfig} */
const securityHeaders = [
    // Apply these headers to all routes in your application.
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
    {
      key: 'X-Frame-Options',
      value: 'DENY',
    },
    {
      key: 'Referrer-Policy',
      value: 'origin-when-cross-origin',
    },
  
  ];
  
  const nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ];
    },
    reactStrictMode: true,

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
  
  module.exports = nextConfig;