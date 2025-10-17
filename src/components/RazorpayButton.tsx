"use client";

import React from "react";
import { db } from "@/lib/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

// 🧩 Razorpay Types
interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

interface RazorpayPrefill {
  name: string;
  email: string;
  contact: string;
}

interface RazorpayTheme {
  color: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  handler: (response: RazorpayResponse) => void;
  prefill: RazorpayPrefill;
  theme: RazorpayTheme;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

interface RazorpayButtonProps {
  restaurantId: string;
  amount: number;
  description?: string;
  onSuccessUrl?: string;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  restaurantId,
  amount,
  description = "Subscription Renewal",
  onSuccessUrl = "/",
}) => {
  const loadScript = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve(true);
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const openCheckout = async (): Promise<void> => {
    const ok = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!ok) {
      alert("Failed to load Razorpay SDK. Check connection.");
      return;
    }

    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
    if (!key) {
      alert("Razorpay key missing. Add NEXT_PUBLIC_RAZORPAY_KEY to .env.local");
      return;
    }

    const options: RazorpayOptions = {
      key,
      amount: Math.round(amount * 100),
      currency: "INR",
      name: "LookMenuz",
      description,
      image: "/LM.png",
      handler: async function (response: RazorpayResponse): Promise<void> {
        try {
          const restaurantRef = doc(db, "restaurants", restaurantId);
          const newExpiry = new Date();
          newExpiry.setMonth(newExpiry.getMonth() + 1);

          await updateDoc(restaurantRef, {
            subscriptionStatus: "active",
            expiryDate: newExpiry.toISOString(),
            lastPayment: {
              paymentId: response.razorpay_payment_id ?? null,
              paidAt: new Date().toISOString(),
              amountPaid: amount,
              mode: "razorpay",
            },
          });

          window.location.href = onSuccessUrl;
        } catch (err: unknown) {
          console.error("Failed to update Firestore:", err);
          alert("Payment succeeded, but we couldn’t update the subscription.");
        }
      },
      prefill: {
        name: "Demo User",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#facc15",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={openCheckout}
      className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-300 transition"
    >
      Renew for ₹{amount}
    </button>
  );
};

export default RazorpayButton;
