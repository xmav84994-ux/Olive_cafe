import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ribbon } from "@/components/Ribbon";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { MenuSection } from "@/components/MenuSection";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App grain bg-[#050505]">
      <Navbar />
      <main>
        <Hero />
        <Ribbon />
        <About />
        <Gallery />
        <MenuSection />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
