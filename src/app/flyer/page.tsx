// Hidden flyer page — not linked from main nav
// Visit /flyer to preview · print via browser print dialog (Cmd/Ctrl+P)

import type { Metadata } from 'next';
import Image from 'next/image';
import qrImage from '../../../public/images/qr-kodysun.png';

export const metadata: Metadata = {
  title: 'Kody Sun | Flyer',
  robots: { index: false, follow: false }, // keep out of search engines
};

// ─── Geometric tokens (inline SVG) ────────────────────────────────────────────

function PentaRose({ size = 52, op = 0.55 }: { size?: number; op?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity: op }}>
      <path d="M30,52 Q18,30 30,8 Q42,30 30,52Z" fill="rgba(196,136,12,.22)" stroke="rgba(232,180,24,.55)" strokeWidth=".7"/>
      <path d="M30,52 Q18,30 30,8 Q42,30 30,52Z" fill="rgba(196,136,12,.22)" stroke="rgba(232,180,24,.55)" strokeWidth=".7" transform="rotate(72,30,30)"/>
      <path d="M30,52 Q18,30 30,8 Q42,30 30,52Z" fill="rgba(196,136,12,.22)" stroke="rgba(232,180,24,.55)" strokeWidth=".7" transform="rotate(144,30,30)"/>
      <path d="M30,52 Q18,30 30,8 Q42,30 30,52Z" fill="rgba(196,136,12,.22)" stroke="rgba(232,180,24,.55)" strokeWidth=".7" transform="rotate(216,30,30)"/>
      <path d="M30,52 Q18,30 30,8 Q42,30 30,52Z" fill="rgba(196,136,12,.22)" stroke="rgba(232,180,24,.55)" strokeWidth=".7" transform="rotate(288,30,30)"/>
      <circle cx="30" cy="30" r="26" stroke="rgba(196,136,12,.18)" strokeWidth=".6"/>
      <circle cx="30" cy="30" r="3" fill="rgba(232,180,24,.6)"/>
    </svg>
  );
}

function StarBurst({ size = 44, op = 0.5 }: { size?: number; op?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity: op }}>
      {[0,30,60,90,120,150].map(a => (
        <path key={a} d={`M30,52 Q27,30 30,8 Q33,30 30,52Z`} fill="rgba(196,136,12,.2)" stroke="rgba(232,180,24,.5)" strokeWidth=".6" transform={`rotate(${a},30,30)`}/>
      ))}
      <circle cx="30" cy="30" r="4" fill="rgba(232,180,24,.65)"/>
    </svg>
  );
}

function TripleLotus({ size = 48, op = 0.5 }: { size?: number; op?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity: op }}>
      <path d="M30,50 Q20,30 30,10 Q40,30 30,50Z" fill="rgba(165,39,70,.25)" stroke="rgba(196,136,12,.5)" strokeWidth=".7"/>
      <path d="M30,50 Q20,30 30,10 Q40,30 30,50Z" fill="rgba(165,39,70,.25)" stroke="rgba(196,136,12,.5)" strokeWidth=".7" transform="rotate(120,30,30)"/>
      <path d="M30,50 Q20,30 30,10 Q40,30 30,50Z" fill="rgba(165,39,70,.25)" stroke="rgba(196,136,12,.5)" strokeWidth=".7" transform="rotate(240,30,30)"/>
      <circle cx="30" cy="30" r="3.5" fill="rgba(232,180,24,.7)"/>
    </svg>
  );
}

function MandalaLotus({ size = 56, op = 0.45 }: { size?: number; op?: number }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity: op }}>
      {petals.map(a => (
        <path key={a} d={`M30,50 Q24,30 30,10 Q36,30 30,50Z`} fill="rgba(196,136,12,.14)" stroke="rgba(232,180,24,.4)" strokeWidth=".55" transform={`rotate(${a},30,30)`}/>
      ))}
      <circle cx="30" cy="30" r="22" stroke="rgba(196,136,12,.2)" strokeWidth=".6" fill="none"/>
      <circle cx="30" cy="30" r="12" stroke="rgba(196,136,12,.25)" strokeWidth=".6" fill="none"/>
      <circle cx="30" cy="30" r="4" fill="rgba(232,180,24,.65)"/>
    </svg>
  );
}

function CrystalPetal({ size = 40, op = 0.5 }: { size?: number; op?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity: op }}>
      <path d="M30,52 L10,30 L30,8 L50,30Z" fill="rgba(110,165,225,.12)" stroke="rgba(196,136,12,.5)" strokeWidth=".7"/>
      <path d="M30,52 L10,30 L30,8 L50,30Z" fill="none" stroke="rgba(232,180,24,.3)" strokeWidth=".5" transform="rotate(45,30,30)"/>
      <circle cx="30" cy="30" r="3" fill="rgba(232,180,24,.6)"/>
    </svg>
  );
}

// ─── Orbit ring (Contact-style) ───────────────────────────────────────────────

