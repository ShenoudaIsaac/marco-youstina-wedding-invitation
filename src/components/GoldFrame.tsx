// Fixed gold line-art flourishes in two corners of the viewport.
// Inline SVG so it stays crisp at any size and needs no image assets.
function CornerFlourish({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      aria-hidden="true"
      fill="none"
    >
      <g stroke="#d4af37" strokeWidth="1.1" strokeLinecap="round">
        <path d="M4 92 Q4 4 92 4" opacity="0.75" />
        <path d="M4 126 Q4 4 126 4" opacity="0.45" />
        <path d="M4 160 Q4 4 160 4" opacity="0.22" />
        {/* small leaves budding off the innermost arc */}
        <path d="M46 13 q10 -10 22 -8 q-4 12 -16 14 q-4 -2 -6 -6Z" fill="#d4af37" opacity="0.5" stroke="none" />
        <path d="M13 46 q-10 10 -8 22 q12 -4 14 -16 q-2 -4 -6 -6Z" fill="#d4af37" opacity="0.5" stroke="none" />
      </g>
      <circle cx="92" cy="4" r="2.6" fill="#d4af37" opacity="0.85" />
      <circle cx="4" cy="92" r="2.6" fill="#d4af37" opacity="0.85" />
      <circle cx="126" cy="4" r="1.8" fill="#d4af37" opacity="0.5" />
      <circle cx="4" cy="126" r="1.8" fill="#d4af37" opacity="0.5" />
    </svg>
  );
}

export default function GoldFrame() {
  return (
    <>
      <CornerFlourish className="gold-corner top-left frame-bloom" />
      <CornerFlourish className="gold-corner bottom-right frame-bloom" />
    </>
  );
}
