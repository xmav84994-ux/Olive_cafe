import { Reveal } from "@/components/Reveal";
import { INFO } from "@/data/content";
import { Phone, MapPin, Clock, Mail, ArrowUpRight } from "lucide-react";

const Row = ({ icon: Icon, label, value, href, testid }) => {
  const inner = (
    <div className="flex items-start gap-4 group">
      <span className="mt-0.5 h-10 w-10 shrink-0 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-gold group-hover:bg-[#C5A059]/10 transition-colors">
        <Icon size={17} />
      </span>
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-white/40">{label}</p>
        <p className="text-lg text-white group-hover:text-gold transition-colors">
          {value}
        </p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" data-testid={testid}>
      {inner}
    </a>
  ) : (
    <div data-testid={testid}>{inner}</div>
  );
};

export const Location = () => (
  <section
    id="visit"
    className="relative py-24 md:py-36 bg-[#050505]"
    data-testid="visit-section"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        {/* Info */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
              Find Us
            </p>
            <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-white mb-10">
              Come up to the rooftop
            </h2>
          </Reveal>

          <div className="space-y-7">
            <Reveal delay={0.05}>
              <Row icon={MapPin} label="Location" value={INFO.region} href={INFO.mapsLink} testid="visit-location" />
            </Reveal>
            <Reveal delay={0.1}>
              <Row icon={Phone} label="Reservations" value={INFO.phoneDisplay} href={`tel:${INFO.phoneLink}`} testid="visit-phone" />
            </Reveal>
            <Reveal delay={0.15}>
              <Row icon={Clock} label="Hours" value={INFO.hours} testid="visit-hours" />
            </Reveal>
            <Reveal delay={0.2}>
              <Row icon={Mail} label="Email" value={INFO.email} href={`mailto:${INFO.email}`} testid="visit-email" />
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <a
              href={`tel:${INFO.phoneLink}`}
              data-testid="visit-call-button"
              className="hover-lift mt-12 inline-flex items-center gap-2.5 bg-gold text-[#050505] font-medium px-7 py-3.5 rounded-full hover:bg-[#D4AF37]"
            >
              <Phone size={17} /> Call to Book a Table
            </a>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.1} className="relative min-h-[380px] lg:min-h-full">
          <div className="absolute inset-0 rounded-sm overflow-hidden border border-[#C5A059]/20">
            <iframe
              title="The Black Olive Rooftop Cafe & Restaurant location map"
              src={INFO.mapsEmbed}
              className="w-full h-full map-dark"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="google-map-embed"
            />
          </div>
          <a
            href={INFO.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="map-open-button"
            className="hover-lift absolute bottom-4 right-4 inline-flex items-center gap-2 backdrop-blur-md bg-[#050505]/80 border border-[#C5A059]/30 text-gold text-sm px-4 py-2.5 rounded-full"
          >
            Open in Google Maps <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
