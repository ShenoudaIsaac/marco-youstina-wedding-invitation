import { ReactNode, useEffect, useRef, useState } from "react";

// Fades content into view the first time it scrolls onto the screen.
// Variants:
//   "soft" — blurred and slightly zoomed out, sharpens into place
//   "up"   — slides up while fading in
export type RevealVariant = "soft" | "up";

export default function Reveal({
  children,
  delay = 0,
  variant = "soft",
}: {
  children: ReactNode;
  delay?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant}${isVisible ? " is-visible" : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
