// Breathwork section — facilitation practice & certification
// Using BG-07 background recipe

import Image from 'next/image';
import artist2 from '../../../public/images/artist2.jpeg';

export default function MediaGallery() {
  return (
    <section id="breathwork" className="relative overflow-hidden">

      {/* ── BACKGROUND ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 78% at 50% 50%, transparent 30%, rgba(4,6,14,.66) 80%),
            radial-gradient(ellipse 48% 52% at 6% 88%, rgba(110,14,46,.2) 0%, transparent 52%),
            radial-gradient(ellipse 36% 42% at 94% 12%, rgba(110,14,46,.12) 0%, transparent 48%),
            linear-gradient(180deg, #06091a 0%, #0a1224 100%)
          `,
        }}
      />

      {/* ── BOTTOM HAZE ──────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 'clamp(70px, 12vw, 110px)', background: 'linear-gradient(to bottom, transparent, #1a0510)' }}
      />

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <div className="section relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Bio ────────────────────────────────────────── */}
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
                The Practice
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4.5vw, 44px)',
                fontWeight: 300,
                letterSpacing: '.08em',
                color: 'rgba(228,212,182,.92)',
                lineHeight: 1.15,
              }}>
                Breathwork &amp; Facilitation
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(10px, 1.4vw, 12px)',
                letterSpacing: '.32em',
                color: 'rgba(198,175,125,.38)',
                textTransform: 'uppercase',
                marginTop: '10px',
              }}>
                Certified Facilitator · Conscious Breathwork
              </p>
            </div>

            {/* Gold rule */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(196,136,12,.35), transparent)' }} />

            {/* Bio text — placeholder */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(14px, 1.6vw, 17px)',
                fontWeight: 300,
                lineHeight: 1.85,
                letterSpacing: '.01em',
                color: 'rgba(228,212,182,.80)',
              }}>
                Kody Sun is a certified Breath of Life facilitator. Grounded in the science of nervous system optimization, Kody creates immersive containers for somatic activation and awakening leadership.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(14px, 1.6vw, 17px)',
                fontWeight: 300,
                lineHeight: 1.85,
                letterSpacing: '.01em',
                color: 'rgba(228,212,182,.65)',
              }}>
                His work bridges the physiological and the profound, using evidence-based breathwork and curated soundscapes to help individuals unlock their inner radiance. At the core of his mission is a simple belief: that true transformation begins with a regulated nervous system and ends with a community in full bloom.
              </p>
            </div>

            {/* Credential tags */}
            <div className="flex flex-wrap gap-3">
              {['Certified Facilitator', 'Conscious Breathwork', 'Sound &amp; Breath'].map((tag) => (
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
                    borderRadius: '8px',
                  }}
                  dangerouslySetInnerHTML={{ __html: tag }}
                />
              ))}
            </div>

          </div>

          {/* ── RIGHT: Portrait ──────────────────────────────────── */}
          <div className="relative">
            {/* Glow behind image */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-20px',
                background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(165,39,70,.15) 0%, transparent 70%)',
              }}
            />

            {/* Image frame */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '4px',
                border: '1px solid rgba(196,136,12,.14)',
                boxShadow: '0 12px 60px rgba(0,0,0,.5)',
                aspectRatio: '3 / 4',
              }}
            >
              <Image
                src={artist2}
                alt="Kody Sun — Breathwork Facilitation"
                fill
                className="object-cover object-center"
                style={{ filter: 'brightness(.88) saturate(.9)' }}
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Subtle dark vignette overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(6,9,26,.10) 0%, transparent 35%, transparent 65%, rgba(6,9,26,.40) 100%)',
                }}
              />
            </div>

            {/* Corner accents — bottom left / top right (mirrored from About) */}
            <div className="absolute top-0 right-0 pointer-events-none" style={{ width: 24, height: 24 }}>
              <div style={{ position: 'absolute', top: -1, right: -1, width: 14, height: 1, background: 'rgba(196,136,12,.5)' }}/>
              <div style={{ position: 'absolute', top: -1, right: -1, width: 1, height: 14, background: 'rgba(196,136,12,.5)' }}/>
            </div>
            <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: 24, height: 24 }}>
              <div style={{ position: 'absolute', bottom: -1, left: -1, width: 14, height: 1, background: 'rgba(196,136,12,.5)' }}/>
              <div style={{ position: 'absolute', bottom: -1, left: -1, width: 1, height: 14, background: 'rgba(196,136,12,.5)' }}/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
