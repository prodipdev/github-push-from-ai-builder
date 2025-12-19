import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Golden Legacy</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">About</button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">Products</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">Contact</button>
          </nav>

          <button onClick={() => scrollToSection('contact')} className="hidden md:block px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200">
            Get Quote
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium text-left">About</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium text-left">Products</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium text-left">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium text-left">Contact</button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 text-left">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}