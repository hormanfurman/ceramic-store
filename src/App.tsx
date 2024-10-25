// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { HomePage } from "./components/pages/HomePage";
import { VasesPage } from "./components/pages/VasesPage";
import { ProductPage } from "./components/product/ProductPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { CartPage } from "./components/pages/CartPage";
import { mockProduct } from "./lib/mock-data";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/vases" element={<VasesPage />} />
              <Route
                path="/vases/:id"
                element={<ProductPage product={mockProduct} />}
              />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
