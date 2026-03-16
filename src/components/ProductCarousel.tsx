import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard"
import type { Product } from "@/data/products";

interface ProductCarouselProps {
  products: Product[];  
  title: string; 
  accentColor?: string;
  eyebrow?: string;
}
const ITEMS_PER_PAGE = 4;

export default function ProductCarousel({
    products,
  title,
  eyebrow = "Featured",
  accentColor = "#1A8BBF",
}: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Group products into pages of 4
  const pages = [];
  for (let i = 0; i < products.length; i += ITEMS_PER_PAGE) {
    const pageProducts = products.slice(i, i + ITEMS_PER_PAGE);
    const padded = [
      ...pageProducts,
      ...Array(Math.max(0, ITEMS_PER_PAGE - pageProducts.length)).fill(null),
    ];
    pages.push(padded);
  }

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newPage = Math.round(scrollLeft / clientWidth);
    setActivePage(Math.min(newPage, totalPages - 1));
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [totalPages]);

  const scrollToPage = (pageIndex: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: pageIndex * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const Header = () => (
    <div className="flex items-end justify-between mb-4 px-4 sm:px-6 lg:px-8">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: accentColor }}
          >
            {eyebrow}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground leading-tight">
          {title}
        </h2>
      </div>

      {totalPages > 1 && (
        <div className="sm:hidden text-sm font-medium" style={{ color: accentColor }}>
          {activePage + 1} / {totalPages}
        </div>
      )}
    </div>
  );

  return (
    <section className="w-full">
      {/* ── MOBILE: full-page snap, exactly 4 products at a time ── */}
      <div className="sm:hidden">
        <Header />

        {/* overflow-hidden prevents any bleed from the next page */}
        <div className="overflow-hidden px-4">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {pages.map((pageProducts, pageIndex) => (
              /* w-full = exactly 100% of the scroll container — no peek */
              <div
                key={pageIndex}
                className="snap-start snap-always shrink-0 w-full"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {pageProducts.map((product, i) =>
                    product ? (
                      <div key={product.id} className="relative group">
                        <ProductCard
                          product={product}
                          index={pageIndex * ITEMS_PER_PAGE + i}
                        />
                      </div>
                    ) : (
                      <div key={`empty-${pageIndex}-${i}`} aria-hidden className="invisible" />
                    )
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-5">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === activePage ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === activePage ? accentColor : "#94a3b8",
                  opacity: i === activePage ? 1 : 0.45,
                }}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── DESKTOP: static grid unchanged ── */}
      <div className="hidden sm:block">
        <Header />
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 px-6 lg:px-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}