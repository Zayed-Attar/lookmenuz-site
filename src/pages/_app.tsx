import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-16">
        {" "}
        {/* pushes below fixed navbar */}
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
