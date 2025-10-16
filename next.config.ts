/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    unoptimized: true,
  },

  // ✅ Add redirect so /shipping-policy goes to /delivery-policy
  async redirects() {
    return [
      {
        source: "/shipping-policy",
        destination: "/delivery-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
