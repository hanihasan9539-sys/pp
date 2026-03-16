import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/products";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  return (
    <div className="relative overflow-hidden rounded-2xl mx-1 md:mx-4 aspect-[2.2/1] mt-3 bg-black">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-900"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover brightness-[0.72] transition-transform duration-\[6000ms\] ease-out ${
              i === current ? "scale-100" : "scale-105"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-transparent to-black/45" />

          <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 pb-6 pt-14 bg-gradient-to-t from-black/70 to-transparent">
            <p className="font-mono text-[10px] tracking-[0.22em] text-white/50 uppercase mb-1.5">
              {/* Option A: Use cta as eyebrow */}
              {slide.cta}
              
              {/* Option B: Use first word of title as eyebrow */}
              {/* {slide.title.split(' ')[0]} */}
              
              {/* Option C: Use a default value */}
              {/* "Featured" */}
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight mb-1">
              {slide.title}
            </h2>
            <p className="text-sm font-light text-white/50 tracking-wide">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute top-4 right-5 font-mono text-[10px] tracking-[0.18em] uppercase text-white/40 border border-white/18 px-2.5 py-1.5 rounded-sm backdrop-blur-sm">
        Explore
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-3.5 left-5 font-mono text-[10px] tracking-[0.12em] text-white/38">
        {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-3.5 right-5 flex gap-1.5 items-center">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetTimer(); }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-px rounded-sm transition-all duration-300 bg-white/25 overflow-hidden relative ${
              i === current ? "w-12" : "w-6"
            }`}
          >
            {i === current && (
              <span
                key={current}
                className="absolute inset-y-0 left-0 bg-white animate-[progress_4s_linear_forwards]"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;