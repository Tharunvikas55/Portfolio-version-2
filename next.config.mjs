/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.istockphoto.com",
          },
        ],
      },
};

export default nextConfig;
