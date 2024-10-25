import { useState } from "react";
import { Product } from "../../types/product";
import { useCart } from "../../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Check, RefreshCw, Truck } from "lucide-react";

export function ProductInfo({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >(() =>
    product.options.reduce(
      (acc, option) => ({
        ...acc,
        [option.id]: option.values[0],
      }),
      {}
    )
  );
  const [isAdding, setIsAdding] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    addItem({
      productId: product.id,
      quantity: 1,
      selectedOptions,
      product,
    });

    setIsAdding(false);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Title & Price */}
      <div>
        <h1 className="text-3xl font-medium text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-2xl font-medium text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{product.description}</p>

      {/* Options */}
      <div className="grid grid-cols-2 gap-4">
        {product.options.map((option) => (
          <div key={option.id} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {option.name}
            </label>
            <select
              value={selectedOptions[option.id]}
              onChange={(e) =>
                setSelectedOptions((prev) => ({
                  ...prev,
                  [option.id]: e.target.value,
                }))
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5
                       focus:ring-2 focus:ring-black focus:border-transparent"
            >
              {option.values.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Add to Cart Button */}
      <div className="relative">
        <motion.button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-4 rounded-lg flex items-center justify-center space-x-2
                     transition-colors ${
                       isAdding ? "bg-gray-200" : "bg-black hover:bg-gray-900"
                     }`}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {isAdding ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="w-5 h-5 text-gray-500" />
            </motion.div>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Add to Cart</span>
            </>
          )}
        </motion.button>

        {/* Success Notification */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-green-50 
                        border border-green-200 rounded-lg text-green-700 flex 
                        items-center justify-center space-x-2"
            >
              <Check className="w-5 h-5" />
              <span>Added to cart successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Additional Info */}
      <div className="pt-6 border-t border-gray-200">
        <div className="space-y-4">
          <div className="flex items-center text-gray-600">
            <Truck className="w-5 h-5 mr-3" />
            <span>Free shipping on orders over $100</span>
          </div>
          <div className="flex items-center text-gray-600">
            <RefreshCw className="w-5 h-5 mr-3" />
            <span>30-day return policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
