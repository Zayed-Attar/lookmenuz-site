"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 🔶 Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/LM.png" // ✅ Image must be in /public directory
              alt="LookMenuz Logo"
              fill
              className="object-contain rounded-md"
              priority
            />
          </div>
          <span className="text-white font-bold text-lg">LookMenuz</span>
        </Link>

        {/* 🧭 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#features" className="hover:text-yellow-400 transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-yellow-400 transition">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>

        {/* ⚡ CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#pricing"
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition"
          >
            Get Started
          </Link>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-400"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 text-center py-4 space-y-4">
          <Link
            href="#features"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="#pricing"
            className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
