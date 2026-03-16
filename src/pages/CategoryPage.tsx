import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { name } = useParams();
  const filtered = name ? products.filter(p => p.category === name) : products;
  const title = name || "All Categories";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-xl sm:text-2xl font-extrabold text-foreground mb-5 sm:mb-6">{title}</h1>

      {/* Category pills — scroll on mobile, wrap on desktop - REDUCED SIZE */}
      <div className="flex gap-1.5 overflow-x-auto sm:overflow-x-visible sm:flex-wrap scrollbar-hide mb-5 pb-1">
        <Link
          to="/categories"
          className={`px-3 sm:px-4 h-7 sm:h-9 flex items-center rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
            !name
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          All
        </Link>
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/category/${cat.name}`}
            className={`px-3 sm:px-4 h-7 sm:h-9 flex items-center rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 sm:flex-shrink ${
              name === cat.name
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">
          No products in this category yet.
        </p>
      ) : (
        <>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pb-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CategoryPage;