import Link from "next/link";

export default function Footer() {
  const year = 2025; // ✅ Fixed static year to avoid SSR mismatch

  return (
    <footer className="w-full bg-gradient-to-b from-[#12052D] to-[#0B021B] text-gray-300 py-14 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm space-y-6">
        {/* 🌟 Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-8 text-[15px] font-medium">
          <Link
            href="/privacy"
            className="hover:text-[#FFD84D] transition-all duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[#FFD84D] transition-all duration-300"
          >
            Terms
          </Link>
          <Link
            href="/refund"
            className="hover:text-[#FFD84D] transition-all duration-300"
          >
            Refund
          </Link>
          <Link
            href="/shipping"
            className="hover:text-[#FFD84D] transition-all duration-300"
          >
            Shipping
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#FFD84D] transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* 💎 Divider Line */}
        <div className="w-24 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#FFD84D]/50 to-transparent"></div>

        {/* 🧾 Copyright */}
        <p className="text-gray-400 text-sm">
          © {year}{" "}
          <span className="text-[#FFD84D] font-semibold">LookMenuz</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
