import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { MENU, INFO } from "@/data/content";
import { Phone } from "lucide-react";

export const MenuSection = () => {
  const [active, setActive] = useState(0);
  const cat = MENU[active];

  return (
    <section
      id="menu"
      className="relative py-24 md:py-40 bg-[#050505]"
      data-testid="menu-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="mb-14 text-center md:text-left">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
            The Menu
          </p>
          <h2 className="font-serif font-light text-4xl md:text-7xl tracking-tight text-white">
            Made to order, morning to midnight
          </h2>
        </Reveal>

        {/* Category tabs */}
        <Reveal className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mb-14">
          {MENU.map((m, i) => (
            <button
              key={m.category}
              onClick={() => setActive(i)}
              data-testid={`menu-tab-${i}`}
              className={`hover-lift px-5 py-2.5 rounded-full text-sm tracking-wide border transition-colors duration-300 ${
                active === i
                  ? "bg-gold text-[#050505] border-[#C5A059]"
                  : "border-[#C5A059]/30 text-white/70 hover:text-gold hover:border-[#C5A059]/70"
              }`}
            >
              {m.category}
            </button>
          ))}
        </Reveal>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-10"
          >
            <div className="lg:col-span-4">
              <p className="font-serif italic text-3xl md:text-4xl text-gold">
                {cat.category}
              </p>
              <p className="text-white/50 mt-2">{cat.note}</p>
            </div>

            <ul className="lg:col-span-8 divide-y divide-[#C5A059]/12">
              {cat.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="py-5 group"
                  data-testid={`menu-item-${active}-${i}`}
                >
                  <div className="flex items-end">
                    <span className="font-serif text-xl md:text-2xl text-white group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="dotted-leader" />
                    <span className="font-sans text-lg text-gold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-white/45 mt-1">{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <Reveal className="mt-16 flex flex-col sm:flex-row items-center gap-4 border-t border-[#C5A059]/15 pt-10">
          <p className="text-white/60 text-center sm:text-left">
            A taste of what awaits. Ask our team for today's specials &amp;
            seasonal plates.
          </p>
          <a
            href={`tel:${INFO.phoneLink}`}
            data-testid="menu-call-button"
            className="hover-lift sm:ml-auto inline-flex items-center gap-2.5 bg-gold text-[#050505] font-medium px-7 py-3.5 rounded-full hover:bg-[#D4AF37] whitespace-nowrap"
          >
            <Phone size={17} /> Reserve a Table
          </a>
        </Reveal>
      </div>
    </section>
  );
};
