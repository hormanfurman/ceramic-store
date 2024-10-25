// src/components/navigation/Breadcrumbs.tsx
import { Link, useLocation } from "react-router-dom";

type BreadcrumbsProps = {
  productName?: string;
};

export function Breadcrumbs({ productName }: BreadcrumbsProps) {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const getReadableName = (path: string) => {
    switch (path) {
      case "vases":
        return "Vases";
      case "1":
        return productName || "Product";
      default:
        return path.charAt(0).toUpperCase() + path.slice(1);
    }
  };

  return (
    <nav className="bg-white border-b">
      <div className="max-w-[1200px] mx-auto px-4 py-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          {paths.map((path, index) => (
            <div key={path} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link
                to={`/${paths.slice(0, index + 1).join("/")}`}
                className={`hover:text-gray-900 transition-colors ${
                  index === paths.length - 1 ? "text-gray-900 font-medium" : ""
                }`}
              >
                {getReadableName(path)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
