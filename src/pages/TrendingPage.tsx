import { motion, useScroll, useTransform, Variants } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24, 
    filter: "blur(4px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    },
  },
};

const TrendingPage = () => {
  const trending = products.filter((p) => p.tags.includes("trending"));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden border-b border-border/40">
        {/* Radial glow using TP Collections Primary Blue */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(26,139,191,0.12) 0%, transparent 70%)",
          }}
        />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 md:pt-8 md:pb-10">
          {/* Eyebrow — ping dot in TP Blue */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
           className="flex items-center gap-2.5 mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "#1A8BBF" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: "#1A8BBF" }}
              />
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#1A8BBF" }}
            >
              Live Trends
            </span>
          </motion.div>

          {/* Title — "Right Now" in TP Blue - REDUCED FONT SIZE */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground leading-tight"
          >
            Trending
            <br />
            <span style={{ color: "#1A8BBF" }}>Right Now</span>
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-4 mt-4"
          >
            <span className="text-sm text-muted-foreground">
              {trending.length} products
            </span>
            <span className="h-px w-6 bg-border" />
            <span className="text-sm text-muted-foreground">Updated hourly</span>
          </motion.div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-6">
        {/* Rank Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex items-center justify-between mb-4"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Top Picks
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {/* "Rising" dot → TP Collections Primary Blue */}
            <span className="inline-flex items-center gap-1">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#1A8BBF" }}
              />
              Rising
            </span>
            {/* "Hot" dot → TP Collections Accent Red */}
            <span className="inline-flex items-center gap-1">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#D42027" }}
              />
              Hot
            </span>
          </div>
        </motion.div>

        {/* Staggered grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {trending.map((p, i) => (
            <motion.div
              key={p.id}
              variants={itemVariants}
              className="group relative"
            >
           
              {i < 3 && (
                <div
                  className={[
                    "absolute -top-2 -left-2 z-10 h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-black shadow-md ring-2 ring-background",
                    i === 0
                      ? "bg-yellow-400 text-yellow-900"
                      : i === 1
                      ? "bg-slate-300 text-slate-700"
                      : i === 2
                      ? "bg-[#D42027] text-white"
                      : "",
                  ].join(" ")}
                >
                  #{i + 1}
                </div>
              )}

              {/* Hover highlight ring → TP Collections Primary Blue at 30% opacity */}
              <div className="absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none group-hover:ring-1 group-hover:ring-[#1A8BBF]/30" />

              <ProductCard product={p} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Empty state ── */}
        {trending.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-32 text-center gap-4"
          >
            <span className="text-5xl">📭</span>
            <p className="text-lg font-semibold text-foreground">
              Nothing trending yet
            </p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Check back soon — trending products update hourly.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TrendingPage;