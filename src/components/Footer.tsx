import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-6 border-t border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/privacy" className="hover:text-yellow-400">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-yellow-400">
            Terms
          </Link>
          <Link href="/refund" className="hover:text-yellow-400">
            Refund
          </Link>
          <Link href="/shipping" className="hover:text-yellow-400">
            Shipping
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </div>
        <p>© {new Date().getFullYear()} LookMenuz. All rights reserved.</p>
      </div>
    </footer>
  );
}