function OrbitRing({ size = 180, op = 0.22 }: { size?: number; op?: number }) {
  return (
    <svg width={size} height={size} viewBox="-22 -22 124 124" fill="none" overflow="visible" style={{ opacity: op, display: 'block' }}>
      <g style={{ transformOrigin: '40px 40px', animation: 'spinCW 80s linear infinite' }}>
        <circle cx="40" cy="40" r="37" stroke="rgba(218,234,255,.28)" strokeWidth=".8"/>
        {[[-10,40],[75.4,4.6],[90,40],[75.4,75.4],[40,90],[4.6,75.4],[-10,40],[4.6,4.6]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="1.5" fill="rgba(218,234,255,.6)"/>
        ))}
      </g>
      <g style={{ transformOrigin: '40px 40px', animation: 'spinCCW 120s linear infinite' }}>
        <circle cx="40" cy="40" r="24" stroke="rgba(218,234,255,.2)" strokeWidth=".8"/>
        <polygon points="40,16 64,40 40,64 16,40" stroke="rgba(218,234,255,.18)" strokeWidth=".7" fill="none"/>
        <polygon points="23,23 57,23 57,57 23,57" stroke="rgba(218,234,255,.15)" strokeWidth=".7" fill="none"/>
      </g>
      <g style={{ transformOrigin: '40px 40px', animation: 'spinCW 70s linear infinite' }}>
        <circle cx="40" cy="40" r="10" stroke="rgba(218,234,255,.2)" strokeWidth=".7"/>
        <circle cx="40" cy="40" r="1.2" fill="rgba(218,234,255,.65)"/>
      </g>
    </svg>
  );
}

// ─── Divider line with token ───────────────────────────────────────────────────

