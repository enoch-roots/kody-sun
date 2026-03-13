// Live Sessions — YouTube thumbnail facade (no iframe, links out)
// Video: Live Set (Snake Island, ATX) | SoulBloom | September 2025
// https://www.youtube.com/watch?v=O7fsfLsIrG4

export default function MusicMixes() {
  const VIDEO_ID = 'O7fsfLsIrG4';
  const YOUTUBE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
  const THUMB_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section id="livesessions" className="relative overflow-hidden">

      {/* ── BACKGROUND ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 48% 72% at 0% 50%, rgba(110,14,46,.14) 0%, transparent 58%),
            radial-gradient(ellipse 40% 50% at 100% 100%, rgba(56,6,24,.1) 0%, transparent 50%),
            linear-gradient(135deg, #06091a 0%, #0a1224 44%, #112638 80%, #091c2c 100%)
          `,
        }}
      />

      {/* ── BOTTOM HAZE ──────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 'clamp(70px, 12vw, 110px)', background: 'linear-gradient(to bottom, transparent, #130613)' }}
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
            Live Sessions
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(11px, 1.6vw, 14px)',
            letterSpacing: '.3em',
            color: 'rgba(198,175,125,.38)',
            textTransform: 'uppercase',
            marginTop: '10px',
          }}>
            Live Performances · Events · Rituals
          </p>
        </div>

        {/* Gold rule */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(196,136,12,.35), rgba(196,136,12,.08) 60%, transparent)', marginBottom: '36px' }} />

        {/* YouTube thumbnail card */}
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full overflow-hidden"
          style={{
            borderRadius: '6px',
            boxShadow: '0 8px 48px rgba(0,0,0,.55), 0 0 80px rgba(14,28,52,.5)',
            textDecoration: 'none',
            aspectRatio: '16 / 9',
          }}
        >
          {/* Thumbnail image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={THUMB_URL}
            alt="Live Set — Snake Island, ATX | SoulBloom | September 2025"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transition: 'transform .6s ease', }}
          />

          {/* Dark overlay — base */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(6,9,26,.82) 0%, rgba(6,9,26,.18) 50%, rgba(6,9,26,.06) 100%)' }}
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: 'rgba(6,9,26,.22)',
              transition: 'opacity .3s ease',
            }}
          />

          {/* Gold border */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: '6px',
              border: '1px solid rgba(196,136,12,.22)',
              transition: 'border-color .3s ease',
            }}
          />

          {/* Play button — centered */}
          <div
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="group-hover:scale-110"
              style={{
                width: 'clamp(56px, 8vw, 80px)',
                height: 'clamp(56px, 8vw, 80px)',
                borderRadius: '50%',
                border: '1.5px solid rgba(232,180,24,.65)',
                background: 'rgba(6,9,26,.62)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(6px)',
                transition: 'transform .3s ease, background .3s ease, border-color .3s ease',
                boxShadow: '0 0 32px rgba(196,136,12,.18)',
              }}
            >
              {/* Triangle play icon — offset slightly right to optically center */}
              <svg
                viewBox="0 0 24 24"
                fill="rgba(232,180,24,.88)"
                style={{ width: '36%', height: '36%', marginLeft: '8%' }}
              >
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
            </div>
          </div>

          {/* Duration pill — top right */}
          <div
            className="absolute top-0 right-0 px-4 py-4"
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '3px 10px',
              background: 'rgba(6,9,26,.62)',
              border: '1px solid rgba(196,136,12,.22)',
              borderRadius: '2px',
              backdropFilter: 'blur(6px)',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '.22em',
                color: 'rgba(198,175,125,.65)',
              }}>
                50 MIN
              </span>
            </div>
          </div>

          {/* Bottom-left metadata */}
          <div className="absolute bottom-0 left-0 px-5 py-5">
            {/* Event label */}
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(9px, 1.2vw, 11px)',
              letterSpacing: '.38em',
              color: 'rgba(232,180,24,.65)',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}>
              SoulBloom · September 2025
            </div>

            {/* Title */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(16px, 2.8vw, 26px)',
              fontWeight: 300,
              letterSpacing: '.06em',
              color: 'rgba(228,212,182,.95)',
              lineHeight: 1.2,
            }}>
              Live Set — Snake Island, ATX
            </div>
          </div>

        </a>

      </div>
    </section>
  );
}
