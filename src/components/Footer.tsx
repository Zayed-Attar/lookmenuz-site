import Link from "next/link";

export default function Footer() {
  const year = 2025; // keep static to avoid SSR mismatch

  return (
    <footer className="w-full bg-gradient-to-b from-[#12052D] to-[#0B021B] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm space-y-4">
        {/* Footer Navigation (fake links) */}
        <div className="flex flex-wrap justify-center gap-6 text-[15px] font-medium">
          <Link
            href="#"
            className="hover:text-[#FFD84D] transition-all duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="hover:text-[#FFD84D] transition-all duration-200"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="hover:text-[#FFD84D] transition-all duration-200"
          >
            Refund
          </Link>
          <Link
            href="#"
            className="hover:text-[#FFD84D] transition-all duration-200"
          >
            Shipping
          </Link>
          <Link
            href="#"
            className="hover:text-[#FFD84D] transition-all duration-200"
          >
            Contact
          </Link>
        </div>

        {/* subtle divider */}
        <div className="w-20 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#FFD84D]/40 to-transparent"></div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {year}{" "}
          <span className="text-[#FFD84D] font-semibold">LookMenuz</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
