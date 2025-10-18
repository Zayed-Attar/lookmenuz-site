"use client";
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import jsPDF from "jspdf";

// ✅ Utility: Generate random-like Razorpay IDs
const generateRandomId = (prefix: string) => {
  const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();
  return `${prefix}_${randomPart}`;
};

export default function SubscriptionSuccess() {
  const [restaurantName, setRestaurantName] = useState("");
  const [paymentData, setPaymentData] = useState({
    paymentId: "",
    orderId: "",
    amount: 999,
    date: new Date().toLocaleString(),
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("paymentId") || generateRandomId("pay");
    const orderId = urlParams.get("orderId") || generateRandomId("order");
    const amount = parseInt(urlParams.get("amount") || "999", 10);

    setPaymentData({
      paymentId,
      orderId,
      amount,
      date: new Date().toLocaleString(),
    });
  }, []);

  const downloadReceipt = () => {
    if (!restaurantName.trim()) {
      alert(
        "⚠️ Please enter your restaurant name before downloading the receipt."
      );
      return;
    }

    const doc = new jsPDF();

    try {
      doc.addImage("/LM.png", "PNG", 160, 10, 30, 20);
    } catch (err) {
      console.warn("Logo not found, skipping image.");
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("LookMenuz Payment Receipt", 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Restaurant Name: ${restaurantName}`, 20, 40);
    doc.text(`Payment ID: ${paymentData.paymentId}`, 20, 50);
    doc.text(`Order ID: ${paymentData.orderId}`, 20, 60);
    doc.text(`Amount Paid: ₹${paymentData.amount}`, 20, 70);
    doc.text(`Payment Date: ${paymentData.date}`, 20, 80);
    doc.text(`Plan: Monthly Subscription`, 20, 90);

    doc.setFont("helvetica", "bold");
    doc.text(
      "Thank you for renewing your subscription with LookMenuz!",
      20,
      110
    );

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(
      "For support, contact +91 78218 62046 or support@lookmenuz.com",
      20,
      130
    );

    doc.save(`LookMenuz_Receipt_${restaurantName.replace(/\s+/g, "_")}.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0B021B] to-[#12052D] text-white text-center px-6 animate-fadeIn">
      {/* 🎉 Success Icon & Title */}
      <div className="bg-white/10 border border-white/10 rounded-full p-4 mb-6 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
        <span className="text-[#FACC15] text-3xl">🎉</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FACC15] tracking-wide">
        Subscription Payment Received!
      </h1>

      <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-lg">
        Thank you for your payment. It may take up to{" "}
        <span className="text-[#FACC15] font-semibold">6–12 hours</span> to
        restore your admin access.
      </p>

      <p className="text-gray-300 max-w-md leading-relaxed mb-8">
        To activate your menu access sooner, please send your payment receipt
        and details to{" "}
        <span className="text-[#FACC15] font-semibold">+91 78218 62046</span> on
        WhatsApp.
      </p>

      {/* ✅ Input Field */}
      <input
        type="text"
        placeholder="Enter your restaurant name"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
        className="text-black rounded-full px-5 py-3 mb-5 w-72 text-center focus:outline-none focus:ring-2 focus:ring-[#FACC15] shadow-[0_0_10px_rgba(250,204,21,0.2)]"
      />

      {/* ✅ Download Button */}
      <button
        onClick={downloadReceipt}
        className="button-gold font-semibold py-3 px-8 text-base"
      >
        📄 Download Receipt
      </button>

      {/* 🔗 Go Back Link */}
      <a
        href="https://lookmenuz.com"
        className="mt-8 text-[#FACC15] hover:text-[#EAB308] underline text-sm transition-colors duration-300"
      >
        Go Back to LookMenuz
      </a>

      {/* ✨ Divider */}
      <div className="w-32 h-[1px] mt-10 bg-gradient-to-r from-transparent via-[#FACC15]/60 to-transparent"></div>
    </div>
  );
}
