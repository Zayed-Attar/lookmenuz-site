"use client"; // ✅ Ensures client-side rendering to avoid hydration mismatch

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // For mobile menu toggle

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="bg-black text-white py-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/LM.png"
            alt="LookMenuz Logo"
            className="h-10 w-auto rounded-md"
          />

          <span className="text-xl font-semibold tracking-wide">LookMenuz</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="#features" className="hover:text-yellow-400 transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-yellow-400 transition">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#get-started"
            className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-300 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-3">
          <Link
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-yellow-400"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-yellow-400"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-yellow-400"
          >
            Contact
          </Link>
          <Link
            href="#get-started"
            onClick={() => setMenuOpen(false)}
            className="block bg-yellow-400 text-black font-medium px-4 py-2 rounded-md text-center hover:bg-yellow-300 transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
