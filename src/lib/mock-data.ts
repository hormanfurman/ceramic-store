import { Product } from "../types/product";

export const mockProduct: Product = {
  id: "1",
  name: "Minimalist Ceramic Vase",
  description:
    "Handcrafted ceramic vase with a modern, minimalist design. Perfect for both contemporary and traditional spaces. Each piece is unique and carefully made by artisans.",
  price: 89.99,
  currency: "USD",
  images: [
    {
      id: "1",
      url: "https://via.placeholder.com/400x400?text=Image+1",
      alt: "White ceramic vase front view",
    },
    {
      id: "2",
      url: "https://via.placeholder.com/400x400?text=Image+2",
      alt: "White ceramic vase side view",
    },
    {
      id: "3",
      url: "https://via.placeholder.com/400x400?text=Image+3",
      alt: "White ceramic vase detail view",
    },
  ],
  options: [
    {
      id: "size",
      name: "Size",
      values: ["Small", "Medium", "Large"],
    },
    {
      id: "color",
      name: "Color",
      values: ["White", "Sand", "Gray"],
    },
  ],
};
