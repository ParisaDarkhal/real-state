/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "hygraph.com",
      },
      {
        protocol: "https",
        hostname: "eu-west-2.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "vercel.com",
      },
      {
        protocol: "https",
        hostname: "www.netlify.com",
      },
      {
        protocol: "https",
        hostname: "us-east-1-shared-usea1-02.graphassets.com", // Add the missing hostname here
      },
    ],
  },
};

export default nextConfig;
