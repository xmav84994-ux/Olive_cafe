# The Black Olive — Rooftop Cafe & Restaurant

## Original Problem Statement
Build a website for "The Black Olive Rooftop Cafe & Restaurant" (Gujarat, India). Include Google Maps, make it SEO/AEO friendly, add the 5 provided customer testimonials, and include 3D animations, transitions and thoughtful typography.

## User Choices
- No booking system — "Call to book" CTA using phone 87803 76399
- Menu shown on site (Coffee, South Indian, Fine Dining, Fast Food, Desserts) — sample/editable
- Visual mood: Dark & luxurious (black + gold, night rooftop)
- Use Google Maps location + phone; placeholder hours/email

## Architecture
- Frontend-only marketing site (React 19 + Tailwind). No custom backend endpoints needed (default template server untouched).
- Motion: framer-motion (scroll reveals, masked line reveals, hero parallax via useScroll/useTransform), lenis (smooth momentum scroll), react-fast-marquee (editorial ribbon).
- Typography: Cormorant Garamond (headings) + Outfit (body).
- SEO/AEO: semantic HTML, meta/OG tags, Restaurant + FAQPage JSON-LD structured data, descriptive alt text.

## Implemented (2026-08-31)
- Kinetic hero with parallax night-exterior image + word-by-word masked reveal, dual CTAs (Call / Directions)
- Editorial marquee ribbon
- About/story with 3 numbered manifesto chapters + sticky image + rating badge
- Asymmetric bento gallery (real photos) with hover zoom
- Tabbed menu with dotted-leader price rows across 5 categories
- Auto-playing testimonials carousel (5 real reviews) with arrows + dots
- Visit section: contact rows + dark-themed embedded Google Map + "Open in Maps"
- Footer with gold neon logo, big CTA, sticky glass navbar (desktop + mobile)
- Full JSON-LD (Restaurant, reviews, FAQ) for AEO

## Verified
- Frontend compiles; all sections render (hero, menu tabs, reviews, gallery, map) confirmed via screenshots.

## Backlog / Remaining
- P1: Real address, hours, email once provided by owner
- P2: Photo lightbox, reservation form, Instagram feed embed
