export function PillarGlyph({
  pillar,
  className,
}: {
  pillar: "Think" | "Build" | "Belong";
  className?: string;
}) {
  return (
    <svg viewBox="0 0 160 160" role="img" aria-label={`${pillar} illustration`} className={className} xmlns="http://www.w3.org/2000/svg">
      {pillar === "Think" && (
        <>
          <circle cx="80" cy="80" r="56" fill="#F6DCD5" opacity="0.5" />
          <circle className="ws-ring" cx="80" cy="80" r="56" fill="none" stroke="#D9543A" strokeWidth="1" opacity="0.3" strokeDasharray="3 7" />
          <g className="ws-breathe">
            <g fill="none" stroke="#D9543A" strokeWidth="2.4" strokeLinecap="round">
              <path d="M80 62 V98" /><path d="M62 80 H98" /><path d="M67 67 L93 93" /><path d="M93 67 L67 93" />
            </g>
            <circle cx="80" cy="80" r="3.5" fill="#D9543A" />
            <circle className="ws-twinkle" cx="80" cy="52" r="3" fill="#B8860B" />
            <circle className="ws-twinkle" cx="54" cy="100" r="3" fill="#B8860B" style={{ animationDelay: "1s" }} />
            <circle className="ws-twinkle" cx="106" cy="100" r="3" fill="#B8860B" style={{ animationDelay: "2s" }} />
          </g>
        </>
      )}
      {pillar === "Build" && (
        <>
          <circle cx="80" cy="80" r="56" fill="#F4E8CC" opacity="0.55" />
          <circle className="ws-ring" cx="80" cy="80" r="56" fill="none" stroke="#B8860B" strokeWidth="1" opacity="0.3" strokeDasharray="3 7" style={{ animationDirection: "reverse" }} />
          <g className="ws-breathe" style={{ animationDelay: "0.6s" }}>
            <rect x="62" y="84" width="26" height="26" rx="3" fill="none" stroke="#B8860B" strokeWidth="2.4" />
            <rect x="84" y="64" width="22" height="22" rx="3" fill="none" stroke="#B8860B" strokeWidth="2.4" />
            <g fill="none" stroke="#D9543A" strokeWidth="2.2" strokeLinecap="round">
              <path d="M96 52 V64" /><path d="M90 58 H102" />
            </g>
            <circle className="ws-twinkle" cx="96" cy="58" r="2.6" fill="#D9543A" />
          </g>
        </>
      )}
      {pillar === "Belong" && (
        <>
          <circle cx="80" cy="80" r="56" fill="#E2EAE2" opacity="0.7" />
          <circle className="ws-ring" cx="80" cy="80" r="56" fill="none" stroke="#5A7D5A" strokeWidth="1" opacity="0.35" strokeDasharray="3 7" />
          <g className="ws-breathe" style={{ animationDelay: "1.2s" }}>
            <circle cx="68" cy="82" r="9" fill="none" stroke="#5A7D5A" strokeWidth="2.4" />
            <circle cx="92" cy="82" r="9" fill="none" stroke="#5A7D5A" strokeWidth="2.4" />
            <path d="M54 104 Q80 116 106 104" fill="none" stroke="#5A7D5A" strokeWidth="2.4" strokeLinecap="round" />
            <path className="ws-twinkle" d="M80 60 C77 55 70 55 70 61 C70 66 80 70 80 70 C80 70 90 66 90 61 C90 55 83 55 80 60 Z" fill="#D9543A" opacity="0.85" style={{ animationDuration: "3.5s" }} />
          </g>
        </>
      )}
    </svg>
  );
}
