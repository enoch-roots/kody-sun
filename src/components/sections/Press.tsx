// BG-06 · VOID BASE #04060e · Sacred Dusk phantom left + right edges · Midnight Shift structural
export default function Press() {
  return (
    <section id="press" className="relative overflow-hidden min-h-[360px]">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 62% at 8% 50%, rgba(56,6,24,.14) 0%, transparent 55%),
            radial-gradient(ellipse 35% 45% at 95% 80%, rgba(56,6,24,.09) 0%, transparent 50%),
            linear-gradient(135deg, #04060e 0%, #06091a 42%, #0a1224 100%)
          `,
        }}
      />
      {/* Bottom haze → dissolves into MediaGallery abyss */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 'clamp(70px, 12vw, 110px)', background: 'linear-gradient(to bottom, transparent, #06091a)' }}
      />
      {/* Content */}
      <div className="section relative z-20">
        <p className="text-brand-gray text-sm">[Press]</p>
      </div>
    </section>
  );
}
