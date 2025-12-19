export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Golden Legacy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted name in gold trading since 1998, committed to transparency, quality, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To provide the highest quality gold products and services while maintaining the trust and confidence of our clients through ethical business practices and expert guidance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Certified and hallmarked gold products</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Competitive market rates and pricing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Expert consultation and market insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Experience</h4>
              <p className="text-gray-600">
                Over 25 years of excellence in gold trading and investment services, serving thousands of satisfied customers worldwide.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">
                All our gold products are certified, hallmarked, and come with authenticity certificates from recognized authorities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Customer Trust</h4>
              <p className="text-gray-600">
                Built on transparency and integrity, we have earned the trust of over 50,000 clients who rely on us for their gold investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}