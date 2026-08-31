import { motion } from "framer-motion";

export const easeLux = [0.22, 1, 0.36, 1];

// Fade + rise on scroll into view
export const Reveal = ({ children, delay = 0, y = 40, className = "", ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: easeLux }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

// Line-by-line masked reveal for headings
export const MaskLines = ({ lines, className = "", lineClass = "", stagger = 0.12, delay = 0 }) => (
  <span className={className} aria-label={lines.join(" ")}>
    {lines.map((line, i) => (
      <span key={i} className="reveal-mask" aria-hidden="true">
        <motion.span
          className={`block ${lineClass}`}
          initial={{ y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeLux, delay: delay + i * stagger }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);
