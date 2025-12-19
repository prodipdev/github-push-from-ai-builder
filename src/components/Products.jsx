export default function Products() {
  const products = [
    {
      name: 'Gold Bars',
      weight: '1g - 1kg',
      purity: '99.99%',
      description: 'Investment-grade gold bars with certified purity and authenticity.',
      image: '🏆'
    },
    {
      name: 'Gold Coins',
      weight: '1g - 50g',
      purity: '99.9%',
      description: 'Collectible and investment gold coins from renowned mints worldwide.',
      image: '🪙'
    },
    {
      name: 'Gold Jewelry',
      weight: 'Custom',
      purity: '18K - 24K',
      description: 'Exquisite handcrafted jewelry pieces for special occasions.',
      image: '💍'
    },
    {
      name: 'Gold Biscuits',
      weight: '5g - 100g',
      purity: '99.9%',
      description: 'Premium gold biscuits perfect for gifting and investment.',
      image: '📦'
    }
  ]

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gold Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive range of certified gold products suitable for investment and personal use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 text-center">
                <div className="text-6xl mb-4">{product.image}</div>
                <h3 className="text-2xl font-bold text-white">{product.name}</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Weight Range</p>
                    <p className="font-semibold text-gray-900">{product.weight}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Purity</p>
                    <p className="font-semibold text-yellow-600">{product.purity}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <button className="w-full px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}