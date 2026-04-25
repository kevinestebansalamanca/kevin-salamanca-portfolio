import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

const ParticlesBackground = lazy(() => import("@/components/ParticlesBackground"));
const CustomCursor = lazy(() => import("@/components/CustomCursor"));
const RobotAssistant = lazy(() => import("@/components/RobotAssistant"));
const About = lazy(() => import("@/components/sections/About"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Services = lazy(() => import("@/components/sections/Services"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const CTA = lazy(() => import("@/components/sections/CTA"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [hydrated, setHydrated] = useState(false);
  const [enableEffects, setEnableEffects] = useState(false);

  useEffect(() => {
    document.title = "KS Nova Studio · Kevin Salamanca · Desarrollador Web";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Kevin Salamanca · Desarrollador web freelance en Yopal. Creo páginas web modernas, rápidas y que convierten. KS Nova Studio."
    );
    if (!meta.parentNode) document.head.appendChild(meta);

    // Defer hydration of below-the-fold content until idle
    const idle =
      (window as any).requestIdleCallback ||
      ((cb: () => void) => setTimeout(cb, 200));
    const id = idle(() => setHydrated(true));

    // Enable heavy visual effects only on capable, non-mobile devices
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.innerWidth >= 1024;
    if (isFinePointer && wide && !reducedMotion) {
      const id2 = idle(() => setEnableEffects(true));
      return () => {
        if ((window as any).cancelIdleCallback) {
          (window as any).cancelIdleCallback(id);
          (window as any).cancelIdleCallback(id2);
        }
      };
    }
    return () => {
      if ((window as any).cancelIdleCallback) (window as any).cancelIdleCallback(id);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {enableEffects && (
        <Suspense fallback={null}>
          <ParticlesBackground />
          <CustomCursor />
        </Suspense>
      )}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        {hydrated && (
          <Suspense fallback={null}>
            <About />
            <Skills />
            <Projects />
            <Services />
            <Testimonials />
            <CTA />
            <Contact />
          </Suspense>
        )}
      </main>
      {hydrated && (
        <Suspense fallback={null}>
          <Footer />
          <RobotAssistant />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
