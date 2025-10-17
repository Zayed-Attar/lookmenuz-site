"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import RazorpayButton from "@/components/RazorpayButton";
import { getRestaurantIdFromDomain } from "@/utils/getRestaurantIdFromDomain";

export default function RenewSubscription() {
  const [restaurantId, setRestaurantId] = useState<string | null>(null);

  useEffect(() => {
    const id = getRestaurantIdFromDomain();
    setRestaurantId(id);
  }, []);

  if (!restaurantId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <Loader2 className="w-6 h-6 animate-spin mb-3" />
        <p>Detecting restaurant ID...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-3xl font-bold mb-2 text-yellow-400">
        Renew Subscription
      </h1>

      <p className="text-gray-300 mb-6 max-w-md">
        Your restaurant’s <strong>LookMenuz</strong> subscription has expired.
        Renew now to reactivate your digital menu instantly.
      </p>

      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md border border-yellow-400/30">
        <h2 className="text-xl font-semibold mb-2">Your Plan</h2>
        <p className="text-gray-300 mb-4">
          <span className="text-yellow-400 font-bold">₹999 / Month</span> —
          LookMenuz Premium Subscription
        </p>

        <RazorpayButton
          restaurantId={restaurantId}
          amount={999}
          description="LookMenuz Premium Monthly Subscription"
        />
      </div>

      <footer className="mt-10 text-gray-400 text-sm">
        Secured by{" "}
        <span className="text-yellow-400 font-semibold">Razorpay</span>
      </footer>
    </div>
  );
}
