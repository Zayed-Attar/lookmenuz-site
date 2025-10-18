"use client";
import { useState } from "react";

export default function GetStartedForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    subscriptionType: "Monthly (₹1499)",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyz-gDHwo10_e3k0lvsU1ZvfPQLwXmIfoZ8G9UksRpAL1BwzJl5O4cmq6TE4JUlDTPS/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        setStatus("✅ Submitted successfully!");
        setForm({
          name: "",
          email: "",
          contact: "",
          subscriptionType: "Monthly (₹1499)",
        });
      } else {
        setStatus("❌ Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Network error. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#12052D]/70 p-8 rounded-2xl shadow-lg text-white w-full max-w-md mx-auto text-center border border-[#FFD84D]/30"
    >
      <h2 className="text-3xl font-bold mb-5 text-[#FFD84D]">Get Started</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full mb-4 px-4 py-2 rounded text-black focus:outline-none"
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full mb-4 px-4 py-2 rounded text-black focus:outline-none"
        required
      />

      <input
        type="tel"
        placeholder="Contact Number"
        value={form.contact}
        onChange={(e) => setForm({ ...form, contact: e.target.value })}
        className="w-full mb-4 px-4 py-2 rounded text-black focus:outline-none"
        required
      />

      <select
        value={form.subscriptionType}
        onChange={(e) => setForm({ ...form, subscriptionType: e.target.value })}
        className="w-full mb-5 px-4 py-2 rounded text-black"
      >
        <option>Monthly (₹1499)</option>
        <option>Quarterly (₹3999)</option>
        <option>Yearly (₹14999)</option>
      </select>

      <button
        type="submit"
        className="bg-[#FFD84D] hover:bg-[#EAB308] text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200"
      >
        Submit
      </button>

      <p className="mt-3 text-sm text-gray-400">{status}</p>
    </form>
  );
}
