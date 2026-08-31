import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, ArrowDown } from "lucide-react";
import { INFO, IMAGES } from "@/data/content";

const easeLux = [0.22, 1, 0.36, 1];

const Word = ({ children, delay }) => (
  <span className="reveal-mask inline-block">
    <motion.span
      className="inline-block"
      initial={{ y: "115%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, ease: easeLux, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden"
      data-testid="hero-section"
    >
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="The Black Olive rooftop cafe glowing at night in Gujarat"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: easeLux }}
          className="text-xs md:text-sm font-semibold tracking-[0.34em] uppercase text-gold mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#C5A059]" /> {INFO.region}
        </motion.p>

        <h1 className="font-serif font-light uppercase leading-[0.86] tracking-tighter text-white text-[15vw] sm:text-7xl md:text-8xl lg:text-[9rem]">
          <span className="block">
            <Word delay={0.45}>The</Word> <Word delay={0.55}>Black</Word>
          </span>
          <span className="block text-gold gold-glow">
            <Word delay={0.7}>Olive</Word>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: easeLux }}
          className="mt-8 max-w-xl text-base md:text-lg text-white/75 leading-relaxed"
        >
          A rooftop cafe &amp; restaurant where open skies meet unhurried
          evenings — served with genuine warmth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9, ease: easeLux }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={`tel:${INFO.phoneLink}`}
            data-testid="hero-call-button"
            className="hover-lift inline-flex items-center gap-2.5 bg-gold text-[#050505] font-medium px-7 py-3.5 rounded-full hover:bg-[#D4AF37]"
          >
            <Phone size={17} /> Call to Book · {INFO.phoneDisplay}
          </a>
          <a
            href={INFO.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-directions-button"
            className="hover-lift inline-flex items-center gap-2.5 border border-[#C5A059]/50 text-gold font-medium px-7 py-3.5 rounded-full hover:border-[#C5A059] hover:bg-[#C5A059]/10"
          >
            <MapPin size={17} /> Get Directions
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
};
