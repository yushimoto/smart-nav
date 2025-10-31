/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hashnode.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.hashnode.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
