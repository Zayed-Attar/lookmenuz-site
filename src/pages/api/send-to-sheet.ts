import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    // ✅ Your Google Apps Script URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwidS3ZJqNCs-CXx3w33WvG-0naRp0rI5IsF0u7P_lRHoZfrnaPVBl6dvLx9N1DJKZF/exec";

    // Forward the JSON data to Google Script
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.text();
    console.log("📡 Google Script Response:", data);

    return res
      .status(200)
      .json({ success: true, message: "✅ Data sent successfully" });
  } catch (error) {
    console.error("❌ Error sending data:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}