function TokenDivider({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, width: '100%', margin: '0 auto', maxWidth: 320 }}>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(196,136,12,.35), rgba(196,136,12,.12))' }}/>
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', padding: '0 10px' }}>{children}</div>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(196,136,12,.12), rgba(196,136,12,.35), transparent)' }}/>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FlyerPage() {
  return (
    <>
      {/* Inject animation keyframes — reuse globals but scoped here for print safety */}
      {/* Fonts already self-hosted via next/font/google in RootLayout — no @import needed */}
      <style>{`
        @keyframes spinCW  { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
        @keyframes spinCCW { from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #04060e; }
        @media print {
          body { background: #04060e !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .flyer-wrap { box-shadow: none !important; }
        }
      `}</style>

      {/* Print hint bar — hidden on print */}
      <div className="no-print" style={{
        background: 'rgba(196,136,12,.12)',
        borderBottom: '1px solid rgba(196,136,12,.2)',
        padding: '10px 20px',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        fontSize: '11px',
        letterSpacing: '.15em',
        color: 'rgba(198,175,125,.6)',
        textTransform: 'uppercase',
      }}>
        Hidden page — not linked from nav &nbsp;·&nbsp; Cmd+P / Ctrl+P to print &nbsp;·&nbsp; Set paper to A5 portrait, background graphics on
      </div>

      {/* Page container */}
      <div style={{
        minHeight: '100vh',
        background: '#04060e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}>

        {/* Flyer card — A5 proportion ~148×210mm → 560×794px at 96dpi */}
        <div className="flyer-wrap" style={{
          width: 560,
          minHeight: 794,
          position: 'relative',
          overflow: 'hidden',
          background: `
            radial-gradient(ellipse 70% 55% at 50% 18%, rgba(196,136,12,.13) 0%, rgba(88,54,4,.06) 45%, transparent 68%),
            radial-gradient(ellipse 55% 45% at 50% 80%, rgba(165,39,70,.10) 0%, transparent 55%),
            radial-gradient(ellipse 90% 70% at 8% 85%, rgba(56,6,24,.2) 0%, transparent 52%),
            linear-gradient(180deg, #04060e 0%, #070a1a 35%, #0a1224 65%, #06091a 100%)
          `,
          border: '1px solid rgba(196,136,12,.18)',
          boxShadow: '0 0 80px rgba(0,0,0,.8), 0 0 160px rgba(0,0,0,.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '48px 44px 44px',
          gap: 0,
        }}>

          {/* ── Corner accents ─── */}
          {/* top-left */}
          <div style={{ position: 'absolute', top: 16, left: 16 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: 22, height: 1, background: 'rgba(196,136,12,.55)' }}/>
            <div style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 22, background: 'rgba(196,136,12,.55)' }}/>
          </div>
          {/* top-right */}
          <div style={{ position: 'absolute', top: 16, right: 16 }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 22, height: 1, background: 'rgba(196,136,12,.55)' }}/>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 1, height: 22, background: 'rgba(196,136,12,.55)' }}/>
          </div>
          {/* bottom-left */}
          <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: 22, height: 1, background: 'rgba(196,136,12,.55)' }}/>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: 1, height: 22, background: 'rgba(196,136,12,.55)' }}/>
          </div>
          {/* bottom-right */}
          <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 22, height: 1, background: 'rgba(196,136,12,.55)' }}/>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 1, height: 22, background: 'rgba(196,136,12,.55)' }}/>
          </div>

          {/* ── Orbit ring (background, top centre) ─── */}
          <div style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 0 }}>
            <OrbitRing size={220} op={0.18}/>
          </div>

          {/* ── Top token cluster ─── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginBottom: 28, zIndex: 1 }}>
            <CrystalPetal size={28} op={0.45}/>
            <MandalaLotus size={42} op={0.6}/>
            <CrystalPetal size={28} op={0.45}/>
          </div>

          {/* ── Eyebrow ─── */}
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            letterSpacing: '.52em',
            color: 'rgba(196,136,12,.55)',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: 16,
            textAlign: 'center',
            zIndex: 1,
          }}>
            Sacred Sound · Warrior Spirit
          </div>

          {/* ── Name ─── */}
          <h1 style={{
            fontFamily: '"Cinzel Decorative", serif',
            fontSize: 58,
            fontWeight: 700,
            letterSpacing: '.14em',
            lineHeight: 1,
            marginBottom: 10,
            background: 'linear-gradient(135deg, #ffe896 0%, #ffd740 45%, #c4880c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            zIndex: 1,
          }}>
            KODY SUN
          </h1>

          {/* ── Subtitle ─── */}
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 13,
            letterSpacing: '.35em',
            color: 'rgba(228,212,182,.55)',
            textTransform: 'uppercase',
            fontWeight: 300,
            marginBottom: 28,
            textAlign: 'center',
            zIndex: 1,
          }}>
            Electronic Ritualist
          </div>

          {/* ── Divider with star burst ─── */}
          <div style={{ marginBottom: 32, zIndex: 1, width: '100%' }}>
            <TokenDivider><StarBurst size={22} op={0.65}/></TokenDivider>
          </div>

          {/* ── QR Code ─── */}
          <div style={{
            position: 'relative',
            width: 200,
            height: 200,
            marginBottom: 24,
            zIndex: 1,
            flexShrink: 0,
          }}>
            {/* QR border frame */}
            <div style={{
              width: '100%',
              height: '100%',
              border: '1px solid rgba(196,136,12,.30)',
              background: '#04060e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Corner ticks on QR box */}
              <div style={{ position: 'absolute', top: 8, left: 8, width: 16, height: 1, background: 'rgba(196,136,12,.6)' }}/>
              <div style={{ position: 'absolute', top: 8, left: 8, width: 1, height: 16, background: 'rgba(196,136,12,.6)' }}/>
              <div style={{ position: 'absolute', top: 8, right: 8, width: 16, height: 1, background: 'rgba(196,136,12,.6)' }}/>
              <div style={{ position: 'absolute', top: 8, right: 8, width: 1, height: 16, background: 'rgba(196,136,12,.6)' }}/>
              <div style={{ position: 'absolute', bottom: 8, left: 8, width: 16, height: 1, background: 'rgba(196,136,12,.6)' }}/>
              <div style={{ position: 'absolute', bottom: 8, left: 8, width: 1, height: 16, background: 'rgba(196,136,12,.6)' }}/>
              <div style={{ position: 'absolute', bottom: 8, right: 8, width: 16, height: 1, background: 'rgba(196,136,12,.6)' }}/>
              <div style={{ position: 'absolute', bottom: 8, right: 8, width: 1, height: 16, background: 'rgba(196,136,12,.6)' }}/>
              {/* Actual scannable QR code */}
              <Image
                src={qrImage}
                alt="Scan to visit kodysun.xyz"
                width={180}
                height={180}
                style={{ display: 'block' }}
                priority
              />
            </div>
          </div>

          {/* ── Scan prompt ─── */}
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            letterSpacing: '.42em',
            color: 'rgba(196,136,12,.55)',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: 30,
            textAlign: 'center',
            zIndex: 1,
          }}>
            Scan to Connect
          </div>

          {/* ── Divider with penta rose ─── */}
          <div style={{ marginBottom: 28, zIndex: 1, width: '100%' }}>
            <TokenDivider><PentaRose size={22} op={0.65}/></TokenDivider>
          </div>

          {/* ── Website + handles ─── */}
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 17,
            letterSpacing: '.22em',
            color: 'rgba(228,212,182,.75)',
            fontWeight: 300,
            marginBottom: 10,
            textAlign: 'center',
            zIndex: 1,
          }}>
            kodysun.xyz
          </div>

          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            letterSpacing: '.32em',
            color: 'rgba(198,175,125,.38)',
            textTransform: 'uppercase',
            fontWeight: 400,
            textAlign: 'center',
            zIndex: 1,
            lineHeight: 2.2,
          }}>
            @solsticek &nbsp;·&nbsp; @kodysunbloom
          </div>

          {/* ── Bottom token cluster ─── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 28, zIndex: 1 }}>
            <CrystalPetal size={22} op={0.35}/>
            <StarBurst size={18} op={0.4}/>
            <MandalaLotus size={26} op={0.38}/>
            <StarBurst size={18} op={0.4}/>
            <CrystalPetal size={22} op={0.35}/>
          </div>

          {/* ── Subtle bottom haze ─── */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: 120,
            background: 'linear-gradient(to top, rgba(88,18,36,.10) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}/>

        </div>
      </div>
    </>
  );
}
