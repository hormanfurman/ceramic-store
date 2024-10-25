import { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../types/product";

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartItem = {
  productId: string;
  quantity: number;
  selectedOptions: Record<string, string>;
  product: Product;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (
    productId: string,
    selectedOptions: Record<string, string>
  ) => void;
  updateQuantity: (
    productId: string,
    selectedOptions: Record<string, string>,
    quantity: number
  ) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const getItemKey = (
    productId: string,
    selectedOptions: Record<string, string>
  ) => {
    return `${productId}-${JSON.stringify(selectedOptions)}`;
  };

  const addItem = (newItem: CartItem) => {
    setItems((currentItems) => {
      const itemKey = getItemKey(newItem.productId, newItem.selectedOptions);

      const existingItemIndex = currentItems.findIndex(
        (item) => getItemKey(item.productId, item.selectedOptions) === itemKey
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + newItem.quantity,
        };
        return updatedItems;
      }

      return [...currentItems, newItem];
    });
  };

  const removeItem = (
    productId: string,
    selectedOptions: Record<string, string>
  ) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          getItemKey(item.productId, item.selectedOptions) !==
          getItemKey(productId, selectedOptions)
      )
    );
  };

  const updateQuantity = (
    productId: string,
    selectedOptions: Record<string, string>,
    quantity: number
  ) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        getItemKey(item.productId, item.selectedOptions) ===
        getItemKey(productId, selectedOptions)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
