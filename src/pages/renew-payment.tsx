import RazorpayButton from "@/components/RazorpayButton";

/* eslint-disable react/no-unescaped-entities */

export default function RenewPayment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0B021B] to-[#12052D] text-white text-center px-6 animate-fadeIn">
      {/* 💎 Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FACC15] tracking-wide">
        Renew Your Subscription
      </h1>

      {/* 📝 Description */}
      <p className="text-gray-400 mb-10 max-w-lg leading-relaxed text-lg">
        Keep your restaurant&apos;s LookMenuz subscription active to continue
        managing your digital QR menus seamlessly. Renew now to maintain
        real-time updates and avoid any service interruptions.
      </p>

      {/* 💳 Razorpay Payment Button */}
      <div className="mb-10">
        <RazorpayButton
          restaurantId="main_site_subscription"
          amount={999}
          description="LookMenuz Premium Monthly Subscription"
        />
      </div>

      {/* ⚡ Information Box */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-lg shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] transition-all duration-300">
        <p className="text-gray-400 text-sm leading-relaxed">
          💡 After your payment, you will be redirected to a confirmation page.
          Please allow{" "}
          <span className="text-[#FACC15] font-semibold">6–12 hours</span> for
          your access to be fully restored. <br />
          Once payment is complete, kindly send your receipt and payment details
          on WhatsApp to{" "}
          <span className="text-[#FACC15] font-semibold">
            +91 78218 62046
          </span>{" "}
          for quick activation of your menu.
        </p>
      </div>

      {/* 🌟 Decorative Divider */}
      <div className="w-32 h-[1px] mt-10 bg-gradient-to-r from-transparent via-[#FACC15]/60 to-transparent"></div>
    </div>
  );
}
