/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: true, // Ensure Webpack 5 is enabled
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Fixes common Vercel fs issues
    }
    return config;
  },
};

export default nextConfig;
