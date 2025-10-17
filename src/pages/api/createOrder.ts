/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount, restaurantId } = req.body;

    // ✅ Validate request
    if (!amount || !restaurantId) {
      return res.status(400).json({ error: "Missing amount or restaurantId" });
    }

    // ✅ Load Razorpay environment variables
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    console.log("🔍 ENV CHECK =>", { keyId, keySecret });

    if (!keyId || !keySecret) {
      console.error("❌ Missing Razorpay credentials in environment variables");
      return res.status(500).json({ error: "Razorpay keys not configured" });
    }

    // ✅ Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    // ✅ Generate a short unique receipt ID (under 40 chars)
    const shortReceipt = `rcpt_${Date.now().toString().slice(-10)}`;

    // ✅ Create a new order
    const order = await razorpay.orders.create({
      amount: amount * 100, // convert ₹ to paise
      currency: "INR",
      receipt: shortReceipt,
      notes: { restaurantId },
    });

    console.log("✅ Razorpay Order Created:", {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });

    // ✅ Return order info to frontend
    return res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // public key for frontend
    });
  } catch (error: any) {
    console.error("🔥 Razorpay Error:", error);
    return res.status(500).json({
      error: error.message || "Server error while creating order",
    });
  }
}
