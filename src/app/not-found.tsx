import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-9xl font-bold text-blue-600 mb-4 animate-bounce">404</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The page you're looking for seems to have wandered off into the digital wilderness. Don't worry, we'll help you find your way back!</p>

          {/* Fun Illustration */}
          <div className="mb-8">
            <div className="text-6xl mb-4">🌲</div>
            <div className="text-sm text-gray-500">"Even the best explorers sometimes take a wrong turn"</div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <div className="text-2xl mb-2">🏠</div>
              <h3 className="font-semibold text-gray-800 mb-1">Go Home</h3>
              <p className="text-sm text-gray-600">Return to the homepage</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-600">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-semibold text-gray-800 mb-1">Browse Products</h3>
              <p className="text-sm text-gray-600">Explore our offerings</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-700">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-semibold text-gray-800 mb-1">Contact Us</h3>
              <p className="text-sm text-gray-600">Get in touch</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              🏠 Go Home
            </Link>
            <Link href="/products" className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
              📋 Browse Products
            </Link>
            <Link href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              📞 Contact Us
            </Link>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-gray-800 mb-2">Looking for something specific?</h3>
            <p className="text-gray-600 text-sm mb-4">Try these popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/profile" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-blue-50 transition-colors border border-blue-200">
                Profile
              </Link>
              <Link href="/about" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-blue-50 transition-colors border border-blue-200">
                About
              </Link>
              <Link href="/contact" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-blue-50 transition-colors border border-blue-200">
                Contact
              </Link>
              <Link href="/products" className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-blue-50 transition-colors border border-blue-200">
                Products
              </Link>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
            <h3 className="font-semibold text-gray-800 mb-2">Did you know?</h3>
            <p className="text-gray-600 text-sm">The first 404 error was created in 1993 by Tim Berners-Lee at CERN. The "404" number was chosen because room 404 was where the web servers were located!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
