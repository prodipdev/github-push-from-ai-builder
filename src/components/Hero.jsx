import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-8 animate-fade-in">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ developers</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up leading-tight">
          Build Amazing
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Products Faster
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
          The modern platform for developers who want to ship quality products without the complexity. Start building in minutes, not days.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
          <button className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="group px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 border border-gray-200">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
            <div className="text-sm text-gray-600">Uptime SLA</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-3">
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">User Rating</div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-16 animate-fade-in-up animation-delay-800">
          <p className="text-sm text-gray-500 mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-700">TechCorp</div>
            <div className="text-2xl font-bold text-gray-700">InnovateLab</div>
            <div className="text-2xl font-bold text-gray-700">DevStudio</div>
            <div className="text-2xl font-bold text-gray-700">CloudBase</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero