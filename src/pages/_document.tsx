import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 🔖 Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* 🎨 Theme & SEO */}
        <meta name="theme-color" content="#0B021B" />
        <meta
          name="description"
          content="LookMenuz — Digital QR Menu for Restaurants | Real-time updates, QR-based access, and admin dashboard for your restaurant."
        />

        {/* 💎 Premium Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* 🌟 Smooth Rendering */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="bg-gradient-to-b from-[#0B021B] to-[#12052D] text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
