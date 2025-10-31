/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for Vercel deployment
  output: "standalone",

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache for 1 minute
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bcconciergerie.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bcconciergerie.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.leguidedescommerciaux.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "studio.gaynako.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
};

export default nextConfig;
