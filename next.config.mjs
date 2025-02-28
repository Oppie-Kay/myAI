/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: true, // Ensure Webpack 5 is used
  },
  webpack: (config, { isServer }) => {
    // Fix 'fs' module issue on Vercel
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    // Ensure CSS/SCSS processing is handled correctly
    config.module.rules.push({
      test: /\.css$/,
      use: ["postcss-loader"],
    });

    return config;
  },
  experimental: {
    optimizeCss: true, // Enable Next.js built-in CSS optimization
  },
  compiler: {
    styledComponents: true, // If using styled-components
  },
};

export default nextConfig;
