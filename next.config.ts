import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/experiences",
        destination: "/city-attractions",
        permanent: true,
      },
      {
        source: "/experiences/:slug",
        destination: "/city-attractions/:slug",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
