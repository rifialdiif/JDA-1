import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">Compunova</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">A beautiful Next.js application showcasing modern web development with multiple pages, dynamic routes, and elegant navigation.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/profile" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View Profile
            </Link>
            <Link href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
              Browse Products
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Fast Performance</h3>
            <p className="text-gray-600">Built with Next.js for optimal speed and user experience.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Beautiful Design</h3>
            <p className="text-gray-600">Modern UI with Tailwind CSS for stunning visuals.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Responsive</h3>
            <p className="text-gray-600">Works perfectly on all devices and screen sizes.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Our Pages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/profile" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Profile</h3>
              <p className="text-gray-600">View your personal profile</p>
            </Link>
            <Link href="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
              <p className="text-gray-600">Learn more about us</p>
            </Link>
            <Link href="/contact" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-600">Get in touch with us</p>
            </Link>
            <Link href="/products" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Products</h3>
              <p className="text-gray-600">Browse our products</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
