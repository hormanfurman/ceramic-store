import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm p-8 text-center">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[150px] leading-none font-bold text-gray-100">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-gray-900">Oops!</div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have
          been removed, renamed, or doesn't exist.
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-black text-white py-3 px-4 rounded-lg
                     hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="block w-full bg-white text-gray-700 py-3 px-4 rounded-lg
                     border border-gray-200 hover:border-gray-300 hover:bg-gray-50 
                     transition-all duration-200 font-medium"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
