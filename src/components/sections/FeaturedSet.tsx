// BG-02 · ABYSS BASE #06091a · Ocean Depths cool sweep · Sacred Dusk bottom-right corner

const GEO_FALLS = [
  { left: '5%',  delay: '0s',    dur: '10s',  size: 6,  shape: 'circle',   op: .35 },
  { left: '15%', delay: '2.4s',  dur: '12s',  size: 5,  shape: 'triangle', op: .28 },
  { left: '25%', delay: '1.0s',  dur: '9s',   size: 8,  shape: 'square',   op: .22 },
  { left: '35%', delay: '3.8s',  dur: '13s',  size: 5,  shape: 'circle',   op: .32 },
  { left: '48%', delay: '0.5s',  dur: '11s',  size: 10, shape: 'triangle', op: .20 },
  { left: '58%', delay: '4.2s',  dur: '8.5s', size: 6,  shape: 'circle',   op: .36 },
  { left: '68%', delay: '1.8s',  dur: '12s',  size: 7,  shape: 'square',   op: .26 },
  { left: '78%', delay: '3.1s',  dur: '10s',  size: 5,  shape: 'triangle', op: .30 },
  { left: '87%', delay: '0.9s',  dur: '9.5s', size: 7,  shape: 'circle',   op: .28 },
  { left: '42%', delay: '5.6s',  dur: '14s',  size: 4,  shape: 'square',   op: .18 },
  { left: '11%', delay: '6.3s',  dur: '11s',  size: 6,  shape: 'circle',   op: .25 },
  { left: '72%', delay: '2.7s',  dur: '8s',   size: 8,  shape: 'triangle', op: .22 },
];

function GeoFallShape({ shape, size, op }: { shape: string; size: number; op: number }) {
  const color = `rgba(196,136,12,${op})`;
  const stroke = `rgba(232,180,24,${op * 1.2})`;
  if (shape === 'circle') {
    return (
      <svg width={size * 2} height={size * 2} viewBox={`0 0 ${size * 2} ${size * 2}`} fill="none">
        <circle cx={size} cy={size} r={size - 1} stroke={stroke} strokeWidth=".8" fill={color}/>
      </svg>
    );
  }
  if (shape === 'triangle') {
    const w = size * 2, h = size * 2;
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
        <polygon points={`${w/2},1 ${w-1},${h-1} 1,${h-1}`} stroke={stroke} strokeWidth=".8" fill={color}/>
      </svg>
    );
  }
  return (
    <svg width={size * 2} height={size * 2} viewBox={`0 0 ${size * 2} ${size * 2}`} fill="none">
      <rect x="1" y="1" width={size * 2 - 2} height={size * 2 - 2} stroke={stroke} strokeWidth=".8" fill={color}/>
    </svg>
  );
}

export default function FeaturedSet() {
  return (
    <section id="featuredset" className="relative overflow-hidden">

      {/* ── BACKGROUND ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 58% 55% at 90% 88%, rgba(56,6,24,.22) 0%, transparent 55%),
            radial-gradient(ellipse 48% 60% at 50% 52%, rgba(110,165,225,.06) 0%, transparent 62%),
            linear-gradient(135deg, #06091a 0%, #0a1224 52%, #0e1b32 100%)
          `,
        }}
      />

      {/* ── GEO FALLS — dropping from the top ───────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ overflow: 'hidden' }}>
        {GEO_FALLS.map((f, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '-20px',
              left: f.left,
              animation: `geoFall ${f.dur} ${f.delay} ease-in infinite`,
            }}
          >
            <GeoFallShape shape={f.shape} size={f.size} op={f.op} />
          </div>
        ))}
      </div>

      {/* ── BOTTOM HAZE → into UpcomingEvents ────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 'clamp(70px, 12vw, 110px)', background: 'linear-gradient(to bottom, transparent, #0a1224)' }}
      />

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <div className="section relative z-20">

        {/* Heading */}
        <div className="mb-3">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 300,
            letterSpacing: '.08em',
            color: 'rgba(228,212,182,.92)',
            lineHeight: 1.1,
          }}>
            Sacred Sound
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(11px, 1.6vw, 14px)',
            letterSpacing: '.3em',
            color: 'rgba(198,175,125,.38)',
            textTransform: 'uppercase',
            marginTop: '10px',
          }}>
            Mixes · Sets · Productions
          </p>
        </div>

        {/* Gold rule */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(196,136,12,.35), rgba(196,136,12,.08) 60%, transparent)', marginBottom: '36px' }} />

        {/* SoundCloud link-out card */}
        <a
          href="https://soundcloud.com/solsticek"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block rounded-lg overflow-hidden"
          style={{
            boxShadow: '0 0 60px rgba(6,9,26,.8), 0 0 120px rgba(14,28,52,.6)',
            textDecoration: 'none',
          }}
        >
          {/* Card background with subtle gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 60% at 80% 50%, rgba(196,136,12,.07) 0%, transparent 65%),
                radial-gradient(ellipse 40% 80% at 10% 50%, rgba(56,6,24,.18) 0%, transparent 60%),
                linear-gradient(135deg, rgba(6,9,26,.95) 0%, rgba(10,18,36,.98) 100%)
              `,
            }}
          />

          {/* Subtle waveform bars — decorative */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: .06 }}>
            <div className="flex items-center gap-[3px]" style={{ height: '100%' }}>
              {[38,62,45,80,55,90,40,75,50,88,44,70,38,95,52,78,42,65,48,85,36,72,58,82,46,68,54,76,40,60].map((h, i) => (
                <div key={i} style={{
                  width: '3px',
                  height: `${h}%`,
                  background: 'rgba(196,136,12,1)',
                  borderRadius: '2px',
                  flexShrink: 0,
                }} />
              ))}
            </div>
          </div>

          {/* Border */}
          <div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{ border: '1px solid rgba(196,136,12,.14)' }}
          />

          {/* Inner content */}
          <div className="relative flex flex-col items-center justify-center py-14 px-8 gap-7">

            {/* Handle */}
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(10px, 1.4vw, 12px)',
              letterSpacing: '.38em',
              color: 'rgba(198,175,125,.40)',
              textTransform: 'uppercase',
            }}>
              soundcloud.com / solsticek
            </div>

            {/* CTA button */}
            <div
              className="flex items-center gap-3"
              style={{
                padding: '12px 32px',
                border: '1px solid rgba(196,136,12,.45)',
                borderRadius: '2px',
                background: 'rgba(196,136,12,.07)',
                transition: 'background .2s, border-color .2s',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '.42em',
                color: 'rgba(232,180,24,.85)',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                Listen Now
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(232,180,24,.7)" strokeWidth="1.4">
                <path d="M2 6h8M7 3l3 3-3 3"/>
              </svg>
            </div>

          </div>
        </a>

      </div>
    </section>
  );
}
