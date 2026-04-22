import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 98, color: "from-orange-500 to-red-500" },
  { name: "CSS / Tailwind", level: 95, color: "from-secondary to-primary" },
  { name: "JavaScript", level: 92, color: "from-yellow-400 to-amber-500" },
  { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
  { name: "React", level: 94, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", level: 85, color: "from-foreground to-muted-foreground" },
  { name: "Node.js", level: 82, color: "from-green-500 to-emerald-600" },
  { name: "UI / UX Design", level: 90, color: "from-accent to-primary" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Tecnologías
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Mis <span className="gradient-text">habilidades</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stack moderno para crear webs rápidas, escalables y memorables.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display font-medium">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted/40">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color} relative`}
                  style={{ boxShadow: "0 0 12px hsl(var(--primary) / 0.5)" }}
                >
                  <div className="absolute inset-0 animate-shimmer" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
