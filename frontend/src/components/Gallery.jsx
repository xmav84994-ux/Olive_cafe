import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/data/content";

const PHOTOS = [
  {
    src: IMAGES.interiorTeal,
    alt: "Wood-panelled interior with teal leather chairs and marble tables",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    src: IMAGES.lamp,
    alt: "Hand-crafted wooden pendant lamp detail at The Black Olive",
    className: "md:col-span-5 md:row-span-1",
  },
  {
    src: IMAGES.hero,
    alt: "Glowing gold signage of The Black Olive at night",
    className: "md:col-span-5 md:row-span-1",
  },
  {
    src: IMAGES.diningHall,
    alt: "Long elegant dining hall with warm ambient lighting",
    className: "md:col-span-12 md:row-span-1",
  },
];

const Tile = ({ photo, index, onOpen }) => (
  <motion.figure
    className={`group relative overflow-hidden rounded-sm cursor-pointer ${photo.className}`}
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    onClick={() => onOpen(index)}
    data-testid={`gallery-tile-${index + 1}`}
  >
    <img
      src={photo.src}
      alt={photo.alt}
      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <span className="absolute bottom-4 right-4 h-11 w-11 rounded-full border border-white/40 backdrop-blur-md bg-black/30 text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <Plus size={18} />
    </span>
  </motion.figure>
);

const Lightbox = ({ index, onClose, onNav }) => {
  const photo = PHOTOS[index];
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-xl bg-[#050505]/92 p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
      data-testid="lightbox-overlay"
    >
      <button
        onClick={onClose}
        aria-label="Close viewer"
        data-testid="lightbox-close"
        className="hover-lift absolute top-5 right-5 md:top-8 md:right-8 h-12 w-12 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-gold hover:bg-[#C5A059]/10 z-10"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        aria-label="Previous photo"
        data-testid="lightbox-prev"
        className="hover-lift absolute left-4 md:left-8 h-12 w-12 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-gold hover:bg-[#C5A059]/10 z-10"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        aria-label="Next photo"
        data-testid="lightbox-next"
        className="hover-lift absolute right-4 md:right-8 h-12 w-12 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-gold hover:bg-[#C5A059]/10 z-10"
      >
        <ArrowRight size={20} />
      </button>

      <AnimatePresence mode="wait">
        <motion.figure
          key={index}
          className="relative max-w-5xl w-full flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[76vh] w-auto object-contain rounded-sm shadow-2xl"
            data-testid="lightbox-image"
          />
          <figcaption className="mt-5 text-center">
            <p className="font-serif italic text-lg md:text-xl text-white/85">{photo.alt}</p>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mt-2">
              {index + 1} / {PHOTOS.length}
            </p>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </motion.div>
  );
};

export const Gallery = () => {
  const [open, setOpen] = useState(null);

  const nav = useCallback(
    (dir) => setOpen((p) => (p + dir + PHOTOS.length) % PHOTOS.length),
    []
  );

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") nav(1);
      if (e.key === "ArrowLeft") nav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, nav]);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-36 bg-[#0a0a0a]"
      data-testid="gallery-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
              The Space
            </p>
            <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-white">
              Warm wood, soft gold light
            </h2>
          </div>
          <p className="text-white/60 max-w-sm">
            Every corner is designed to slow you down — hand-crafted lamps,
            teal leather seating, and the glow of a rooftop evening.
            <span className="block text-gold/70 text-sm mt-2">Tap any photo to view full-screen.</span>
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[220px] md:auto-rows-[260px]">
          {PHOTOS.map((photo, i) => (
            <Tile key={i} photo={photo} index={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <Lightbox index={open} onClose={() => setOpen(null)} onNav={nav} />
        )}
      </AnimatePresence>
    </section>
  );
};
