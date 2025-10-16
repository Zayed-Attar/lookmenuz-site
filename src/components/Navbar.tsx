import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black/90 text-white border-b border-gray-800 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-xl font-bold tracking-wide">
          LookMenuz
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/privacy" className="hover:text-yellow-400 transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-yellow-400 transition">
            Terms
          </Link>
          <Link href="/refund" className="hover:text-yellow-400 transition">
            Refund
          </Link>
          <Link href="/shipping" className="hover:text-yellow-400 transition">
            Shipping
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
