import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, Phone } from "lucide-react";
import { INFO } from "@/data/content";

const LINKS = [
  { label: "Story", id: "story" },
  { label: "Gallery", id: "gallery" },
  { label: "Menu", id: "menu" },
  { label: "Reviews", id: "reviews" },
  { label: "Visit", id: "visit" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050505]/75 border-b border-[#C5A059]/10 py-4"
          : "bg-transparent py-6"
      }`}
      data-testid="main-navbar"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left leading-none group"
          data-testid="nav-logo"
        >
          <span className="font-serif text-xl md:text-2xl tracking-tight text-white">
            THE BLACK <span className="text-gold">OLIVE</span>
          </span>
          <span className="block text-[10px] tracking-[0.32em] uppercase text-white/50 mt-0.5">
            Rooftop Cafe &amp; Restaurant
          </span>
        </button>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="text-sm tracking-wide text-white/70 hover:text-gold transition-colors duration-300 relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </button>
          ))}
          <a
            href={`tel:${INFO.phoneLink}`}
            data-testid="nav-call-button"
            className="hover-lift inline-flex items-center gap-2 bg-gold text-[#050505] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#D4AF37]"
          >
            <Phone size={15} /> Call to Book
          </a>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-[#050505]/95 border-t border-[#C5A059]/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  data-testid={`nav-mobile-link-${l.id}`}
                  className="text-left font-serif text-2xl text-white/80 hover:text-gold transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={`tel:${INFO.phoneLink}`}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-gold text-[#050505] font-medium px-5 py-3 rounded-full"
                data-testid="nav-mobile-call-button"
              >
                <Phone size={16} /> Call {INFO.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
