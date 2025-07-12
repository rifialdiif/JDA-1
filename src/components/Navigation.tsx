import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            Compunova
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/profile" className="hover:text-blue-200 transition-colors">
              Profile
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
            <Link href="/products" className="hover:text-blue-200 transition-colors">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
