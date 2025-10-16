/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Keep images unoptimized for static hosting
  images: {
    unoptimized: true,
  },

  // ✅ Redirect not needed — we’ll serve shipping page directly
  // If you ever had /shipping-policy, redirect it to /shipping
  async redirects() {
    return [
      {
        source: "/shipping-policy",
        destination: "/shipping",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
