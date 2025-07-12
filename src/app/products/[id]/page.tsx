import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "A modern e-commerce solution with advanced features like inventory management, payment processing, and analytics dashboard.",
    longDescription:
      "Our comprehensive e-commerce platform is designed to help businesses of all sizes create and manage their online stores with ease. Built with modern technologies like React, Node.js, and MongoDB, this solution provides everything you need to start selling online.",
    price: "$2,500",
    category: "Web Application",
    image: "🛒",
    features: ["Payment Integration", "Inventory Management", "Analytics Dashboard", "Mobile Responsive"],
    techStack: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    deliveryTime: "6-8 weeks",
    support: "1 year free support",
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    longDescription: "Streamline your team's workflow with our intuitive task management application. Features real-time collaboration, progress tracking, and seamless integration with popular tools like Slack and Google Workspace.",
    price: "$1,800",
    category: "Mobile App",
    image: "📋",
    features: ["Real-time Updates", "Team Collaboration", "Progress Tracking", "File Sharing"],
    techStack: ["React Native", "Firebase", "Redux", "Socket.io", "AWS"],
    deliveryTime: "4-6 weeks",
    support: "6 months free support",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "A stunning portfolio website with smooth animations, blog functionality, and contact forms.",
    longDescription: "Showcase your work with our beautifully designed portfolio website. Features smooth animations, blog functionality, and SEO optimization to help you stand out in the digital world.",
    price: "$800",
    category: "Website",
    image: "🎨",
    features: ["Responsive Design", "Blog System", "Contact Forms", "SEO Optimized"],
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Contentful CMS"],
    deliveryTime: "2-3 weeks",
    support: "3 months free support",
  },
  {
    id: 4,
    name: "Restaurant Management System",
    description: "Complete restaurant management solution including order processing, table reservations, and kitchen management.",
    longDescription: "Transform your restaurant operations with our comprehensive management system. From order processing to kitchen management, this solution helps you streamline every aspect of your restaurant business.",
    price: "$3,200",
    category: "Business Solution",
    image: "🍽️",
    features: ["Order Processing", "Table Reservations", "Kitchen Management", "POS Integration"],
    techStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Stripe"],
    deliveryTime: "8-10 weeks",
    support: "1 year free support",
  },
  {
    id: 5,
    name: "Learning Management System",
    description: "An educational platform with course creation, student management, and progress tracking capabilities.",
    longDescription:
      "Empower educators and learners with our comprehensive learning management system. Create engaging courses, track student progress, and deliver content in multiple formats including video, text, and interactive quizzes.",
    price: "$4,500",
    category: "Educational",
    image: "📚",
    features: ["Course Creation", "Student Management", "Progress Tracking", "Video Streaming"],
    techStack: ["React", "Django", "PostgreSQL", "AWS S3", "WebRTC"],
    deliveryTime: "10-12 weeks",
    support: "2 years free support",
  },
  {
    id: 6,
    name: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, search filters, and agent management.",
    longDescription: "Connect buyers and sellers with our comprehensive real estate platform. Features advanced search filters, virtual tours, and agent management tools to streamline the property buying and selling process.",
    price: "$3,800",
    category: "Real Estate",
    image: "🏠",
    features: ["Property Listings", "Advanced Search", "Agent Management", "Virtual Tours"],
    techStack: ["React", "Node.js", "MongoDB", "Google Maps API", "AWS"],
    deliveryTime: "8-10 weeks",
    support: "1 year free support",
  },
];

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link href="/products" className="text-gray-700 hover:text-blue-600">
                    Products
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-500">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image and Basic Info */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl mb-6 text-center">{product.image}</div>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.longDescription}</p>

              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </Link>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Delivery Time</h4>
                  <p className="text-gray-600">{product.deliveryTime}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Support</h4>
                  <p className="text-gray-600">{product.support}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {product.techStack.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Products */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
              <div className="grid grid-cols-2 gap-4">
                {products
                  .filter((p) => p.id !== product.id)
                  .slice(0, 4)
                  .map((relatedProduct) => (
                    <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                      <div className="text-2xl mb-2">{relatedProduct.image}</div>
                      <h3 className="font-semibold text-gray-800 mb-1">{relatedProduct.name}</h3>
                      <p className="text-sm text-gray-600">{relatedProduct.price}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Let's discuss your project requirements and create a custom solution that perfectly fits your needs.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
              <Link href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
