import { ReactNode, Suspense, useEffect, useRef, useState } from "react";

interface LazySectionProps {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: number;
  fallback?: ReactNode;
}

/**
 * Renders children only when the placeholder is near the viewport.
 * Saves JS execution + render cost on initial paint, especially on mobile.
 */
const LazySection = ({
  children,
  rootMargin = "300px 0px",
  minHeight = 400,
  fallback = null,
}: LazySectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} style={!visible ? { minHeight } : undefined}>
      {visible ? <Suspense fallback={fallback}>{children}</Suspense> : null}
    </div>
  );
};

export default LazySection;
