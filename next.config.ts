/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Keep images unoptimized for static hosting (works well for Vercel/Netlify)
  images: {
    unoptimized: true,
  },

  // ✅ Redirect old links to the new combined policy page
  async redirects() {
    return [
      {
        source: "/shipping-policy",
        destination: "/shipping-and-delivery",
        permanent: true,
      },
      {
        source: "/delivery-policy",
        destination: "/shipping-and-delivery",
        permanent: true,
      },
      {
        source: "/shipping",
        destination: "/shipping-and-delivery",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
