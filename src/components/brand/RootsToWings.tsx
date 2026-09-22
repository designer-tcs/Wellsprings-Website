export function RootsToWings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 680 540"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="rtwTitle rtwDesc"
      className={className}
    >
      <title id="rtwTitle">Roots to Wings</title>
      <desc id="rtwDesc">
        Sage roots gather into a gold stem that opens into coral wings, with a bird and motes
        rising.
      </desc>
      <defs>
        <linearGradient id="stemGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#5A7D5A" />
          <stop offset="1" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="wingGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#B8860B" />
          <stop offset="1" stopColor="#D9543A" />
        </linearGradient>
      </defs>
      <circle cx="340" cy="215" r="155" fill="#F4E8CC" opacity="0.5" />
      <circle cx="340" cy="215" r="156" fill="none" stroke="#B8860B" strokeWidth="1" opacity="0.12" />
      <line
        x1="184"
        y1="330"
        x2="496"
        y2="330"
        stroke="#5A7D5A"
        strokeWidth="1"
        opacity="0.25"
        strokeDasharray="2 6"
      />
      <g fill="none" stroke="#5A7D5A" strokeLinecap="round">
        <path d="M340,330 C336,388 344,440 340,505" strokeWidth="3" />
        <path d="M340,344 C310,362 286,388 258,430" strokeWidth="2.5" />
        <path d="M340,344 C370,362 394,388 422,430" strokeWidth="2.5" />
        <path d="M340,356 C300,380 272,412 240,470" strokeWidth="2" />
        <path d="M340,356 C380,380 408,412 440,470" strokeWidth="2" />
        <path d="M340,366 C322,398 304,430 292,496" strokeWidth="1.5" />
        <path d="M340,366 C358,398 376,430 388,496" strokeWidth="1.5" />
        <path d="M300,400 C292,410 286,422 284,436" strokeWidth="1.2" />
        <path d="M380,400 C388,410 394,422 396,436" strokeWidth="1.2" />
      </g>
      <g fill="#5A7D5A">
        <circle cx="258" cy="430" r="2.5" />
        <circle cx="422" cy="430" r="2.5" />
        <circle cx="240" cy="470" r="2.5" />
        <circle cx="440" cy="470" r="2.5" />
        <circle cx="292" cy="496" r="2.5" />
        <circle cx="388" cy="496" r="2.5" />
        <circle cx="340" cy="505" r="2.5" />
      </g>
      <path
        d="M340,330 L340,210"
        stroke="url(#stemGrad)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M340,292 C322,288 312,276 316,262 C332,268 340,280 340,292 Z"
        fill="#5A7D5A"
        opacity="0.85"
      />
      <path
        d="M340,272 C358,268 368,256 364,242 C348,248 340,260 340,272 Z"
        fill="#6E8F6E"
        opacity="0.8"
      />
      <g fill="none" stroke="url(#wingGrad)" strokeWidth="2.6" strokeLinecap="round">
        <path d="M340,214 C302,196 268,170 234,136" />
        <path d="M340,219 C306,204 276,182 248,156" />
        <path d="M340,224 C310,212 284,194 262,174" />
        <path d="M340,229 C314,221 294,208 278,194" />
        <path d="M340,214 C378,196 412,170 446,136" />
        <path d="M340,219 C374,204 404,182 432,156" />
        <path d="M340,224 C370,212 396,194 418,174" />
        <path d="M340,229 C366,221 386,208 402,194" />
      </g>
      <path
        d="M326,150 Q340,134 340,140 Q340,134 354,150"
        fill="none"
        stroke="#D9543A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M332,116 Q340,107 340,111 Q340,107 348,116"
        fill="none"
        stroke="#B8860B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <g>
        <circle cx="340" cy="92" r="3" fill="#D9543A" />
        <circle cx="372" cy="124" r="2.2" fill="#B8860B" />
        <circle cx="308" cy="128" r="2.2" fill="#B8860B" />
        <circle cx="392" cy="158" r="1.6" fill="#D9543A" opacity="0.7" />
        <circle cx="288" cy="162" r="1.6" fill="#D9543A" opacity="0.7" />
        <circle cx="356" cy="80" r="1.6" fill="#B8860B" opacity="0.8" />
      </g>
    </svg>
  );
}
