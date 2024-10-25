// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              Handcrafted ceramic pieces made with love and care for your home.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/vases" className="hover:text-gray-900">
                  Vases
                </Link>
              </li>
              <li>
                <Link to="/bowls" className="hover:text-gray-900">
                  Bowls
                </Link>
              </li>
              <li>
                <Link to="/plates" className="hover:text-gray-900">
                  Plates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/shipping" className="hover:text-gray-900">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-gray-900">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border rounded-lg text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          © 2024 Ceramic Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
