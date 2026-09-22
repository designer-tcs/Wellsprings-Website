const SEATS = 10;

export function LunchTable() {
  const colors = [
    "var(--coral-600)",
    "var(--sun-700)",
    "var(--sage-700)",
    "var(--slate-1000)",
  ];

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <svg
        viewBox="0 0 320 320"
        className="h-auto w-full"
        role="img"
        aria-label="A lunch table with children from different classes sitting together"
      >
        <defs>
          <style>{`
            @keyframes ws-lunch-spin { to { transform: rotate(360deg); } }
            @keyframes ws-lunch-unspin { to { transform: rotate(-360deg); } }
            @keyframes ws-lunch-pop { from { opacity: 0; transform: scale(.6); } to { opacity: 1; transform: scale(1); } }
            .ws-lunch-ring { transform-origin: 160px 160px; animation: ws-lunch-spin 60s linear infinite; }
            .ws-seat { transform-box: fill-box; transform-origin: center; animation: ws-lunch-pop 600ms ease-out backwards; }
            .ws-seat-upright { transform-box: fill-box; transform-origin: center; animation: ws-lunch-unspin 60s linear infinite; }
            @media (prefers-reduced-motion: reduce) {
              .ws-lunch-ring, .ws-seat, .ws-seat-upright { animation: none; }
            }
          `}</style>
        </defs>

        <circle cx="160" cy="160" r="128" fill="none" stroke="var(--grey-200)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="160" cy="160" r="78" fill="var(--sage-200)" />
        <circle cx="160" cy="160" r="78" fill="none" stroke="var(--sage-700)" strokeWidth="1.5" />

        <text x="160" y="150" textAnchor="middle" className="font-mono" fontSize="9" letterSpacing="2" fill="var(--sage-700)">
          ONE TABLE
        </text>
        <text x="160" y="172" textAnchor="middle" fontSize="15" fill="var(--ws-ink)" fontFamily="Lora, serif">
          Four classes,
        </text>
        <text x="160" y="190" textAnchor="middle" fontSize="15" fill="var(--ws-ink)" fontFamily="Lora, serif">
          one meal
        </text>

        <g className="ws-lunch-ring">
          {Array.from({ length: SEATS }).map((_, i) => {
            const a = (i / SEATS) * Math.PI * 2 - Math.PI / 2;
            const x = 160 + Math.cos(a) * 122;
            const y = 160 + Math.sin(a) * 122;
            return (
              <g key={i} className="ws-seat" style={{ animationDelay: `${i * 90}ms` }}>
                <g className="ws-seat-upright">
                  <circle cx={x} cy={y} r="16" fill="white" stroke="var(--grey-200)" />
                  <circle cx={x} cy={y - 4} r="5" fill={colors[i % colors.length]} />
                  <path
                    d={`M ${x - 8} ${y + 11} a 8 8 0 0 1 16 0`}
                    fill={colors[i % colors.length]}
                    opacity="0.55"
                  />
                </g>
              </g>
            );
          })}
        </g>
      </svg>
      <p className="mt-4 text-center text-[13px] leading-[1.6] text-[var(--grey-700)]">
        Seats change through the term, so no child eats alone.
      </p>
    </div>
  );
}
