// BG-09 · VOID BASE #04060e · Orbit at top · Geo float rising from bottom

// Floating geometry shapes — small SVGs that drift upward from the bottom
const GEO_FLOATS = [
  { left: '8%',  delay: '0s',    dur: '9s',  size: 7,  shape: 'circle',   op: .40 },
  { left: '18%', delay: '2.1s',  dur: '11s', size: 5,  shape: 'triangle', op: .30 },
  { left: '28%', delay: '0.7s',  dur: '8s',  size: 9,  shape: 'square',   op: .25 },
  { left: '38%', delay: '3.4s',  dur: '13s', size: 5,  shape: 'circle',   op: .35 },
  { left: '50%', delay: '1.2s',  dur: '10s', size: 11, shape: 'triangle', op: .22 },
  { left: '60%', delay: '4.5s',  dur: '8.5s',size: 6,  shape: 'circle',   op: .38 },
  { left: '70%', delay: '0.3s',  dur: '12s', size: 8,  shape: 'square',   op: .28 },
  { left: '80%', delay: '2.8s',  dur: '9.5s',size: 5,  shape: 'triangle', op: .32 },
  { left: '88%', delay: '1.6s',  dur: '11s', size: 7,  shape: 'circle',   op: .30 },
  { left: '44%', delay: '5.2s',  dur: '14s', size: 4,  shape: 'square',   op: .20 },
  { left: '14%', delay: '6.0s',  dur: '10s', size: 6,  shape: 'circle',   op: .28 },
  { left: '74%', delay: '3.8s',  dur: '9s',  size: 9,  shape: 'triangle', op: .24 },
];

