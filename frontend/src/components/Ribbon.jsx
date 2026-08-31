import Marquee from "react-fast-marquee";

const WORDS = [
  "Rooftop Dining",
  "Freshly Brewed Coffee",
  "Butter Mysore Masala Dosa",
  "Open Skies",
  "Fine Dining",
  "Warm Hospitality",
  "Sizzling Desserts",
];

export const Ribbon = () => (
  <section
    className="border-y border-[#C5A059]/15 bg-[#0a0a0a] py-6 md:py-8"
    aria-hidden="true"
    data-testid="marquee-ribbon"
  >
    <Marquee speed={38} gradient={false} autoFill>
      {WORDS.map((w, i) => (
        <span
          key={i}
          className="font-serif italic text-3xl md:text-5xl text-white/85 mx-8 flex items-center"
        >
          {w}
          <span className="text-gold not-italic mx-8 text-2xl md:text-4xl">
            &#10022;
          </span>
        </span>
      ))}
    </Marquee>
  </section>
);
