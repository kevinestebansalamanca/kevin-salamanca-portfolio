import { motion } from "framer-motion";
import { ArrowRight, Send, Sparkles } from "lucide-react";

const Hero = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/30 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="magnetic mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-secondary backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Disponible para nuevos proyectos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Soy <span className="gradient-text animate-gradient-shift">Kevin Salamanca</span>
          <br />
          <span className="text-foreground/90">desarrollador web</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Creo páginas web modernas que <span className="text-secondary">venden</span> y{" "}
          <span className="text-accent">destacan</span>. Diseño premium, código limpio y
          experiencias que convierten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => go("projects")}
            className="magnetic group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-8 py-4 font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)]"
          >
            Ver proyectos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => go("contact")}
            className="magnetic group inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-8 py-4 font-semibold backdrop-blur-md transition-all hover:border-primary/60 hover:bg-primary/5"
          >
            Contactarme
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-border/40 pt-8"
        >
          {[
            { n: "50+", l: "Proyectos" },
            { n: "100%", l: "Satisfacción" },
            { n: "24/7", l: "Soporte" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl font-bold text-foreground md:text-3xl">{s.n}</div>
              <div className="text-xs text-muted-foreground md:text-sm">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border/60 p-1.5">
          <div className="h-2 w-1 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
