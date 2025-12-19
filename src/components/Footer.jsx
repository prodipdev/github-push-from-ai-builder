export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold">Golden Legacy</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in gold trading and investment since 1998.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Home</button></li>
              <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">About Us</button></li>
              <li><button onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Products</button></li>
              <li><button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Services</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Gold Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Investment Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Secure Storage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Market Analysis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Gold Street</li>
              <li>Financial District, NY 10004</li>
              <li>+1 (555) 123-4567</li>
              <li>info@goldenlegacy.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {currentYear} Golden Legacy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}