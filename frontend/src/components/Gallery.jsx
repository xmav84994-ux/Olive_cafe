import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/data/content";

const Tile = ({ src, alt, className, testid }) => (
  <motion.figure
    className={`group relative overflow-hidden rounded-sm ${className}`}
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    data-testid={testid}
  >
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.figure>
);

export const Gallery = () => (
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
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[220px] md:auto-rows-[260px]">
        <Tile
          src={IMAGES.interiorTeal}
          alt="Wood-panelled interior with teal leather chairs and marble tables"
          className="md:col-span-7 md:row-span-2"
          testid="gallery-tile-1"
        />
        <Tile
          src={IMAGES.lamp}
          alt="Hand-crafted wooden pendant lamp detail at The Black Olive"
          className="md:col-span-5 md:row-span-1"
          testid="gallery-tile-2"
        />
        <Tile
          src={IMAGES.hero}
          alt="Glowing gold signage of The Black Olive at night"
          className="md:col-span-5 md:row-span-1"
          testid="gallery-tile-3"
        />
        <Tile
          src={IMAGES.diningHall}
          alt="Long elegant dining hall with warm ambient lighting"
          className="md:col-span-12 md:row-span-1"
          testid="gallery-tile-4"
        />
      </div>
    </div>
  </section>
);
