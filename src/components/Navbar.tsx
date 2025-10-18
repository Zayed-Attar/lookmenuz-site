"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#0B021B]/90 to-[#12052D]/90 backdrop-blur-lg border-b border-white/10 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 🔶 Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9">
            <Image
              src="/LM.png"
              alt="LookMenuz Logo"
              fill
              className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>
          <span className="text-white font-semibold text-lg tracking-wide group-hover:text-[#FACC15] transition">
            LookMenuz
          </span>
        </Link>

        {/* 🧭 Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          <Link
            href="#features"
            className="text-gray-300 hover:text-[#FACC15] transition-colors duration-300"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-gray-300 hover:text-[#FACC15] transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-[#FACC15] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* ⚡ CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#pricing"
            className="bg-[#FACC15] text-black font-semibold px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.4)] hover:bg-[#EAB308] hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-[#FACC15] transition"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B021B]/95 border-t border-white/10 text-center py-5 space-y-5 animate-fadeIn">
          <Link
            href="#features"
            className="block text-gray-300 hover:text-[#FACC15] transition"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="block text-gray-300 hover:text-[#FACC15] transition"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="block text-gray-300 hover:text-[#FACC15] transition"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="#pricing"
            className="inline-block bg-[#FACC15] text-black font-semibold px-5 py-2.5 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.4)] hover:bg-[#EAB308] transition-all duration-300"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
