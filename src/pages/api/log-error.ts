import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.error("🔴 Razorpay error log:", req.body.message);
  res.status(200).json({ received: true });
}
