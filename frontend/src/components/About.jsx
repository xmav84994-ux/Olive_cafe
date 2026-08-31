import { motion } from "framer-motion";
import { Reveal, MaskLines } from "@/components/Reveal";
import { CHAPTERS, IMAGES } from "@/data/content";

export const About = () => (
  <section
    id="story"
    className="relative py-24 md:py-40 bg-[#050505]"
    data-testid="story-section"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
        {/* Left — sticky image */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-sm">
              <motion.img
                src={IMAGES.diningHall}
                alt="Elegant dining hall interior at The Black Olive with attentive staff"
                className="w-full h-[420px] md:h-[560px] object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#C5A059] text-[#050505] px-6 py-5 rounded-sm max-w-[210px]">
              <p className="font-serif text-4xl leading-none">4.8</p>
              <p className="text-xs tracking-wide mt-1 font-medium">
                Loved by guests across Gujarat
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — chapters */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-6">
              Our Story
            </p>
            <h2 className="font-serif font-light text-4xl md:text-6xl leading-[1.02] tracking-tight text-white">
              <MaskLines
                lines={["An elevated table,", "under the open sky."]}
              />
            </h2>
          </Reveal>

          <div className="mt-14 space-y-12">
            {CHAPTERS.map((c, i) => (
              <Reveal
                key={c.no}
                delay={i * 0.05}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 border-t border-[#C5A059]/15 pt-8"
                data-testid={`chapter-${c.no}`}
              >
                <span className="font-serif text-2xl md:text-3xl text-gold/80">
                  {c.no}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                    {c.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed max-w-xl">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
