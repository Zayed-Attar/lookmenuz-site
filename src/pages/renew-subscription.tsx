import RazorpayButton from "@/components/RazorpayButton";

/* eslint-disable react/no-unescaped-entities */ // ✅ disables that warning safely

export default function RenewSubscription() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        Renew Your Subscription
      </h1>
      <p className="text-gray-400 mb-6 max-w-md">
        Keep your restaurant&apos;s LookMenuz subscription active to continue
        managing your digital QR menus seamlessly.
      </p>

      <RazorpayButton
        restaurantId="demo_restaurant_001"
        amount={999}
        description="LookMenuz Premium Monthly Subscription"
      />
    </div>
  );
}
