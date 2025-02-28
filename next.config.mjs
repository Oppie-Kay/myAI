/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // ✅ Enables Next.js CSS optimization
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // ✅ Fixes Vercel 'fs' module issues
    }
    return config;
  },
};

export default nextConfig;
