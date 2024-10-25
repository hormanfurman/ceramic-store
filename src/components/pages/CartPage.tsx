import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Trash2, Minus, Plus } from "lucide-react";

export function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg 
                       hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.productId}-${JSON.stringify(
                  item.selectedOptions
                )}`}
                className="bg-white rounded-lg p-4 flex gap-4"
              >
                <img
                  src={item.product.images[0].url}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />

                <div className="flex-1">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <div className="text-sm text-gray-600 mt-1">
                    {Object.entries(item.selectedOptions).map(
                      ([key, value]) => (
                        <span key={key} className="mr-4">
                          {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                        </span>
                      )
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.selectedOptions,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.selectedOptions,
                            item.quantity + 1
                          )
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() =>
                          removeItem(item.productId, item.selectedOptions)
                        }
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 h-fit">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {totalPrice >= 100 ? "Free" : "$10.00"}
                </span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-6">
                <span className="font-medium">Total</span>
                <span className="font-medium">
                  ${(totalPrice + (totalPrice >= 100 ? 0 : 10)).toFixed(2)}
                </span>
              </div>

              <button
                className="w-full bg-black text-white py-3 rounded-lg 
                         hover:bg-gray-800 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
