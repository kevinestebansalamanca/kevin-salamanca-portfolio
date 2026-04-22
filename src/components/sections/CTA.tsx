import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-12 md:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/30 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/30 blur-[100px]" />
          </div>
          <div className="relative">
            <h2 className="font-display text-4xl font-bold md:text-6xl">
              ¿Listo para <span className="gradient-text">trabajar conmigo?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
              Convierte tu idea en una web premium que destaque, venda y deje huella.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="magnetic group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-10 py-4 font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--primary)/0.9)] animate-glow-pulse"
            >
              Empezar mi proyecto
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
