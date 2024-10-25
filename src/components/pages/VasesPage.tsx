import { Link } from "react-router-dom";
import { mockProduct } from "../../lib/mock-data";

export function VasesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Vases</span>
          </div>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">
          Vases Collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to={`/vases/${mockProduct.id}`} className="group">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100">
                <img
                  src={mockProduct.images[0].url}
                  alt={mockProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900 group-hover:text-gray-700">
                  {mockProduct.name}
                </h2>
                <p className="mt-1 text-gray-600">${mockProduct.price}</p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
