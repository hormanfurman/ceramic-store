import { useState } from "react";
import { ShoppingCart, Check, Circle } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

type AddToCartButtonProps = {
  onAdd: () => void;
  disabled?: boolean;
};

export function AddToCartButton({ onAdd, disabled }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onAdd();
    setIsLoading(false);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={cn(
        "w-full py-4 px-6",
        "flex items-center justify-center gap-2",
        "text-sm font-medium text-white rounded-md",
        "transition-all duration-200",
        isAdded ? "bg-green-600" : "bg-black",
        "hover:bg-opacity-90",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      )}
    >
      {isLoading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Circle className="w-4 h-4" />
        </motion.div>
      ) : isAdded ? (
        <>
          <Check className="w-4 h-4" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </>
      )}
    </button>
  );
}
