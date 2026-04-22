import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles } from "lucide-react";

const messages = [
  "Hola, soy el asistente de Kevin 👋",
  "¿Quieres ver sus proyectos increíbles?",
  "Puedo ayudarte a contactarlo rápidamente",
  "Kevin crea webs modernas que venden ✨",
];

const RobotAssistant = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!showBubble) return;
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [showBubble]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Speech bubble idle */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.button
            key={msgIndex}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="magnetic glass-card max-w-[240px] rounded-2xl rounded-br-sm px-4 py-3 text-left text-sm text-foreground hover:border-primary/50"
          >
            <span className="block text-xs text-secondary">Asistente Nova</span>
            <span className="text-foreground/90">{messages[msgIndex]}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass-card w-[300px] overflow-hidden rounded-2xl"
          >
            <div className="flex items-center justify-between border-b border-border/40 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bot className="h-5 w-5 text-secondary" />
                  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-pulse rounded-full bg-green-400" />
                </div>
                <span className="font-display text-sm font-semibold">Asistente Nova</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Cerrar">
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
            <div className="space-y-2 p-4">
              <p className="mb-3 text-sm text-muted-foreground">¿En qué puedo guiarte?</p>
              {[
                { label: "🚀 Ver proyectos", id: "projects" },
                { label: "💼 Servicios", id: "services" },
                { label: "👤 Sobre Kevin", id: "about" },
                { label: "📩 Contactar ahora", id: "contact" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => scrollTo(opt.id)}
                  className="magnetic w-full rounded-lg border border-border/40 bg-muted/30 px-3 py-2 text-left text-sm transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary-glow"
                >
                  {opt.label}
                </button>
              ))}
              <a
                href="https://wa.me/573124050409"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Sparkles className="h-4 w-4" /> WhatsApp directo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
        className="magnetic relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
        aria-label="Abrir asistente"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
        <Bot className="relative z-10 h-6 w-6 text-background" strokeWidth={2.5} />
      </motion.button>
    </div>
  );
};

export default RobotAssistant;
