import RazorpayButton from "@/components/RazorpayButton";

/* eslint-disable react/no-unescaped-entities */

export default function RenewPayment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        Renew Your Subscription
      </h1>

      <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
        Keep your restaurant&apos;s LookMenuz subscription active to continue
        managing your digital QR menus seamlessly. Renew now to maintain
        real-time updates and avoid any service interruptions.
      </p>

      {/* 🔘 Razorpay payment button */}
      <RazorpayButton
        restaurantId="main_site_subscription"
        amount={999}
        description="LookMenuz Premium Monthly Subscription"
      />

      <p className="text-sm text-gray-500 mt-8 max-w-md leading-relaxed">
        💡 After your payment, you will be redirected to a confirmation page.
        Please allow{" "}
        <span className="text-yellow-400 font-semibold">6–12 hours</span> for
        your access to be fully restored. <br />
        Once payment is complete, kindly send your receipt and payment details
        on WhatsApp to{" "}
        <span className="text-yellow-400 font-semibold">
          +91 78218 62046
        </span>{" "}
        for quick activation of your menu.
      </p>
    </div>
  );
}
