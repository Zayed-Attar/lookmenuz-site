/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Script from "next/script";

interface RazorpayButtonProps {
  restaurantId: string;
  amount: number;
  description: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayButton({
  restaurantId,
  amount,
  description,
}: RazorpayButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async (): Promise<void> => {
    try {
      setLoading(true);

      const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!razorpayKey) {
        alert(
          "⚠️ Razorpay key missing. Add NEXT_PUBLIC_RAZORPAY_KEY_ID to your .env.local file."
        );
        return;
      }

      // 1️⃣ Create order
      const orderResponse = await fetch("/api/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, restaurantId }),
      });

      const orderData = await orderResponse.json();
      if (!orderResponse.ok || !orderData?.orderId) {
        alert("Failed to create order. Check backend logs.");
        return;
      }

      // 2️⃣ Razorpay Checkout
      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "LookMenuz",
        description,
        order_id: orderData.orderId,
        handler: async function (response: Record<string, string>) {
          try {
            alert("✅ Payment successful! Verifying...");

            // 3️⃣ Verify payment
            const verifyResponse = await fetch("/api/verifyPayment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();
            if (!verifyResponse.ok || !verifyData.success) {
              alert("Verification failed. Contact support.");
              return;
            }

            // ✅ Redirect to success page
            window.location.href = verifyData.redirectUrl;
          } catch (err: any) {
            console.error("🔥 Payment verification error:", err.message);
            alert("Something went wrong. Please contact support.");
          }
        },
        prefill: {
          name: "Restaurant Owner",
          email: "support@lookmenuz.com",
        },
        theme: { color: "#facc15" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error: any) {
      console.error("💥 Payment Error:", error.message || error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50"
      >
        {loading ? "Processing..." : `Renew for ₹${amount}`}
      </button>
    </>
  );
}
