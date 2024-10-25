export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductImage = {
  id: string;
  url: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: ProductImage[];
  options: ProductOption[];
};
