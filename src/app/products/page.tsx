import Link from "next/link";

const products = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "A modern e-commerce solution with advanced features like inventory management, payment processing, and analytics dashboard.",
    price: "$2,500",
    category: "Web Application",
    image: "🛒",
    features: ["Payment Integration", "Inventory Management", "Analytics Dashboard", "Mobile Responsive"],
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    price: "$1,800",
    category: "Mobile App",
    image: "📋",
    features: ["Real-time Updates", "Team Collaboration", "Progress Tracking", "File Sharing"],
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "A stunning portfolio website with smooth animations, blog functionality, and contact forms.",
    price: "$800",
    category: "Website",
    image: "🎨",
    features: ["Responsive Design", "Blog System", "Contact Forms", "SEO Optimized"],
  },
  {
    id: 4,
    name: "Restaurant Management System",
    description: "Complete restaurant management solution including order processing, table reservations, and kitchen management.",
    price: "$3,200",
    category: "Business Solution",
    image: "🍽️",
    features: ["Order Processing", "Table Reservations", "Kitchen Management", "POS Integration"],
  },
  {
    id: 5,
    name: "Learning Management System",
    description: "An educational platform with course creation, student management, and progress tracking capabilities.",
    price: "$4,500",
    category: "Educational",
    image: "📚",
    features: ["Course Creation", "Student Management", "Progress Tracking", "Video Streaming"],
  },
  {
    id: 6,
    name: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, search filters, and agent management.",
    price: "$3,800",
    category: "Real Estate",
    image: "🏠",
    features: ["Property Listings", "Advanced Search", "Agent Management", "Virtual Tours"],
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our range of innovative digital solutions designed to help businesses and individuals achieve their goals with cutting-edge technology.</p>
        </div>

        {/* Filter Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">All Products</button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border">Web Applications</button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border">Mobile Apps</button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border">Business Solutions</button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-4xl mb-4">{product.image}</div>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <Link href={`/products/${product.id}`} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Don't see exactly what you're looking for? We specialize in creating custom solutions tailored to your specific needs and requirements.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get a Quote
              </Link>
              <Link href="/about" className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
