"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayButtonProps {
  amount: number; // in INR
  businessName?: string;
  description?: string;
}

export default function RazorpayButton({
  amount,
  businessName = "LookMenuz",
  description = "Subscription Payment",
}: RazorpayButtonProps) {
  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_1234567890abcdef", // ⚠️ Replace with your Razorpay Test Key ID
      amount: amount * 100, // Razorpay works in paise (INR * 100)
      currency: "INR",
      name: businessName,
      description: description,
      image: "/LM.png", // optional logo
      handler: function (response: any) {
        alert(
          "Payment successful! 🎉 Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      notes: {
        plan: "monthly",
      },
      theme: {
        color: "#facc15", // gold/yellow
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-md transition"
    >
      Pay ₹{amount}
    </button>
  );
}
