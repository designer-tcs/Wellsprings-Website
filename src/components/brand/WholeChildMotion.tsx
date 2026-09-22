import { useEffect, useRef, useState } from "react";

export function WholeChildMotion({ className, showLabels = true, dimensionLabels = false }: { className?: string; showLabels?: boolean; dimensionLabels?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`wc${inView ? " in-view" : ""} ${className ?? ""}`}>
      <svg
        viewBox="0 0 680 300"
        role="img"
        aria-label="Think, Build, Belong — the whole child"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* connecting thread */}
        <path
          className="thread"
          d="M170,150 H510"
          fill="none"
          stroke="#5A7D5A"
          strokeWidth="1.5"
          opacity="0.3"
          strokeDasharray="2 7"
          pathLength={1}
        />

        {/* Pillar 1 — Think */}
        <g className="pillar p1">
          <circle cx="170" cy="150" r="60" fill="#F6DCD5" opacity="0.5" />
          <circle
            className="ring"
            cx="170"
            cy="150"
            r="60"
            fill="none"
            stroke="#D9543A"
            strokeWidth="1"
            opacity="0.3"
            strokeDasharray="3 7"
          />
          <g className="glyph">
            <path className="draw" d="M170,128 V172" fill="none" stroke="#D9543A" strokeWidth="2.4" strokeLinecap="round" pathLength={1} style={{ animationDelay: "0.7s" }} />
            <path className="draw" d="M148,150 H192" fill="none" stroke="#D9543A" strokeWidth="2.4" strokeLinecap="round" pathLength={1} style={{ animationDelay: "0.8s" }} />
            <path className="draw" d="M155,135 L185,165" fill="none" stroke="#D9543A" strokeWidth="2.4" strokeLinecap="round" pathLength={1} style={{ animationDelay: "0.9s" }} />
            <path className="draw" d="M185,135 L155,165" fill="none" stroke="#D9543A" strokeWidth="2.4" strokeLinecap="round" pathLength={1} style={{ animationDelay: "0.9s" }} />
            <circle cx="170" cy="150" r="3.2" fill="#D9543A" />
            <circle className="tw" cx="170" cy="120" r="3" fill="#B8860B" style={{ animationDelay: "2.4s" }} />
            <circle className="tw" cx="147" cy="178" r="3" fill="#B8860B" style={{ animationDelay: "2.9s" }} />
            <circle className="tw" cx="193" cy="178" r="3" fill="#B8860B" style={{ animationDelay: "3.3s" }} />
          </g>
        </g>

        {/* Pillar 2 — Build */}
        <g className="pillar p2">
          <circle cx="340" cy="150" r="60" fill="#F4E8CC" opacity="0.55" />
          <circle
            className="ring"
            cx="340"
            cy="150"
            r="60"
            fill="none"
            stroke="#B8860B"
            strokeWidth="1"
            opacity="0.3"
            strokeDasharray="3 7"
            style={{ animationDirection: "reverse" }}
          />
          <g className="glyph" style={{ animationDelay: "2.5s" }}>
            <rect className="draw" x="324" y="152" width="24" height="24" rx="3" fill="none" stroke="#B8860B" strokeWidth="2.4" pathLength={1} style={{ animationDelay: "1s" }} />
            <rect className="draw" x="344" y="134" width="20" height="20" rx="3" fill="none" stroke="#B8860B" strokeWidth="2.4" pathLength={1} style={{ animationDelay: "1.15s" }} />
            <path className="draw" d="M357,126 V138" fill="none" stroke="#D9543A" strokeWidth="2.2" strokeLinecap="round" pathLength={1} style={{ animationDelay: "1.3s" }} />
            <path className="draw" d="M351,132 H363" fill="none" stroke="#D9543A" strokeWidth="2.2" strokeLinecap="round" pathLength={1} style={{ animationDelay: "1.3s" }} />
          </g>
        </g>

        {/* Pillar 3 — Belong */}
        <g className="pillar p3">
          <circle cx="510" cy="150" r="60" fill="#E2EAE2" opacity="0.7" />
          <circle
            className="ring"
            cx="510"
            cy="150"
            r="60"
            fill="none"
            stroke="#5A7D5A"
            strokeWidth="1"
            opacity="0.3"
            strokeDasharray="3 7"
          />
          <g className="glyph" style={{ animationDelay: "2.8s" }}>
            <circle className="draw" cx="498" cy="152" r="9" fill="none" stroke="#5A7D5A" strokeWidth="2.4" pathLength={1} style={{ animationDelay: "1.3s" }} />
            <circle className="draw" cx="522" cy="152" r="9" fill="none" stroke="#5A7D5A" strokeWidth="2.4" pathLength={1} style={{ animationDelay: "1.4s" }} />
            <path className="draw" d="M485,174 Q510,186 535,174" fill="none" stroke="#5A7D5A" strokeWidth="2.4" strokeLinecap="round" pathLength={1} style={{ animationDelay: "1.5s" }} />
            <path
              className="tw"
              d="M510,130 C507,125 500,125 500,131 C500,136 510,140 510,140 C510,140 520,136 520,131 C520,125 513,125 510,130 Z"
              fill="#D9543A"
              opacity="0.85"
              style={{ animationDelay: "2.6s" }}
            />
          </g>
        </g>

        {/* Labels */}
        {dimensionLabels ? (
          <g fontFamily="Lora, Georgia, serif">
            <text className="lbl l1" x="170" y="250" textAnchor="middle" fontSize="24" fill="#D9543A">Mind</text>
            <text className="lbl l2" x="340" y="250" textAnchor="middle" fontSize="24" fill="#B8860B">Body</text>
            <text className="lbl l3" x="510" y="250" textAnchor="middle" fontSize="24" fill="#5A7D5A">Heart</text>
          </g>
        ) : showLabels && (
          <>
            <g fontFamily="Lora, Georgia, serif">
              <text className="lbl l1" x="170" y="244" textAnchor="middle" fontSize="23" fill="#D9543A">Think</text>
              <text className="lbl l2" x="340" y="244" textAnchor="middle" fontSize="23" fill="#B8860B">Build</text>
              <text className="lbl l3" x="510" y="244" textAnchor="middle" fontSize="23" fill="#5A7D5A">Belong</text>
            </g>
            <g fontFamily="JetBrains Mono, ui-monospace, monospace" fill="#6b7280">
              <text className="lbl l1" x="170" y="266" textAnchor="middle" fontSize="10" letterSpacing="3">MIND</text>
              <text className="lbl l2" x="340" y="266" textAnchor="middle" fontSize="10" letterSpacing="3">BODY</text>
              <text className="lbl l3" x="510" y="266" textAnchor="middle" fontSize="10" letterSpacing="3">HEART</text>
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
