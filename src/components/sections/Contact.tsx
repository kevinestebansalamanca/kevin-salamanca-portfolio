import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nombre muy corto").max(80),
  email: z.string().trim().email("Email inválido").max(200),
  message: z.string().trim().min(5, "Mensaje muy corto").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    const text = `Hola Kevin, soy ${result.data.name} (${result.data.email}). ${result.data.message}`;
    const url = `https://wa.me/573124050409?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Abriendo WhatsApp para enviar tu mensaje 🚀");
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Hablemos de tu <span className="gradient-text">próximo proyecto</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Cuéntame tu idea y te respondo en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card space-y-4 rounded-2xl p-6 md:p-8 lg:col-span-3"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                maxLength={80}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-input/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                maxLength={200}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-input/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-input/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="magnetic group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3.5 font-semibold text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all hover:shadow-[0_0_45px_hsl(var(--primary)/0.7)] disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>

          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            <a
              href="https://wa.me/573124050409"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-5 shadow-[0_0_25px_hsl(142_70%_45%/0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_45px_hsl(142_70%_45%/0.7)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/20 backdrop-blur-sm">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/80">WhatsApp</div>
                <div className="font-display font-semibold text-white">Escríbeme directo</div>
              </div>
            </a>

            {[
              { icon: Phone, label: "Teléfono", value: "+57 312 405 0409", href: "tel:+573124050409" },
              { icon: Mail, label: "Email", value: "kevinestebansalamanca2@gmail.com", href: "mailto:kevinestebansalamanca2@gmail.com" },
              { icon: MapPin, label: "Ubicación", value: "Yopal · Casanare\nVereda La Niata" },
            ].map((c) => {
              const Inner = (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-secondary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="whitespace-pre-line text-sm font-medium">{c.value}</div>
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="magnetic glass-card flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-primary/40"
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.label} className="glass-card flex items-center gap-4 rounded-2xl p-5">
                  {Inner}
                </div>
              );
            })}

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/kevxs.gzr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="magnetic flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-muted/30 transition-all hover:border-accent/60 hover:text-accent hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/kevin.e.Salamanca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="magnetic flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-muted/30 transition-all hover:border-primary/60 hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
