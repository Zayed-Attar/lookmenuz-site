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
    // ✅ Extract payment info from URL
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

    // ✅ Add Logo (Optional)
    try {
      doc.addImage("/LM.png", "PNG", 160, 10, 30, 20);
    } catch (err) {
      console.warn("Logo not found, skipping image.");
    }

    // ✅ Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("LookMenuz Payment Receipt", 20, 20);

    // ✅ Body
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

    // ✅ Footer
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(
      "For support, contact +91 78218 62046 or support@lookmenuz.com",
      20,
      130
    );

    // ✅ Save PDF
    doc.save(`LookMenuz_Receipt_${restaurantName.replace(/\s+/g, "_")}.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        🎉 Subscription Payment Received!
      </h1>

      <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
        Thank you for your payment. It may take up to{" "}
        <span className="text-yellow-400 font-semibold">6–12 hours</span> to
        restore your admin access.
      </p>

      <p className="text-gray-300 max-w-md leading-relaxed mb-4">
        To activate your menu access sooner, please send your payment receipt
        and details to{" "}
        <span className="text-yellow-400 font-semibold">+91 78218 62046</span>{" "}
        on WhatsApp.
      </p>

      {/* ✅ Input for Restaurant Name */}
      <input
        type="text"
        placeholder="Enter your restaurant name"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
        className="text-black rounded-lg px-4 py-2 mb-4 w-72 text-center focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* ✅ Download Receipt Button */}
      <button
        onClick={downloadReceipt}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200"
      >
        📄 Download Receipt
      </button>

      <a
        href="https://lookmenuz.com"
        className="mt-6 text-yellow-400 hover:text-yellow-500 underline text-sm"
      >
        Go Back to LookMenuz
      </a>
    </div>
  );
}
