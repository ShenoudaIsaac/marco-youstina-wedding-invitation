// Decorative night sky: twinkling stars in the upper half and golden sparks
// drifting up like fireflies over the sea. Pure CSS animation; hidden for
// users who prefer reduced motion.
const STARS = Array.from({ length: 26 }, (_, i) => ({
  left: `${(i * 37 + 5) % 100}%`,
  top: `${(i * 23 + 3) % 55}%`,
  delay: `${(i * 0.7) % 4}s`,
  scale: 0.5 + ((i * 3) % 4) * 0.3,
}));

const SPARKS = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 8.6 + 4) % 100}%`,
  delay: `${(i * 2.3) % 14}s`,
  duration: `${13 + (i % 5) * 2.5}s`,
  scale: 0.55 + ((i * 7) % 5) * 0.18,
}));

export default function NightSky() {
  return (
    <div className="night-sky" aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={`star-${i}`}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            transform: `scale(${s.scale})`,
          }}
        />
      ))}
      {SPARKS.map((s, i) => (
        <span
          key={`spark-${i}`}
          className="spark"
          style={{
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration,
            scale: `${s.scale}`,
          }}
        />
      ))}
    </div>
  );
}
