import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
          Welcome to LookMenuz
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          A next-generation digital QR menu platform for restaurants and cafés.
          Update your menu instantly — no reprints, no delays.
        </p>
        <a
          href="#get-started"
          className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-2">Instant Updates</h3>
              <p className="text-gray-400 text-sm">
                Update your restaurant’s menu in real-time from anywhere.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">QR-Based Access</h3>
              <p className="text-gray-400 text-sm">
                Guests can scan and view your digital menu without any hassle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Admin Dashboard</h3>
              <p className="text-gray-400 text-sm">
                Simple interface for adding, editing, or removing dishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Contact Us</h2>
        <p className="text-gray-400 mb-4">
          Have questions or want to get started? Reach out anytime.
        </p>
        <a
          href="mailto:support@lookmenuz.com"
          className="text-yellow-400 underline"
        >
          support@lookmenuz.com
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LookMenuz. All rights reserved.
      </footer>
    </div>
  );
}
