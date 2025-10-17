"use client";

import React from "react";
import { db } from "@/lib/firebaseConfig";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayButtonProps {
  restaurantId: string; // e.g. "grandmehfil"
  amount: number;
  description?: string;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  restaurantId,
  amount,
  description = "LookMenuz Premium Monthly Subscription",
}) => {
  const loadScript = (src: string) =>
    new Promise<boolean>((resolve) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve(true);
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const openCheckout = async () => {
    const ok = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!ok) {
      alert("⚠️ Failed to load Razorpay SDK. Check your internet connection.");
      return;
    }

    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
    if (!key) {
      alert(
        "⚠️ Razorpay key missing. Add NEXT_PUBLIC_RAZORPAY_KEY in .env.local"
      );
      return;
    }

    const options = {
      key,
      amount: Math.round(amount * 100),
      currency: "INR",
      name: "LookMenuz",
      description,
      image: "/LM.png",
      handler: async function (response: any) {
        console.log("✅ Razorpay success response:", response);

        try {
          if (!db) throw new Error("Firestore not initialized");
          if (!restaurantId) throw new Error("Restaurant ID missing");

          const restaurantRef = doc(db, "restaurants", restaurantId);
          const newExpiry = new Date();
          newExpiry.setMonth(newExpiry.getMonth() + 1);

          await setDoc(
            restaurantRef,
            {
              subscriptionStatus: "active",
              expiryDate: newExpiry.toISOString(),
              lastPayment: {
                id: response.razorpay_payment_id || null,
                paidAt: new Date().toISOString(),
                amountPaid: amount,
                mode: "razorpay",
              },
            },
            { merge: true }
          );

          await addDoc(collection(db, "payments"), {
            restaurantId,
            paymentId: response.razorpay_payment_id,
            amount,
            timestamp: new Date().toISOString(),
            status: "success",
            description,
          });

          // ✅ Redirect back to restaurant's own domain after success
          const redirectUrl = `https://${restaurantId}.lookmenuz.com`;
          alert("✅ Payment Successful! Redirecting to your restaurant...");
          window.location.href = redirectUrl;
        } catch (err: any) {
          console.error("❌ Firestore update failed:", err);
          alert("Payment succeeded, but we couldn’t update the subscription.");
        }
      },
      modal: {
        ondismiss: function () {
          alert("❌ Payment cancelled or closed.");
        },
      },
      theme: {
        color: "#facc15",
      },
      prefill: {
        name: "Restaurant Owner",
        email: "owner@example.com",
        contact: "9999999999",
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
