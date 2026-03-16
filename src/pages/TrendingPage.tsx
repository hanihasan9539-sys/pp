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
        {/* Layered radial glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 60%, rgba(26,139,191,0.13) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(26,139,191,0.07) 0%, transparent 60%)",
          }}
        />
        {/* Decorative bottom scan line */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px -z-10"
          style={{ background: "linear-gradient(90deg, transparent, rgba(26,139,191,0.3), transparent)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-6 md:pt-8 md:pb-10">

          {/* 
            Mobile layout: title on left, stats badge on right (single row feel)
            Desktop: stacked full-width layout
          */}
          <div className="flex items-center justify-between gap-3 sm:block">

            {/* Left column: eyebrow pill + title */}
            <div className="flex-1 min-w-0">
              {/* Eyebrow pill — replaces bare dot+text for better mobile legibility */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="inline-flex items-center gap-2 mb-2 sm:mb-3"
              >
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9px] sm:text-xs font-semibold uppercase tracking-[0.16em] border"
                  style={{
                    color: "#1A8BBF",
                    borderColor: "rgba(26,139,191,0.3)",
                    backgroundColor: "rgba(26,139,191,0.07)",
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: "#1A8BBF" }}
                    />
                    <span
                      className="relative inline-flex h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "#1A8BBF" }}
                    />
                  </span>
                  Live Trends
                </span>
              </motion.div>

              {/* Title — inline on mobile (single line), stacked on sm+ */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-black tracking-tight text-foreground leading-[1.1]"
                style={{ fontSize: "clamp(1.05rem, 3.8vw, 2.6rem)" }}
              >
                {/* Mobile: "Trending Right Now" on one line; sm+ stacks */}
                <span className="inline sm:block">Trending&nbsp;</span>
                <span style={{ color: "#1A8BBF" }} className="inline sm:block">
                  Right Now
                </span>
              </motion.h1>
            </div>

            {/* Right column: compact stats badge — only on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex-shrink-0 sm:hidden"
            >
              <div
                className="flex flex-col items-center justify-center rounded-lg px-2 py-1.5 text-center border"
                style={{
                  borderColor: "rgba(26,139,191,0.25)",
                  backgroundColor: "rgba(26,139,191,0.06)",
                  minWidth: "42px",
                }}
              >
                <span
                  className="text-sm font-black leading-none tabular-nums"
                  style={{ color: "#1A8BBF" }}
                >
                  {trending.length}
                </span>
                <span className="text-[8px] font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                  picks
                </span>
              </div>
            </motion.div>
          </div>

          {/* Meta row — desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="hidden sm:flex items-center gap-4 mt-4"
          >
            <span className="text-sm text-muted-foreground">
              {trending.length} products
            </span>
            <span className="h-px w-6 bg-border" />
            <span className="text-sm text-muted-foreground">Updated hourly</span>
          </motion.div>

          {/* Mobile-only: subtle meta line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.32 }}
            className="sm:hidden text-[11px] text-muted-foreground mt-2"
          >
            Updated hourly
          </motion.p>
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
            <span className="inline-flex items-center gap-1">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#1A8BBF" }}
              />
              Rising
            </span>
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