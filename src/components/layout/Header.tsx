import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Ceramic Store
          </Link>

          <div className="flex items-center">
            <Link
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-black text-white text-xs 
                               w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
