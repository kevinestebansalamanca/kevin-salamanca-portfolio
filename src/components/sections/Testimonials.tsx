import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Nora Colmenares",
    role: "Cliente · Variedades Nora",
    text: "Kevin hizo una página web increíble para mi negocio. Muy profesional y rápida. Me ayudó a destacar de la competencia y mis clientes la aman.",
    rating: 5,
    initial: "N",
  },
  {
    name: "Carlos Méndez",
    role: "Emprendedor",
    text: "Excelente trabajo, entendió exactamente lo que necesitaba y lo mejoró. La comunicación fue clara y los tiempos se cumplieron.",
    rating: 5,
    initial: "C",
  },
  {
    name: "Andrea Ríos",
    role: "Cliente satisfecha",
    text: "Muy recomendado, diseño moderno y funcional. La página carga rápido y se ve increíble en el celular. 100% recomendado.",
    rating: 5,
    initial: "A",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Reseñas
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Lo que dicen mis <span className="gradient-text">clientes</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="magnetic glass-card group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <Quote className="absolute right-4 top-4 h-10 w-10 text-primary/20" />
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-secondary text-secondary"
                    style={{ filter: "drop-shadow(0 0 4px hsl(var(--secondary)))" }}
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-base font-bold text-primary-foreground">
                  {r.initial}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
