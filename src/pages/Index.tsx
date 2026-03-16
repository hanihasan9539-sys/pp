import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import HeroCarousel from "@/components/HeroCarousel"
import ProductCard from "@/components/ProductCard"
import ProductCarousel from "@/components/ProductCarousel"
import { products, categories } from "@/data/products"
import Footer from "@/components/Footer"

const SectionHeader = ({
  title,
  eyebrow = "Featured",
  accentColor = "#1A8BBF",
}: {
  title: string
  eyebrow?: string
  accentColor?: string
}) => (
  <div className="flex items-end justify-between mb-4">
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: accentColor }}
        >
          {eyebrow}
        </span>
      </div>

      <h2 className="text-lg sm:text-2xl font-black tracking-tight text-foreground leading-tight">
        {title}
      </h2>
    </div>
  </div>
)

const Index = () => {
  const trendingProducts = products.filter((p) => p.tags.includes("trending"))
  const offerProducts = products.filter((p) => p.tags.includes("offer"))
  const newProducts = products.filter((p) => p.isNew)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 sm:space-y-12"
    >
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-3 max-w-7xl mx-auto">
        <HeroCarousel />
      </section>

      {/* Shop by Category */}
      <section className="bg-secondary py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Shop by Category"
            eyebrow="Browse"
            accentColor="#1A8BBF"
          />

          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.name}`}
                className="flex-shrink-0 group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-2 border-primary transition-all relative shadow-sm">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <span className="absolute bottom-2 left-2 text-white font-semibold text-sm drop-shadow-md">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          title="Trending Now"
          eyebrow="Hot Right Now"
          accentColor="#1A8BBF"
        />

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {trendingProducts.map((p, i) => (
            <div key={p.id} className="min-w-[180px] sm:min-w-[220px]">
              <ProductCard product={p} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      {offerProducts.length > 0 && (
        <section className="bg-accent/5 py-6">
          <div className="max-w-7xl mx-auto">
            <ProductCarousel
              products={offerProducts}
              title="Special Offers"
              eyebrow="Limited Time"
              accentColor="#D42027"
            />
          </div>
        </section>
      )}

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="py-2">
          <div className="max-w-7xl mx-auto">
            <ProductCarousel
              products={newProducts}
              title="New Arrivals"
              eyebrow="Just Dropped"
              accentColor="#1A8BBF"
            />
          </div>
        </section>
      )}

      <Footer />
    </motion.div>
  )
}

export default Index