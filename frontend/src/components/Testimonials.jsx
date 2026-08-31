import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS } from "@/data/content";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (n) => {
      setDir(n > i ? 1 : -1);
      setI((n + TESTIMONIALS.length) % TESTIMONIALS.length);
    },
    [i]
  );

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setI((p) => (p + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section
      id="reviews"
      className="relative py-24 md:py-40 bg-[#0a0a0a] overflow-hidden"
      data-testid="reviews-section"
    >
      {/* huge decorative quote */}
      <span className="pointer-events-none select-none absolute -top-10 left-4 md:left-16 font-serif text-[24rem] leading-none text-[#C5A059]/8">
        &ldquo;
      </span>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
        <Reveal className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
            Guest Reviews
          </p>
          <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-white">
            Straight from our tables
          </h2>
        </Reveal>

        <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
              data-testid="testimonial-card"
            >
              <div className="flex justify-center gap-1 mb-7">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={18} className="fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>
              <p className="font-serif italic font-light text-2xl md:text-4xl leading-snug text-white/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <span className="h-px w-8 bg-[#C5A059] inline-block align-middle mr-3" />
                <cite className="not-italic text-gold tracking-wide" data-testid="testimonial-author">
                  {t.author}
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => go(i - 1)}
            data-testid="testimonial-prev"
            aria-label="Previous review"
            className="hover-lift h-11 w-11 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-gold hover:bg-[#C5A059]/10"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, n) => (
              <button
                key={n}
                onClick={() => go(n)}
                aria-label={`Go to review ${n + 1}`}
                data-testid={`testimonial-dot-${n}`}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  n === i ? "w-8 bg-gold" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(i + 1)}
            data-testid="testimonial-next"
            aria-label="Next review"
            className="hover-lift h-11 w-11 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-gold hover:bg-[#C5A059]/10"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
