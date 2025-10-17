import RazorpayButton from "@/components/RazorpayButton";

export default function RenewSubscription() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
        Renew Your Subscription
      </h1>
      <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
        Renew your LookMenuz subscription to keep your menu live and updated.
      </p>
      <RazorpayButton
        restaurantId="demo_restaurant"
        amount={999}
        description="LookMenuz Premium Monthly Subscription"
        onSuccessUrl="/"
      />
    </div>
  );
}