function GeoShape({ shape, size, op }: { shape: string; size: number; op: number }) {
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
  // square
  return (
    <svg width={size * 2} height={size * 2} viewBox={`0 0 ${size * 2} ${size * 2}`} fill="none">
      <rect x="1" y="1" width={size * 2 - 2} height={size * 2 - 2} stroke={stroke} strokeWidth=".8" fill={color}/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">

      {/* ── BACKGROUND ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 50% 25%, rgba(196,136,12,.10) 0%, rgba(88,54,4,.05) 50%, transparent 70%),
            radial-gradient(ellipse 40% 44% at 50% 30%, rgba(165,39,70,.07) 0%, transparent 50%),
            linear-gradient(180deg, #04060e 0%, #06091a 100%)
          `,
        }}
      />

      {/* ── GEOMETRY FLOATS — rising from bottom ─────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ overflow: 'hidden' }}>
        {GEO_FLOATS.map((f, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: f.left,
              animation: `geoFloat ${f.dur} ${f.delay} ease-in infinite`,
            }}
          >
            <GeoShape shape={f.shape} size={f.size} op={f.op} />
          </div>
        ))}
      </div>

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <div className="section relative z-20 flex flex-col items-center text-center" style={{ paddingTop: 'clamp(24px, 4vw, 40px)' }}>

        {/* ── GEOMETRY ORBIT — top of section ──────────────────── */}
        <div
          className="pointer-events-none"
          style={{
            width: 'clamp(220px, 48vw, 380px)',
            height: 'clamp(220px, 48vw, 380px)',
            opacity: .32,
            marginBottom: 'clamp(24px, 4vw, 48px)',
            flexShrink: 0,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="-22 -22 124 124"
            fill="none"
            overflow="visible"
            style={{ display: 'block' }}
          >
            <g style={{ transformOrigin: '40px 40px', animation: 'spinCW 80s linear infinite' }}>
              <circle cx="40" cy="40" r="37" stroke="rgba(218,234,255,.28)" strokeWidth=".8"/>
              <circle cx="40"   cy="-10"  r="1.5" fill="rgba(218,234,255,.65)"/>
              <circle cx="75.4" cy="4.6"  r="1.5" fill="rgba(218,234,255,.65)"/>
              <circle cx="90"   cy="40"   r="1.5" fill="rgba(218,234,255,.65)"/>
              <circle cx="75.4" cy="75.4" r="1.5" fill="rgba(218,234,255,.65)"/>
              <circle cx="40"   cy="90"   r="1.5" fill="rgba(218,234,255,.65)"/>
              <circle cx="4.6"  cy="75.4" r="1.5" fill="rgba(218,234,255,.65)"/>
              <circle cx="-10"  cy="40"   r="1.5" fill="rgba(218,234,255,.65)"/>
              <circle cx="4.6"  cy="4.6"  r="1.5" fill="rgba(218,234,255,.65)"/>
              <circle cx="40"   cy="-18"  r="1.2" fill="rgba(218,234,255,.45)"/>
              <circle cx="81.0" cy="-1.0" r="1.2" fill="rgba(218,234,255,.45)"/>
              <circle cx="98"   cy="40"   r="1.2" fill="rgba(218,234,255,.45)"/>
              <circle cx="81.0" cy="81.0" r="1.2" fill="rgba(218,234,255,.45)"/>
              <circle cx="40"   cy="98"   r="1.2" fill="rgba(218,234,255,.45)"/>
              <circle cx="-1.0" cy="81.0" r="1.2" fill="rgba(218,234,255,.45)"/>
              <circle cx="-18"  cy="40"   r="1.2" fill="rgba(218,234,255,.45)"/>
              <circle cx="-1.0" cy="-1.0" r="1.2" fill="rgba(218,234,255,.45)"/>
              <polygon points="40,-3   43,3   37,3"              fill="none" stroke="rgba(218,234,255,.30)" strokeWidth=".5"/>
              <polygon points="70.4,9.6  68.3,16.0  64.0,11.7"  fill="none" stroke="rgba(218,234,255,.30)" strokeWidth=".5"/>
              <polygon points="83,40   77,43   77,37"            fill="none" stroke="rgba(218,234,255,.30)" strokeWidth=".5"/>
              <polygon points="70.4,70.4  64.0,68.3  68.3,64.0" fill="none" stroke="rgba(218,234,255,.30)" strokeWidth=".5"/>
              <polygon points="40,83   37,77   43,77"            fill="none" stroke="rgba(218,234,255,.30)" strokeWidth=".5"/>
              <polygon points="9.6,70.4  11.7,64.0  16.0,68.3"  fill="none" stroke="rgba(218,234,255,.30)" strokeWidth=".5"/>
              <polygon points="-3,40    3,37    3,43"            fill="none" stroke="rgba(218,234,255,.30)" strokeWidth=".5"/>
              <polygon points="9.6,9.6   16.0,11.7  11.7,16.0"  fill="none" stroke="rgba(218,234,255,.30)" strokeWidth=".5"/>
            </g>
            <g style={{ transformOrigin: '40px 40px', animation: 'spinCCW 120s linear infinite' }}>
              <circle cx="40" cy="40" r="24" stroke="rgba(218,234,255,.2)" strokeWidth=".8"/>
              <polygon points="40,16 64,40 40,64 16,40" stroke="rgba(218,234,255,.18)" strokeWidth=".7" fill="none"/>
              <polygon points="23,23 57,23 57,57 23,57" stroke="rgba(218,234,255,.15)" strokeWidth=".7" fill="none"/>
            </g>
            <g style={{ transformOrigin: '40px 40px', animation: 'spinCW 70s linear infinite' }}>
              <circle cx="40" cy="40" r="10" stroke="rgba(218,234,255,.2)" strokeWidth=".7"/>
              <path d="M40,40 Q46,36 40,32"          stroke="rgba(218,234,255,.55)" strokeWidth=".85" fill="none" strokeLinecap="round"/>
              <path d="M40,40 Q40.46,47.2 46.93,44"  stroke="rgba(218,234,255,.55)" strokeWidth=".85" fill="none" strokeLinecap="round"/>
              <path d="M40,40 Q33.54,36.8 33.07,44"  stroke="rgba(218,234,255,.55)" strokeWidth=".85" fill="none" strokeLinecap="round"/>
              <circle cx="40"    cy="32"  r=".9" fill="rgba(218,234,255,.75)"/>
              <circle cx="46.93" cy="44"  r=".9" fill="rgba(218,234,255,.75)"/>
              <circle cx="33.07" cy="44"  r=".9" fill="rgba(218,234,255,.75)"/>
              <circle cx="40"    cy="40"  r="1.2" fill="rgba(218,234,255,.65)"/>
            </g>
          </svg>
        </div>

        {/* Eyebrow */}
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          letterSpacing: '.52em',
          color: 'rgba(196,136,12,.55)',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '28px',
          lineHeight: 2,
        }}>
          Sacred Sound · Warrior Spirit<br/>Electronic Ritual
        </div>

        {/* Name */}
        <h2 style={{
          fontFamily: 'var(--font-cinzel-deco, var(--font-display))',
          fontSize: 'clamp(48px, 12vw, 110px)',
          fontWeight: 700,
          letterSpacing: '.12em',
          lineHeight: 1,
          marginBottom: '48px',
          background: 'linear-gradient(135deg, rgba(245,202,40,1) 0%, rgba(196,136,12,1) 45%, rgba(245,202,40,.85) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          KODY SUN
        </h2>

        {/* CTA Button */}
        <a
          href="mailto:contact@kodysun.com"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '.45em',
            color: 'rgba(228,212,182,.88)',
            textTransform: 'uppercase',
            textDecoration: 'none',
            padding: '16px 48px',
            border: '1px solid rgba(196,136,12,.45)',
            background: 'rgba(6,9,26,.4)',
            backdropFilter: 'blur(8px)',
            display: 'inline-block',
          }}
        >
          Contact Me
        </a>

      </div>
    </section>
  );
}
