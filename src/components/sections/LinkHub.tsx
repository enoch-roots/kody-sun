// BG-08 · SACRED DUSK BASE #1e0912→#380618 · Rose full bloom dominant · Stage Light gold core

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1.4" fill="white"/>
    </svg>
  );
}

function SoundCloudIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 50 34" fill="white">
      <rect x="0"  y="27" width="6" height="7"  rx="3"/>
      <rect x="8"  y="21" width="6" height="13" rx="3"/>
      <rect x="16" y="15" width="6" height="19" rx="3"/>
      <rect x="24" y="9"  width="6" height="25" rx="3"/>
      <circle cx="38" cy="12" r="12"/>
      <rect   x="26" y="12" width="24" height="22"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 24 17" fill="none">
      <rect x="0.5" y="0.5" width="23" height="16" rx="4" stroke="white" strokeWidth="1.6"/>
      <path d="M10 5.5l6 3-6 3V5.5z" fill="white"/>
    </svg>
  );
}

function SoulBloomIcon() {
  /* Sacred Rose — the SoulBloom brand mark */
  return (
    <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(255,255,255,.18)" stroke="white" strokeWidth=".9"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(255,255,255,.18)" stroke="white" strokeWidth=".9" transform="rotate(60,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(255,255,255,.18)" stroke="white" strokeWidth=".9" transform="rotate(120,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(255,255,255,.18)" stroke="white" strokeWidth=".9" transform="rotate(180,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(255,255,255,.18)" stroke="white" strokeWidth=".9" transform="rotate(240,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(255,255,255,.18)" stroke="white" strokeWidth=".9" transform="rotate(300,30,30)"/>
      <circle cx="30" cy="30" r="2.6" fill="white"/>
    </svg>
  );
}

const LINKS = [
  {
    icon: <InstagramIcon />,
    label: 'Instagram',
    handle: '@solsticek',
    href: 'https://www.instagram.com/solsticek',
  },
  {
    icon: <SoundCloudIcon />,
    label: 'SoundCloud',
    handle: 'solsticek',
    href: 'https://soundcloud.com/solsticek',
  },
  {
    icon: <YouTubeIcon />,
    label: 'YouTube',
    handle: '@kodysunbloom',
    href: 'https://www.youtube.com/@kodysunbloom',
  },
  {
    icon: <SoulBloomIcon />,
    label: 'SoulBloom®',
    handle: 'soulbloom.org',
    href: 'https://www.soulbloom.org/',
  },
  {
    icon: <InstagramIcon />,
    label: 'SoulBloom Festival',
    handle: '@soulbloomfestival',
    href: 'https://www.instagram.com/soulbloomfestival',
  },
];

export default function LinkHub() {
  return (
    <section id="linkhub" className="relative overflow-hidden">

      {/* ── BACKGROUND ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 72% at 50% 50%, rgba(165,39,70,.22) 0%, rgba(110,14,46,.12) 48%, transparent 68%),
            radial-gradient(ellipse 44% 52% at 50% 50%, rgba(196,136,12,.14) 0%, transparent 50%),
            radial-gradient(ellipse 52% 42% at 2% 100%, rgba(202,78,106,.12) 0%, transparent 52%),
            linear-gradient(135deg, #04060e 0%, #1e0912 38%, #380618 68%, #06091a 100%)
          `,
        }}
      />

      {/* ── BOTTOM HAZE ──────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 'clamp(70px, 12vw, 110px)', background: 'linear-gradient(to bottom, transparent, #04060e)' }}
      />

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <div className="section relative z-20">

        {/* Heading */}
        <div className="mb-3 text-center">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 300,
            letterSpacing: '.08em',
            color: 'rgba(228,212,182,.92)',
            lineHeight: 1.1,
          }}>
            Connect
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(10px, 1.4vw, 12px)',
            letterSpacing: '.36em',
            color: 'rgba(198,175,125,.35)',
            textTransform: 'uppercase',
            marginTop: '10px',
          }}>
            Follow · Commune · Experience
          </p>
        </div>

        {/* Gold rule */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(196,136,12,.35) 30%, rgba(196,136,12,.35) 70%, transparent)',
          marginBottom: '48px',
          marginTop: '20px',
        }} />

        {/* Link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 relative"
              style={{
                padding: '18px 22px',
                background: 'rgba(6,9,26,.42)',
                border: '1px solid rgba(196,136,12,.14)',
                borderRadius: '4px',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                transition: 'background .25s, border-color .25s',
              }}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded"
                style={{
                  background: 'rgba(196,136,12,.06)',
                  transition: 'opacity .25s',
                  borderRadius: '4px',
                }}
              />

              {/* Icon */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.1)',
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </div>

              {/* Label + handle */}
              <div className="relative flex flex-col gap-0.5">
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '.06em',
                  color: 'rgba(228,212,182,.88)',
                }}>
                  {link.label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  letterSpacing: '.22em',
                  color: 'rgba(198,175,125,.40)',
                  textTransform: 'uppercase',
                }}>
                  {link.handle}
                </span>
              </div>

              {/* Arrow */}
              <div className="relative ml-auto">
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  stroke="rgba(196,136,12,.45)" strokeWidth="1.4"
                  style={{ transition: 'stroke .25s' }}
                >
                  <path d="M3 7h8M8 4l3 3-3 3"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
