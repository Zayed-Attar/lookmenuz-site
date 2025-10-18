import RazorpayButton from "@/components/RazorpayButton";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1A082D] via-[#140622] to-[#0F021A] text-white min-h-screen flex flex-col font-[Playfair_Display]">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center px-6 flex-1 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFD84D]">
          Welcome to LookMenuz
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          A next-generation digital QR menu platform for restaurants and cafés.
          Update your menu instantly — no reprints, no delays.
        </p>

        <div id="pricing" className="flex justify-center">
          <RazorpayButton
            restaurantId="main_site_subscription"
            amount={999}
            description="Monthly Subscription - LookMenuz Premium"
          />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-16 px-6 bg-transparent border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14 text-[#FFD84D]">Features</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Instant Updates",
                desc: "Update your restaurant’s menu in real-time from anywhere.",
              },
              {
                title: "QR-Based Access",
                desc: "Guests can scan and view your digital menu without any hassle.",
              },
              {
                title: "Admin Dashboard",
                desc: "Simple interface for adding, editing, or removing dishes.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-[#15072C]/70 backdrop-blur-md border border-[#FFD84D]/20 rounded-2xl p-8"
              >
                <h3 className="font-semibold mb-3 text-lg text-white">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 text-center bg-gradient-to-b from-transparent via-[#12052D]/70 to-[#0B021B]"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-[#FFD84D]">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-6 text-[17px] leading-relaxed font-sans">
            Have questions or want to get started? Reach out anytime — we’d love
            to help your restaurant go digital.
          </p>
          <a
            href="mailto:support@lookmenuz.com"
            className="inline-block text-[#FFD84D] font-semibold text-lg underline"
          >
            support@lookmenuz.com
          </a>
        </div>
      </section>
    </div>
  );
}
