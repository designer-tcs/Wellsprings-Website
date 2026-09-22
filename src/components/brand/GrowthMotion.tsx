export function GrowthMotion({ className }: { className?: string }) {
  return (
    <figure
      className={`rounded-2xl border border-[var(--grey-200)] bg-[var(--ws-paper)] p-7 md:p-9 ${className ?? ""}`}
    >
      <figcaption className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--grey-700)]">
        One school · three stages
      </figcaption>
      <svg
        viewBox="0 0 440 470"
        role="img"
        aria-label="Three stages that grow with your child: Pre-primary, Primary, Middle School"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <defs>
          <style>{`
@keyframes gmDraw{to{stroke-dashoffset:0}}
@keyframes gmPop{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}
@keyframes gmFade{from{opacity:0;transform:translateX(8px)}to{opacity:1;transform:translateX(0)}}
@keyframes gmUp{0%{opacity:0;transform:translateY(8px)}35%{opacity:1}100%{opacity:0;transform:translateY(-16px)}}
.gmStem{stroke-dasharray:1;stroke-dashoffset:1;animation:gmDraw 1.5s ease forwards}
.gmNode{transform-box:fill-box;transform-origin:center;opacity:0;animation:gmPop .6s ease-out forwards}
.gmLabel{opacity:0;animation:gmFade .6s ease-out forwards}
.gmS1{animation-delay:.35s}.gmS2{animation-delay:.8s}.gmS3{animation-delay:1.25s}
.gmBud{transform-box:fill-box;transform-origin:center;animation:gmUp 2.6s ease-in-out infinite;animation-delay:1.6s}
@media(prefers-reduced-motion:reduce){.gmStem,.gmNode,.gmLabel,.gmBud{animation:none;opacity:1;stroke-dashoffset:0;transform:none}}
          `}</style>
        </defs>

        {/* stem */}
        <path className="gmStem" pathLength={1} d="M330,400 V70" fill="none" stroke="#27313F" strokeOpacity="0.16" strokeWidth="2" />
        <path d="M330,400 V442" fill="none" stroke="#5A7D5A" strokeOpacity="0.5" strokeWidth="2" />
        {/* sprout */}
        <path className="gmNode gmS1" d="M330,442 C318,435 309,444 316,453 C326,451 330,448 330,442 Z" fill="#5A7D5A" opacity="0.9" />
        <path className="gmNode gmS1" d="M330,442 C342,435 351,444 344,453 C334,451 330,448 330,442 Z" fill="#5A7D5A" opacity="0.6" />

        {/* Pre-primary (sage, bottom) */}
        <g className="gmLabel gmS1">
          <text x="288" y="396" textAnchor="end" className="font-serif" fill="#27313F" fontSize="19">Pre-primary</text>
          <text x="288" y="416" textAnchor="end" className="font-mono" fill="#6B7280" fontSize="11" style={{ letterSpacing: "0.12em" }}>AGES 3–5</text>
        </g>
        <g className="gmNode gmS1">
          <circle cx="330" cy="400" r="12" fill="white" stroke="#5A7D5A" strokeWidth="2.4" />
          <circle cx="330" cy="400" r="3.5" fill="#5A7D5A" />
        </g>
        <path className="gmNode gmS1" d="M346,400 C354,393 365,396 363,402 C357,404 350,403 346,400 Z" fill="#5A7D5A" opacity="0.85" />

        {/* Primary (sun, middle) */}
        <g className="gmLabel gmS2">
          <text x="288" y="231" textAnchor="end" className="font-serif" fill="#27313F" fontSize="19">Primary</text>
          <text x="288" y="251" textAnchor="end" className="font-mono" fill="#6B7280" fontSize="11" style={{ letterSpacing: "0.12em" }}>GRADES 1–5</text>
        </g>
        <g className="gmNode gmS2">
          <circle cx="330" cy="235" r="13" fill="white" stroke="#B8860B" strokeWidth="2.4" />
          <circle cx="330" cy="235" r="3.5" fill="#B8860B" />
        </g>
        <path className="gmNode gmS2" d="M347,235 C355,228 366,231 364,237 C358,239 351,238 347,235 Z" fill="#B8860B" opacity="0.85" />

        {/* Middle (coral, top) */}
        <g className="gmLabel gmS3">
          <text x="286" y="66" textAnchor="end" className="font-serif" fill="#27313F" fontSize="19">Middle School</text>
          <text x="286" y="86" textAnchor="end" className="font-mono" fill="#6B7280" fontSize="11" style={{ letterSpacing: "0.12em" }}>GRADES 6–8</text>
        </g>
        <g className="gmNode gmS3">
          <circle cx="330" cy="70" r="15" fill="white" stroke="#D9543A" strokeWidth="2.4" />
          <circle cx="330" cy="70" r="4" fill="#D9543A" />
        </g>
        <path className="gmNode gmS3" d="M349,70 C357,63 368,66 366,72 C360,74 353,73 349,70 Z" fill="#D9543A" opacity="0.85" />

        {/* top bud drifting */}
        <path className="gmBud" d="M321,42 L330,32 L339,42" fill="none" stroke="#D9543A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </figure>
  );
}
