import { Product } from "../../types/product";
import { Breadcrumbs } from "../navigation/Breadcrumbs";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";

type ProductPageProps = {
  product: Product;
};
export function ProductPage({ product }: ProductPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs productName={product.name} />
      <main className="max-w-[1200px] mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductGallery images={product.images} />
            <ProductInfo product={product} />
          </div>
        </div>
      </main>
    </div>
  );
}
