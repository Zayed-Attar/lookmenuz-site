"use client";
import React from "react";

// Define Razorpay interface safely
interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

// Properly typed global window extension
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

interface RazorpayButtonProps {
  amount: number;
  description: string;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  amount,
  description,
}) => {
  const loadScript = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (): Promise<void> => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    const options: RazorpayOptions = {
      key: "rzp_test_1234567890abcdef", // ⚠️ replace with your real Razorpay key
      currency: "INR",
      amount: amount * 100, // amount in paise
      name: "LookMenuz",
      description,
      image: "/LM.png",
      handler: (response: RazorpayResponse) => {
        alert(
          `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );
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

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button
      onClick={displayRazorpay}
      className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-300 transition"
    >
      Pay ₹{amount}
    </button>
  );
};

export default RazorpayButton;
