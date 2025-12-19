export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Certified Quality',
      description: 'All products are hallmarked and certified by international standards.',
      stat: '100%'
    },
    {
      title: 'Best Prices',
      description: 'Competitive rates aligned with global market prices.',
      stat: 'Live Rates'
    },
    {
      title: 'Secure Transactions',
      description: 'Bank-level security for all your purchases and investments.',
      stat: '256-bit SSL'
    },
    {
      title: 'Expert Team',
      description: 'Experienced professionals with decades of industry knowledge.',
      stat: '25+ Years'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Golden Legacy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out in the gold trading industry with our commitment to excellence and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-xl">
                  {reason.stat}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Gold Investment Journey?</h3>
          <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their precious metal investments.
          </p>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-yellow-600 font-bold rounded-lg shadow-lg hover:bg-yellow-50 transform hover:scale-105 transition-all duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}