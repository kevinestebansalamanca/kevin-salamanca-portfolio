import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import LazySection from "@/components/LazySection";

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
  const [enableEffects, setEnableEffects] = useState(false);
  const [enableRobot, setEnableRobot] = useState(false);

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

    const idle =
      (window as any).requestIdleCallback ||
      ((cb: () => void) => setTimeout(cb, 300));

    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.innerWidth >= 1024;
    const isDesktop = isFinePointer && wide && !reducedMotion;

    let id1: any, id2: any;
    if (isDesktop) {
      // Heavy visual effects: desktop only
      id1 = idle(() => setEnableEffects(true));
      // Robot: desktop only on initial load to keep mobile JS minimal
      id2 = idle(() => setEnableRobot(true));
    } else {
      // Mobile: load robot much later, only after main content is settled
      id2 = setTimeout(() => setEnableRobot(true), 4000);
    }

    return () => {
      if ((window as any).cancelIdleCallback) {
        if (id1) (window as any).cancelIdleCallback(id1);
        if (id2 && typeof id2 === "number") {
          // could be a timeout id on mobile; clear both safely
          clearTimeout(id2);
          (window as any).cancelIdleCallback?.(id2);
        }
      } else {
        if (id1) clearTimeout(id1);
        if (id2) clearTimeout(id2);
      }
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
        <LazySection minHeight={500}><About /></LazySection>
        <LazySection minHeight={600}><Skills /></LazySection>
        <LazySection minHeight={700}><Projects /></LazySection>
        <LazySection minHeight={600}><Services /></LazySection>
        <LazySection minHeight={500}><Testimonials /></LazySection>
        <LazySection minHeight={300}><CTA /></LazySection>
        <LazySection minHeight={500}><Contact /></LazySection>
        <LazySection minHeight={200}><Footer /></LazySection>
      </main>
      {enableRobot && (
        <Suspense fallback={null}>
          <RobotAssistant />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
