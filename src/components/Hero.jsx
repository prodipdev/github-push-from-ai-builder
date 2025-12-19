export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Gold Trading & Investment Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Trust in purity, invest in prosperity. We offer certified gold products and expert trading services for over 25 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200">
                Start Trading
              </button>
              <button onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-yellow-600 font-bold rounded-lg shadow-lg border-2 border-yellow-600 hover:bg-yellow-50 transform hover:scale-105 transition-all duration-200">
                View Products
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-yellow-600">25+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-600">50K+</p>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-600">99.9%</p>
                <p className="text-gray-600 text-sm">Pure Gold</p>
              </div>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm1-5a1 1 0 100 2 1 1 0 000-2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Certified Gold</h3>
                    <p className="text-gray-600">100% Authentic & Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}