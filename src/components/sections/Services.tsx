import { motion } from "framer-motion";
import { Layout, Code, Rocket, Gauge } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Diseño Web",
    desc: "Diseños únicos, modernos y responsive que reflejan la identidad de tu marca.",
    features: ["UI/UX premium", "Mobile-first", "Branding visual"],
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    desc: "Webs a medida con código limpio, escalable y tecnologías modernas.",
    features: ["React / Next.js", "APIs", "Integraciones"],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "Páginas de aterrizaje optimizadas para convertir visitas en clientes.",
    features: ["Alto CTR", "A/B testing", "Copywriting"],
  },
  {
    icon: Gauge,
    title: "Optimización Web",
    desc: "Mejora de velocidad, SEO básico y rendimiento en tu sitio actual.",
    features: ["Core Web Vitals", "SEO técnico", "Performance"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Lo que hago
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Servicios <span className="gradient-text">profesionales</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Soluciones digitales completas desde el diseño hasta el lanzamiento y mantenimiento.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="magnetic glass-card group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 text-secondary transition-all group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:text-background group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)]">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mb-5 text-muted-foreground">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_6px_hsl(var(--secondary))]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
