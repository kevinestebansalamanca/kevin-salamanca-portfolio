import { Instagram, Facebook, MessageCircle, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent opacity-80 blur-md" />
                <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-background font-display text-sm font-bold text-secondary">
                  KS
                </div>
              </div>
              <span className="font-display text-lg font-semibold">
                <span className="gradient-text">Nova</span> Studio
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Creando experiencias web modernas e interactivas que destacan tu marca y convierten
              visitantes en clientes.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { l: "Sobre mí", id: "about" },
                { l: "Proyectos", id: "projects" },
                { l: "Servicios", id: "services" },
                { l: "Contacto", id: "contact" },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a href="tel:+573124050409" className="hover:text-foreground">
                  +57 312 405 0409
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Yopal · Casanare<br />Vereda La Niata</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="https://wa.me/573124050409"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="magnetic flex h-9 w-9 items-center justify-center rounded-full border border-border/60 transition-all hover:border-green-500/60 hover:text-green-400 hover:shadow-[0_0_15px_hsl(142_70%_45%/0.5)]"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/kevxs.gzr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="magnetic flex h-9 w-9 items-center justify-center rounded-full border border-border/60 transition-all hover:border-accent/60 hover:text-accent hover:shadow-[0_0_15px_hsl(var(--accent)/0.5)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/kevin.e.Salamanca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="magnetic flex h-9 w-9 items-center justify-center rounded-full border border-border/60 transition-all hover:border-primary/60 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {year} KS Nova Studio · Kevin Salamanca. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con <span className="text-accent">♥</span> en Colombia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
