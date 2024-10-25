import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductImage } from "../../types/product";
import { cn } from "../../lib/utils";

type ProductGalleryProps = {
  images: ProductImage[];
};

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="space-y-6">
      <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
            className="p-2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % images.length)
            }
            className="p-2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "aspect-square rounded-lg overflow-hidden",
              "transition-all duration-200",
              currentIndex === index
                ? "ring-2 ring-black ring-offset-2"
                : "opacity-50 hover:opacity-100"
            )}
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
