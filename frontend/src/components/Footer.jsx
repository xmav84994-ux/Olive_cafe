import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { INFO, IMAGES } from "@/data/content";
import { Phone, MapPin, Instagram } from "lucide-react";

export const Footer = () => (
  <footer
    className="relative py-24 md:py-32 bg-[#0a0a0a] border-t border-[#C5A059]/15"
    data-testid="footer"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <motion.img
            src={IMAGES.logo}
            alt="The Black Olive Rooftop Cafe gold neon olive-branch logo"
            className="w-40 md:w-52 rounded-full gold-drop"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-white mt-10">
            An evening well spent <span className="text-gold">awaits.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`tel:${INFO.phoneLink}`}
            data-testid="footer-call-button"
            className="hover-lift mt-10 inline-flex items-center gap-2.5 bg-gold text-[#050505] font-medium px-8 py-4 rounded-full hover:bg-[#D4AF37]"
          >
            <Phone size={18} /> Call {INFO.phoneDisplay}
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex items-center gap-6 text-white/60">
            <a
              href={INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-gold transition-colors"
              data-testid="footer-map-link"
            >
              <MapPin size={16} /> {INFO.region}
            </a>
            <span className="h-4 w-px bg-white/20" />
            <span className="inline-flex items-center gap-2">
              <Instagram size={16} /> @theblackolive
            </span>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 pt-8 border-t border-[#C5A059]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
        <p className="font-serif text-base text-white/60">
          THE BLACK <span className="text-gold">OLIVE</span> · {INFO.tagline}
        </p>
        <p>© {new Date().getFullYear()} The Black Olive. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
