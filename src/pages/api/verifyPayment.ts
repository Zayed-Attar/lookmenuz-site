/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      console.error("❌ Missing Razorpay secret key in .env");
      return res.status(500).json({ error: "Razorpay secret not configured" });
    }

    // ✅ Step 1: Verify Razorpay signature
    const hmac = crypto.createHmac("sha256", keySecret);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature !== razorpay_signature) {
      console.error("❌ Invalid Razorpay signature");
      return res.status(400).json({ error: "Invalid signature" });
    }

    console.log("✅ Payment verified successfully");

    // ✅ Step 2: Redirect to success page
    return res.status(200).json({
      success: true,
      redirectUrl: "/subscription-success",
    });
  } catch (error: any) {
    console.error("❌ Error verifying payment:", error.message || error);
    return res.status(500).json({ error: "Verification failed" });
  }
}
