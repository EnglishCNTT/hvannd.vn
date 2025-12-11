/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "apibeta.baoninhbinh.org.vn",
        protocol: "https",
      },
      {
        hostname: "baoninhbinh.org.vn",
        protocol: "https",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      },
      {
        hostname: "platform-lookaside.fbsbx.com",
        protocol: "https",
      },
      {
        hostname: "beta.baoninhbinh.org.vn",
        protocol: "https",
      },
      {
        hostname: "cdncongthuong.quangtrung.vn",
        protocol: "https",
      },
      {
        hostname: "apibeta.baoninhbinh.org.vn/staticfiles",
        protocol: "https",
      },
      {
        hostname: "beta.baoninhbinh.org.vn",
        protocol: "https",
      },
      {
        hostname: "img.baoninhbinh.org.vn",
        protocol: "https",
      },
      {
        hostname: "vnu.edu.vn",
        protocol: "https",
      },
    ],
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    // domains: ['img.tinbaihay.net'],
  },
  // basePath: '/',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300, immutable",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN", // Ngăn Clickjacking
          },
          {
            key: "X-Content-Type-Options", // Chống MIME sniffing
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection", // Chống XSS
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/trang-chu.htm",
        destination: "/",
        permanent: true, // Chuyển hướng 301 vĩnh viễn
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:slug/d:id.htm",
        destination: "/:slug/:id",
      },
    ];
  },
};

export default nextConfig;
