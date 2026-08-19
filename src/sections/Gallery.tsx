import { useEffect, useRef, useState } from "react";
import { config } from "../config";
import Reveal from "../components/Reveal";

// Shown for any photo that hasn't been added to public/images/ yet, so the
// gallery works before (and while) the real pictures arrive.
const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="800" viewBox="0 0 640 800">
      <rect width="640" height="800" fill="#0e2240"/>
      <rect x="26" y="26" width="588" height="748" fill="none" stroke="#d4af37" stroke-opacity="0.4" stroke-width="2"/>
      <text x="320" y="384" text-anchor="middle" font-family="Georgia, serif" font-size="72" fill="#d4af37">M &#183; Y</text>
      <text x="320" y="448" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="26" fill="#8f9ab0">Photo coming soon</text>
    </svg>`,
  );

export default function Gallery() {
  const photos = config.gallery;
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const showPrev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const showNext = () => setIndex((i) => (i + 1) % photos.length);

  // Gentle auto-advance. Re-armed on every index change, so any manual
  // navigation also resets the timer.
  useEffect(() => {
    const id = window.setInterval(showNext, 6000);
    return () => window.clearInterval(id);
  }, [index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Horizontal swipe of at least 40px; ignore mostly-vertical
    // gestures so page scrolling keeps working.
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) {
      showNext();
    } else {
      showPrev();
    }
  };

  return (
    <section className="gallery-section bg-night-deep" id="gallery">
      <Reveal>
        <p className="section-kicker">Our story</p>
        <h2 className="section-title">Our Moments</h2>
      </Reveal>

      <Reveal delay={150}>
        <div className="gallery-viewport">
          <button
            type="button"
            className="gallery-nav-btn prev"
            onClick={showPrev}
            aria-label="Show previous photo"
          >
            ‹
          </button>

          <div
            className="gallery-item"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={index}
              className="gallery-img"
              src={failed[index] ? PLACEHOLDER : photos[index]}
              alt={`A moment from Marco & Youstina's journey, photo ${index + 1}`}
              draggable={false}
              onError={() => setFailed((f) => ({ ...f, [index]: true }))}
            />
          </div>

          <button
            type="button"
            className="gallery-nav-btn next"
            onClick={showNext}
            aria-label="Show next photo"
          >
            ›
          </button>
        </div>

        <div className="gallery-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`gallery-dot${i === index ? " active" : ""}`}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
