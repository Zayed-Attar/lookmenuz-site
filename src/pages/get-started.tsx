"use client";

import { useState } from "react";

export default function GetStarted() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    subscriptionType: "Monthly (₹1499)",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // 📨 Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting...");

    try {
      // 👇 Send data to your Next.js backend route
      const response = await fetch("/api/send-to-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Submitted successfully!");
        setForm({
          name: "",
          email: "",
          contact: "",
          subscriptionType: "Monthly (₹1499)",
        });

        // 💡 Wait 2 seconds before closing/redirecting
        setTimeout(() => {
          if (window.opener) {
            // If opened as popup
            window.close();
          } else {
            // If main tab → redirect to homepage
            window.location.href = "https://lookmenuz.com";
          }
        }, 2000);
      } else {
        setStatus("⚠️ Submission failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setStatus("⚠️ Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // 📋 Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0B021B] to-[#12052D] text-white text-center px-6 animate-fadeIn">
      <h1 className="text-4xl font-bold mb-6 text-[#FFD84D]">
        Get Started with LookMenuz
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-[0_0_20px_rgba(255,216,77,0.15)]"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full mb-4 px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD84D]"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full mb-4 px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD84D]"
        />
        <input
          type="text"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="Your Contact Number"
          required
          className="w-full mb-4 px-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD84D]"
        />

        <select
          name="subscriptionType"
          value={form.subscriptionType}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-3 rounded-lg bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD84D]"
        >
          <option>Monthly (₹1499)</option>
          <option>Quarterly (₹3999)</option>
          <option>Yearly (₹14999)</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#FFD84D] hover:shadow-[0_0_25px_rgba(255,216,77,0.5)] hover:bg-[#EAB308]"
          } text-black font-semibold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(255,216,77,0.3)] transition-all duration-300`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-400">{status}</p>
    </div>
  );
}
