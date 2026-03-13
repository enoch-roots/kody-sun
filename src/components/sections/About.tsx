// BG-05 · VOID-ROSE BASE #1a0910 · Sacred Dusk full center bloom · Stage Light gold behind bio

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">

      {/* ── BACKGROUND ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 78% 88% at 50% 52%, rgba(165,39,70,.18) 0%, rgba(110,14,46,.09) 55%, transparent 72%),
            radial-gradient(ellipse 42% 52% at 50% 52%, rgba(245,202,40,.07) 0%, transparent 46%),
            radial-gradient(ellipse 52% 42% at 90% 12%, rgba(56,6,24,.24) 0%, transparent 55%),
            linear-gradient(135deg, #04060e 0%, #1a0910 38%, #0a1224 100%)
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Portrait ───────────────────────────────────── */}
          <div className="relative">
            {/* Glow behind image */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-20px',
                background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(165,39,70,.18) 0%, transparent 70%)',
              }}
            />

            {/* Image frame */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '4px',
                border: '1px solid rgba(196,136,12,.14)',
                boxShadow: '0 12px 60px rgba(0,0,0,.5)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/artist3.jpeg"
                alt="Kody Sun"
                className="w-full object-cover object-center"
                style={{ aspectRatio: '3 / 4', filter: 'brightness(.88) saturate(.9)' }}
                loading="lazy"
              />

              {/* Subtle dark vignette overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(6,9,26,.10) 0%, transparent 35%, transparent 65%, rgba(6,9,26,.40) 100%)',
                }}
              />
            </div>

            {/* Corner accent — top left */}
            <div className="absolute top-0 left-0 pointer-events-none" style={{ width: 24, height: 24 }}>
              <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 1, background: 'rgba(196,136,12,.5)' }}/>
              <div style={{ position: 'absolute', top: -1, left: -1, width: 1, height: 14, background: 'rgba(196,136,12,.5)' }}/>
            </div>
            {/* Corner accent — bottom right */}
            <div className="absolute bottom-0 right-0 pointer-events-none" style={{ width: 24, height: 24 }}>
              <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 1, background: 'rgba(196,136,12,.5)' }}/>
              <div style={{ position: 'absolute', bottom: -1, right: -1, width: 1, height: 14, background: 'rgba(196,136,12,.5)' }}/>
            </div>
          </div>

          {/* ── RIGHT: Bio ───────────────────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div style={{ height: '1px', width: '28px', background: 'linear-gradient(90deg, rgba(196,136,12,.5), transparent)' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '9px',
                letterSpacing: '.45em',
                color: 'rgba(196,136,12,.55)',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                The Artist
              </span>
            </div>

            {/* Name */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-cinzel-deco, var(--font-display))',
                fontSize: 'clamp(28px, 4.5vw, 44px)',
                fontWeight: 700,
                letterSpacing: '.12em',
                color: 'rgba(228,212,182,.95)',
                lineHeight: 1.15,
              }}>
                Kody Sun
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(10px, 1.4vw, 12px)',
                letterSpacing: '.32em',
                color: 'rgba(198,175,125,.38)',
                textTransform: 'uppercase',
                marginTop: '10px',
              }}>
                Integrated Architect · Founder, SoulBloom®
              </p>
            </div>

            {/* Gold rule */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(196,136,12,.35), transparent)' }} />

            {/* Bio text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: 300,
                lineHeight: 1.75,
                letterSpacing: '.02em',
                color: 'rgba(228,212,182,.80)',
              }}>
                Kody Sun is an Integrated Architect, bridging the worlds of holistic wellness,
                community building, and electronic music. As the founder and visionary behind{' '}
                <a href="https://www.soulbloom.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(232,180,24,.75)', fontStyle: 'italic', textDecoration: 'none', borderBottom: '1px solid rgba(232,180,24,.3)' }}>SoulBloom®</a>,
                his north star is helping others find their Inner Bloom.
              </p>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: 300,
                lineHeight: 1.75,
                letterSpacing: '.02em',
                color: 'rgba(228,212,182,.65)',
              }}>
                A certified breathwork facilitator and dynamic DJ, Kody crafts immersive,
                multi-dimensional sound journeys. Whether leading a room in collective breath
                or steering the energy of the dancefloor, Kody weaves spaces where movement
                and mindfulness become one.
              </p>
            </div>

            {/* Credential tags */}
            <div className="flex flex-wrap gap-3">
              {['Breathwork Facilitator', 'DJ · Producer', 'Community Builder'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '9px',
                    letterSpacing: '.3em',
                    color: 'rgba(198,175,125,.45)',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    border: '1px solid rgba(196,136,12,.16)',
                    borderRadius: '2px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
