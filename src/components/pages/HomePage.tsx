import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Handcrafted Ceramics
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our collection of unique, handmade ceramic pieces that
              bring elegance and style to any space.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/vases" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="aspect-[4/5] bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="https://via.placeholder.com/400x500?text=Vases"
                    alt="Vases Collection"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Vases Collection
                  </h3>
                  <p className="text-sm text-white/80">
                    Explore our collection of handcrafted ceramic vases
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/bowls" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="aspect-[4/5] bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="https://via.placeholder.com/400x500?text=Bowls"
                    alt="Bowls Collection"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Bowls Collection
                  </h3>
                  <p className="text-sm text-white/80">
                    Beautiful ceramic bowls for your home
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/plates" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="aspect-[4/5] bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="https://via.placeholder.com/400x500?text=Plates"
                    alt="Plates Collection"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Plates Collection
                  </h3>
                  <p className="text-sm text-white/80">
                    Elegant ceramic plates and dinnerware
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Why Choose Our Ceramics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Handcrafted</h3>
              <p className="text-gray-600">
                Each piece is carefully crafted by skilled artisans
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Unique Designs</h3>
              <p className="text-gray-600">
                One-of-a-kind pieces that stand out
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🌿</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Sustainable</h3>
              <p className="text-gray-600">
                Eco-friendly materials and processes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
