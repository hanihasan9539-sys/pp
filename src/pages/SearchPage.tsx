import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const popularSearches = ["Leather", "Watch", "Sneakers", "Cashmere", "Pearl"];

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Search bar */}
      <div className="relative mb-6">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search premium products..."
          autoFocus
          className="w-full h-12 pl-12 pr-10 bg-secondary border-2 border-transparent rounded-lg text-foreground placeholder:text-muted-foreground focus:bg-background focus:border-primary focus:outline-none transition-all"
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {!query.trim() ? (
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Popular Searches</p>
          <div className="flex gap-2 flex-wrap">
            {popularSearches.map(s => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="px-4 h-9 rounded-full bg-secondary text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg font-semibold text-foreground mb-1">No results found</p>
          <p className="text-sm text-muted-foreground">Try a different search term</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-4">
            {results.length} result{results.length !== 1 ? "s" : ""} for "<span className="text-primary font-medium">{query}</span>"
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
            {results.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default SearchPage;
