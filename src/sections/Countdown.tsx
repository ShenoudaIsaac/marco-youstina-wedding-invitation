import { useEffect, useState } from "react";
import { config } from "../config";
import Reveal from "../components/Reveal";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function partsUntil(targetMs: number): Parts | null {
  const diff = targetMs - Date.now();
  if (diff <= 0) return null;
  const total = Math.floor(diff / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export default function Countdown() {
  const targetMs = new Date(config.countdownTarget).getTime();
  const [parts, setParts] = useState<Parts | null>(() => partsUntil(targetMs));

  useEffect(() => {
    const id = window.setInterval(() => setParts(partsUntil(targetMs)), 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  const tiles: Array<[number, string]> = parts
    ? [
        [parts.days, "Days"],
        [parts.hours, "Hours"],
        [parts.minutes, "Minutes"],
        [parts.seconds, "Seconds"],
      ]
    : [];

  return (
    <section className="countdown-section bg-night-deep" id="countdown">
      <Reveal>
        <p className="section-kicker">Save the date</p>
        <h2 className="section-title">Counting the Moments</h2>
      </Reveal>

      <Reveal delay={150}>
        {parts ? (
          <div className="countdown-grid">
            {tiles.map(([value, label]) => (
              <div className="countdown-tile" key={label}>
                <span className="countdown-value">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="countdown-done">The big day is here — forever begins</p>
        )}
      </Reveal>
    </section>
  );
}
