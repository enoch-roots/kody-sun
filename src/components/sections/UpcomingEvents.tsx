// BG-03 · DEEP BASE #0a1224 · Lotus Horizon amber top · Sacred Dusk right-edge bleed
export default function UpcomingEvents() {
  return (
    <section id="upcomingevents" className="relative overflow-hidden min-h-[360px]">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 52% at 50% 0%, rgba(196,136,12,.09) 0%, transparent 55%),
            radial-gradient(ellipse 50% 75% at 100% 58%, rgba(110,14,46,.15) 0%, transparent 52%),
            radial-gradient(ellipse 55% 40% at 12% 100%, rgba(88,52,4,.07) 0%, transparent 50%),
            linear-gradient(180deg, #0a1224 0%, #06091a 60%, #07091a 100%)
          `,
        }}
      />
      {/* Bottom haze → dissolves into MusicMixes abyss */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 'clamp(70px, 12vw, 110px)', background: 'linear-gradient(to bottom, transparent, #06091a)' }}
      />
      {/* Content */}
      <div className="section relative z-20">
        <p className="text-brand-gray text-sm">[UpcomingEvents]</p>
      </div>
    </section>
  );
}
