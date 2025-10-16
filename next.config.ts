/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Keep images unoptimized for static hosting
  images: {
    unoptimized: true,
  },

  // ✅ Redirect all older URLs to the new digital delivery policy
  async redirects() {
    return [
      {
        source: "/shipping-policy",
        destination: "/digital-delivery-policy",
        permanent: true,
      },
      {
        source: "/delivery-policy",
        destination: "/digital-delivery-policy",
        permanent: true,
      },
      {
        source: "/shipping",
        destination: "/digital-delivery-policy",
        permanent: true,
      },
      {
        source: "/shipping-and-delivery",
        destination: "/digital-delivery-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
