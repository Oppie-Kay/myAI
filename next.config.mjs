/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // ✅ Enables built-in CSS optimization
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // ✅ Fixes Vercel 'fs' issues
    }
    return config;
  },
};

export default nextConfig;
