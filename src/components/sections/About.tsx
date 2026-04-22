import { motion } from "framer-motion";
import { Code2, Rocket, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Sobre mí
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Más que código, <span className="gradient-text">resultados reales</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            <p>
              Soy <span className="font-semibold text-foreground">Kevin Salamanca</span>,
              desarrollador web apasionado por crear experiencias digitales que combinan diseño
              moderno y rendimiento técnico real.
            </p>
            <p>
              Trabajo con marcas, emprendedores y negocios que quieren destacar online con webs
              rápidas, bonitas y enfocadas en convertir visitas en clientes.
            </p>
            <p>
              Mi enfoque está en el <span className="text-secondary">detalle</span>, la{" "}
              <span className="text-accent">claridad visual</span> y entregar productos que mis
              clientes adoran mostrar.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Code2, title: "Código limpio", desc: "Estructura mantenible y escalable." },
              { icon: Rocket, title: "Rendimiento", desc: "Webs ultra rápidas y optimizadas." },
              { icon: Target, title: "Enfocado", desc: "Diseño orientado a resultados." },
              { icon: Rocket, title: "Innovador", desc: "Tecnologías modernas 2026." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="magnetic glass-card group rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-secondary transition-all group-hover:from-primary/40 group-hover:to-accent/40">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 font-display font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
