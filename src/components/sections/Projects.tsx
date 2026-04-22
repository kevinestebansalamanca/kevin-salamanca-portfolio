import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Variedades Nora",
    category: "E-commerce / Catálogo",
    description: "Tienda online con catálogo dinámico, carrito y diseño responsive enfocado en conversión.",
    tags: ["React", "Tailwind", "WhatsApp API"],
    gradient: "from-primary/40 via-secondary/30 to-accent/40",
  },
  {
    title: "Landing Premium SaaS",
    category: "Landing Page",
    description: "Página de aterrizaje con animaciones avanzadas, formulario y dashboard demo.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    gradient: "from-accent/40 via-primary/30 to-secondary/40",
  },
  {
    title: "Portfolio Creativo",
    category: "Portfolio",
    description: "Web personal interactiva con cursor custom, partículas y robot asistente.",
    tags: ["React", "Canvas", "GSAP"],
    gradient: "from-secondary/40 via-accent/30 to-primary/40",
  },
  {
    title: "App de Reservas",
    category: "Web App",
    description: "Sistema de reservas online con calendario, pagos y panel de administración.",
    tags: ["React", "Node", "PostgreSQL"],
    gradient: "from-primary/40 via-accent/30 to-secondary/40",
  },
  {
    title: "Dashboard Analytics",
    category: "Dashboard",
    description: "Panel administrativo con gráficos en tiempo real y filtros avanzados.",
    tags: ["React", "Recharts", "API"],
    gradient: "from-accent/40 via-secondary/30 to-primary/40",
  },
  {
    title: "Restaurante Gourmet",
    category: "Web Corporativa",
    description: "Web con menú interactivo, reservas y galería visual impactante.",
    tags: ["Astro", "Tailwind", "CMS"],
    gradient: "from-secondary/40 via-primary/30 to-accent/40",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Trabajos seleccionados
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Proyectos <span className="gradient-text">recientes</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="magnetic glass-card group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
            >
              {/* Visual */}
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.3),transparent_70%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-5xl font-bold text-foreground/10 transition-transform duration-700 group-hover:scale-110">
                    {p.title.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center gap-3">
                    <button className="magnetic flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="magnetic flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 transition-transform hover:scale-110">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                  {p.category}
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold transition-colors group-hover:text-primary-glow">
                  {p.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-muted/30 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
