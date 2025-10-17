import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-8 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm space-y-4">
        {/* 🔗 Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/privacy"
            className="hover:text-yellow-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-yellow-400 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/refund"
            className="hover:text-yellow-400 transition-colors"
          >
            Refund
          </Link>
          <Link
            href="/shipping"
            className="hover:text-yellow-400 transition-colors"
          >
            Shipping
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* 📅 Copyright Section */}
        <p className="text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">LookMenuz</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
