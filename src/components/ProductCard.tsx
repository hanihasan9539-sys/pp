import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05, ease: [0.32, 0.72, 0, 1] }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="bg-card rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(0,0,0,.05),0_4px_6px_-1px_rgba(0,0,0,.1),0_2px_4px_-2px_rgba(0,0,0,.1)]">
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.isNew && (
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-md">
                  New
                </span>
              )}
              {product.discountPercentage && (
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-accent text-accent-foreground rounded-md">
                  -{product.discountPercentage}%
                </span>
              )}
              {product.tags.includes("trending") && !product.isNew && !product.discountPercentage && (
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-accent text-accent-foreground rounded-md">
                  🔥 Hot
                </span>
              )}
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <h3 className="text-sm font-semibold text-foreground truncate">{product.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">{product.shortDesc}</p>

            <div className="flex items-center gap-1 mt-2">
              <Star className="w-3.5 h-3.5 fill-rating text-rating" />
              <span className="text-xs font-medium text-foreground tabular-nums">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-base font-bold text-foreground tabular-nums">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through tabular-nums">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
