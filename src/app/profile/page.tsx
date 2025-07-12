import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Rifialdi Faturrochman</h1>
                <p className="text-blue-100">Software Engineer</p>
                <p className="text-blue-100">rifialdi@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-600">Full Name:</span>
                    <span className="text-gray-800">Rifialdi Faturrochman</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-600">Age:</span>
                    <span className="text-gray-800">22 years old</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-600">Location:</span>
                    <span className="text-gray-800">Purwakarta, Indonesia</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-600">Phone:</span>
                    <span className="text-gray-800">+62 899-6261-319</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-semibold text-gray-800 mb-2">Product Development</h3>
                    <p className="text-gray-600 text-sm">Expertise in developing innovative products from concept to launch, including market research, user experience design, and product strategy.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h3 className="font-semibold text-gray-800 mb-2">Software Development</h3>
                    <p className="text-gray-600 text-sm">Full-stack development with modern technologies including React, Node.js, Python, and cloud platforms like AWS and Azure.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h3 className="font-semibold text-gray-800 mb-2">Machine Learning</h3>
                    <p className="text-gray-600 text-sm">Advanced knowledge in AI/ML algorithms, data science, and implementing intelligent solutions for business problems.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate software engineer with over 5 years of experience in web development. I specialize in modern JavaScript frameworks like React and Next.js, and I love creating beautiful, responsive user interfaces. When I'm
                not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Me
              </Link>
              <Link href="/products" className="bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
