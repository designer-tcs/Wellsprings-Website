export function WalkThroughMotion({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      role="img"
      aria-label="Walk through ours — a path to an open, lit doorway"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="doorGlow" cx="50%" cy="58%" r="55%">
          <stop offset="0" stopColor="#E8A24A" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#D9543A" stopOpacity="0.45" />
          <stop offset="1" stopColor="#D9543A" stopOpacity="0" />
        </radialGradient>
        <style>{`
@keyframes dgGlow{0%,100%{opacity:.65;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
@keyframes dgDraw{to{stroke-dashoffset:0}}
@keyframes dgStep{0%{opacity:0;transform:translateY(14px)}30%{opacity:1}100%{opacity:0;transform:translateY(-26px)}}
.dgGlow{transform-box:fill-box;transform-origin:center;animation:dgGlow 3.6s ease-in-out infinite}
.dgDraw{stroke-dasharray:1;stroke-dashoffset:1;animation:dgDraw 1.3s ease forwards}
.dgStep{transform-box:fill-box;transform-origin:center;animation:dgStep 2.6s ease-in-out infinite}
.dgStep2{animation-delay:.85s}.dgStep3{animation-delay:1.7s}
@media (prefers-reduced-motion:reduce){.dgGlow,.dgDraw,.dgStep{animation:none;opacity:1;stroke-dashoffset:0;transform:none}}
        `}</style>
      </defs>
      <rect x="6" y="6" width="468" height="388" rx="14" fill="#0e1626" stroke="#faf7f0" strokeOpacity="0.12" />
      <ellipse className="dgGlow" cx="240" cy="244" rx="104" ry="120" fill="url(#doorGlow)" />
      <path
        className="dgDraw"
        d="M186,360 L186,198 Q186,126 240,126 Q294,126 294,198 L294,360"
        fill="none"
        stroke="#f4efe4"
        strokeWidth="2.4"
        strokeLinecap="round"
        pathLength={1}
      />
      <line
        className="dgDraw"
        x1="170"
        y1="360"
        x2="310"
        y2="360"
        stroke="#f4efe4"
        strokeWidth="2"
        strokeOpacity="0.6"
        pathLength={1}
        style={{ animationDelay: ".5s" }}
      />
      <circle cx="278" cy="210" r="3" fill="#f4efe4" opacity="0.7" />
      <g stroke="#f4efe4" strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="2 9" fill="none" strokeLinecap="round">
        <path className="dgDraw" d="M120,392 L212,362" pathLength={1} style={{ animationDelay: ".7s" }} />
        <path className="dgDraw" d="M360,392 L268,362" pathLength={1} style={{ animationDelay: ".8s" }} />
        <path className="dgDraw" d="M240,398 L240,362" pathLength={1} style={{ animationDelay: ".9s" }} />
      </g>
      <g fill="none" stroke="#E8A24A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path className="dgStep" d="M229,338 L240,328 L251,338" />
        <path className="dgStep dgStep2" d="M229,338 L240,328 L251,338" />
        <path className="dgStep dgStep3" d="M229,338 L240,328 L251,338" />
      </g>
    </svg>
  );
}
