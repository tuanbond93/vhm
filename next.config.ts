import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.vanhanhmoi.com",
          },
        ],
        destination: "https://vanhanhmoi.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "vanhanhmoi.vn",
          },
        ],
        destination: "https://vanhanhmoi.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.vanhanhmoi.vn",
          },
        ],
        destination: "https://vanhanhmoi.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
