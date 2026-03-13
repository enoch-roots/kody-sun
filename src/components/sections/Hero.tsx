"use client";

// BG-01 · VOID BASE #04060e · Solar Emergence radial · Sacred Dusk left-edge bloom
//
// Image strategy — 1280×1600 portrait:
//   mobile  → sharp, object-cover object-top, bottom-fade for text legibility
//   desktop → blur-2xl + scale-110 + low opacity, brand gradients take visual control
//
// Layers (back→front):
//   0  background gradients on section
//   1  hero image  (absolute inset-0)
//   2  mobile veil / desktop overlay
//   3  canvas particles
//   4  glow cores + bokeh ambient orbs
//   5  geometry orbit SVG
//   6  lotus base
//  10  bottom haze
//  11  name overlay
//  20  section content

import { useEffect, useRef } from "react";
import Image from "next/image";
// Static import gives Next.js the exact dimensions at build time and auto-generates
// a base64 blurDataURL so the image fades in rather than popping.
import heroImg from "../../../public/images/hero.jpeg";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const section = canvas.parentElement!;

    // Cap DPR at 2 — retina fidelity without the 3x memory/render cost of some phones
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // CSS pixel dimensions — all particle coords live in CSS space; canvas is scaled up by DPR
    let cssW = 0,
      cssH = 0;
    function applySize(w: number, h: number) {
      cssW = w;
      cssH = h;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr); // ctx transform resets on canvas resize, so re-apply each time
    }

    const r0 = section.getBoundingClientRect();
    applySize(r0.width, r0.height);

    let resizeTimer: ReturnType<typeof setTimeout>;
    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const r = section.getBoundingClientRect();
        applySize(r.width, r.height);
      }, 250);
    }
    window.addEventListener("resize", resize);

    /* Depth layers — far → near shifts near-white to warm champagne.
       Size range widens dramatically toward near: tiny specks → large soft bokeh orbs.
       blur multiplier drives the two-ring halo radii (replaces shadowBlur). */
    const LAYERS = [
      {
        n: 70,
        rMin: 0.12,
        rRange: 0.55,
        vyMin: 0.018,
        vyRange: 0.055,
        alpha: 0.2,
        blur: 3.5,
        wobAmp: 0.09,
        wsScale: 0.012,
        fill: "255,250,235",
        glow: "245,232,172",
      }, // far  — tiny whisps
      {
        n: 50,
        rMin: 0.45,
        rRange: 1.4,
        vyMin: 0.055,
        vyRange: 0.09,
        alpha: 0.3,
        blur: 4.0,
        wobAmp: 0.21,
        wsScale: 0.016,
        fill: "255,245,215",
        glow: "242,220,148",
      }, // mid  — mixed sizes
      {
        n: 30,
        rMin: 1.25,
        rRange: 4.5,
        vyMin: 0.095,
        vyRange: 0.13,
        alpha: 0.22,
        blur: 3.0,
        wobAmp: 0.36,
        wsScale: 0.02,
        fill: "255,238,192",
        glow: "238,208,118",
      }, // near — large bokeh orbs
    ];

    type Layer = (typeof LAYERS)[0];
    type Particle = {
      x: number;
      y: number;
      r: number;
      vy: number;
      vx: number;
      life: number;
      max: number;
      alpha: number;
      wobAmp: number;
      wobble: number;
      ws: number;
      // Pre-baked strings — allocated once at birth, never again in the hot loop
      fillStyle: string;
      glowStyle: string;
      // Pre-baked halo radii — two soft rings simulate the gaussian glow shadowBlur produced
      haloR1: number;
      haloR2: number;
      cfg: Layer;
      layer: number;
    };

    function mkP(cfg: Layer, layer: number, scatter: boolean): Particle {
      const r = cfg.rMin + Math.random() * cfg.rRange;
      return {
        x: Math.random() * cssW,
        y: scatter
          ? Math.random() * cssH
          : cssH * 0.5 + Math.random() * cssH * 0.6,
        r,
        vy: -(cfg.vyMin + Math.random() * cfg.vyRange),
        vx: (Math.random() - 0.5) * 0.06,
        life: 0,
        max: Math.random() * 800 + 600,
        alpha: cfg.alpha,
        wobAmp: cfg.wobAmp,
        wobble: Math.random() * Math.PI * 2,
        ws: (Math.random() - 0.5) * cfg.wsScale,
        fillStyle: `rgba(${cfg.fill},1)`, // alpha driven via globalAlpha — no per-frame string
        glowStyle: `rgba(${cfg.glow},1)`,
        haloR1: r * cfg.blur * 0.5, // tight inner halo
        haloR2: r * cfg.blur, // wide outer halo
        cfg,
        layer,
      };
    }

    const ps: Particle[] = [];
    LAYERS.forEach((cfg, layer) => {
      for (let i = 0; i < cfg.n; i++) ps.push(mkP(cfg, layer, true));
    });

    let rafId = 0;
    let isVisible = true;

    function tick() {
      ctx!.clearRect(0, 0, cssW, cssH);
      ps.forEach((p, i) => {
        p.wobble += p.ws;
        p.x += p.vx + Math.sin(p.wobble) * p.wobAmp;
        p.y += p.vy;
        p.life++;
        if (p.y < -10 || p.life > p.max) {
          ps[i] = mkP(p.cfg, p.layer, false);
          return;
        }

        const a = Math.sin((p.life / p.max) * Math.PI) * p.alpha;

        // ── Two-ring halo — replaces shadowBlur entirely ───────────────
        // Two concentric filled circles at low globalAlpha approximate
        // the gaussian falloff shadowBlur produced, at a fraction of the cost.
        ctx!.fillStyle = p.glowStyle;
        ctx!.globalAlpha = a * 0.08; // outer ring — wide, very faint
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.haloR2, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.globalAlpha = a * 0.16; // inner ring — tighter, slightly brighter
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.haloR1, 0, Math.PI * 2);
        ctx!.fill();

        // ── Core ───────────────────────────────────────────────────────
        ctx!.fillStyle = p.fillStyle;
        ctx!.globalAlpha = a;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      });
      ctx!.globalAlpha = 1; // always reset after the loop
      if (isVisible) rafId = requestAnimationFrame(tick);
    }

    // IntersectionObserver — pause RAF entirely when hero is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && rafId === 0) {
          rafId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0 },
    );
    observer.observe(section);

    // Kick off initial loop
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse 38% 46% at 50% 52%, rgba(196,136,12,.24) 0%, rgba(96,58,5,.1) 42%, transparent 68%),
          radial-gradient(ellipse 80% 65% at 50% 75%, rgba(14,28,52,.55) 0%, transparent 100%),
          linear-gradient(180deg, #04060e 0%, #07091a 30%, #0a1224 65%, #060a18 100%)
        `,
      }}
    >
      {/* ── HERO IMAGE ─────────────────────────────────────────────
          Mobile:  sharp portrait, anchored top, 90% opacity.
          Desktop: slight blur + scaled 110% to kill blur edges, 55% opacity.
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Kody Sun"
          fill
          priority // LCP image — preload, no lazy
          placeholder="blur" // auto blurDataURL from static import
          quality={85} // sharp on mobile; desktop is blurred anyway
          sizes="100vw" // full-bleed at every breakpoint
          className="object-cover object-top
                     opacity-90
                     md:opacity-[0.55]"
        />
      </div>

      {/* ── MOBILE VEIL ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] md:hidden"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(4,6,14,0)   0%,
              rgba(4,6,14,.08) 30%,
              rgba(4,6,14,.52) 62%,
              #04060e          100%
            ),
            radial-gradient(ellipse 80% 50% at 50% 52%, rgba(196,136,12,.13) 0%, transparent 65%),
            radial-gradient(ellipse 60% 42% at 8% 82%, rgba(110,14,46,.11) 0%, transparent 52%)
          `,
        }}
      />

      {/* ── DESKTOP GRADIENT OVERLAY ───────────────────────────── */}
      <div
        className="hidden md:block absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 62% 58% at 50% 54%, rgba(196,136,12,.2) 0%, rgba(88,52,4,.08) 46%, transparent 70%),
            radial-gradient(ellipse 68% 52% at 6% 82%, rgba(110,14,46,.15) 0%, transparent 52%),
            radial-gradient(ellipse 90% 68% at 50% 80%, rgba(14,28,52,.34) 0%, transparent 100%),
            linear-gradient(180deg, rgba(4,6,14,.72) 0%, rgba(6,9,26,.82) 38%, rgba(10,18,36,.88) 68%, rgba(6,10,24,.94) 100%)
          `,
        }}
      />

      {/* ── CANVAS PARTICLES ───────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
      />

      {/* ── AMBIENT BOKEH ──────────────────────────────────────── */}
      <div
        className="absolute rounded-full pointer-events-none z-[3]"
        style={{
          width: "220px",
          height: "220px",
          background:
            "radial-gradient(circle,rgba(196,112,10,.08),transparent)",
          top: "15%",
          left: "18%",
          filter: "blur(28px)",
          animation: "corePulse 6s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none z-[3]"
        style={{
          width: "160px",
          height: "160px",
          background: "radial-gradient(circle,rgba(165,39,70,.07),transparent)",
          bottom: "22%",
          right: "14%",
          filter: "blur(28px)",
          animation: "corePulse 8.5s ease-in-out 1.8s infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none z-[3]"
        style={{
          width: "90px",
          height: "90px",
          background:
            "radial-gradient(circle,rgba(245,202,40,.18),transparent)",
          top: "38%",
          left: "38%",
          filter: "blur(28px)",
          animation: "corePulse 4.2s ease-in-out .8s infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none z-[3]"
        style={{
          width: "60px",
          height: "60px",
          background: "radial-gradient(circle,rgba(165,39,70,.14),transparent)",
          top: "28%",
          right: "28%",
          filter: "blur(28px)",
          animation: "corePulse 5.5s ease-in-out 3s infinite",
          willChange: "transform",
        }}
      />

      {/* ── LOTUS BASE ─────────────────────────────────────────────
          Sacred Dusk rose tint at the base — blooms rise from below.
      ───────────────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5] flex items-end justify-center overflow-hidden"
        style={{
          height: "110px",
          gap: "18px",
          background:
            "linear-gradient(to top, rgba(88,18,36,.14) 0%, transparent 100%)",
        }}
      >
        <svg
          width="52"
          height="44"
          viewBox="0 0 52 44"
          style={{
            opacity: 0.42,
            filter: "drop-shadow(0 0 7px rgba(165,39,70,.4))",
          }}
        >
          <path
            d="M26 44 Q17 27 13 13 Q26 22 26 8 Q26 22 39 13 Q35 27 26 44Z"
            fill="rgba(148,36,64,.42)"
            stroke="rgba(192,72,96,.28)"
            strokeWidth=".5"
          />
          <path d="M26 44 Q8 30 4 16 Q20 24 26 8" fill="rgba(118,28,52,.32)" />
          <path
            d="M26 44 Q44 30 48 16 Q32 24 26 8"
            fill="rgba(118,28,52,.32)"
          />
        </svg>
        <svg
          width="74"
          height="60"
          viewBox="0 0 74 60"
          style={{
            opacity: 0.52,
            filter: "drop-shadow(0 0 10px rgba(165,39,70,.48))",
          }}
        >
          <path
            d="M37 60 Q26 40 20 22 Q37 31 37 12 Q37 31 54 22 Q48 40 37 60Z"
            fill="rgba(165,39,70,.52)"
            stroke="rgba(202,78,106,.32)"
            strokeWidth=".5"
          />
          <path
            d="M37 60 Q13 44 5 26 Q26 34 37 12"
            fill="rgba(130,30,58,.38)"
          />
          <path
            d="M37 60 Q61 44 69 26 Q48 34 37 12"
            fill="rgba(130,30,58,.38)"
          />
        </svg>
        <svg
          width="48"
          height="40"
          viewBox="0 0 48 40"
          style={{
            opacity: 0.36,
            filter: "drop-shadow(0 0 7px rgba(165,39,70,.3))",
          }}
        >
          <path
            d="M24 40 Q16 24 12 12 Q24 20 24 7 Q24 20 36 12 Q32 24 24 40Z"
            fill="rgba(148,36,64,.4)"
            stroke="rgba(192,72,96,.22)"
            strokeWidth=".5"
          />
        </svg>
      </div>

      {/* ── BOTTOM HAZE → dissolves into next section ──────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: "clamp(70px, 12vw, 110px)",
          background: "linear-gradient(to bottom, transparent, #06091a)",
        }}
      />

      {/* ── NAME OVERLAY ───────────────────────────────────────────
          Cinzel Decorative · gold gradient · textGlow pulse
      ───────────────────────────────────────────────────────────── */}
      {/* Mobile: anchored near bottom. Desktop: true vertical centre. */}
      <div
        className="absolute bottom-40 left-1/2 -translate-x-1/2
                   md:bottom-auto md:top-1/2 md:-translate-y-1/2
                   text-center pointer-events-none z-[11] whitespace-nowrap"
      >
        <div
          style={{
            fontFamily: "var(--font-cinzel-deco), serif",
            fontSize: "clamp(38px, 10vw, 140px)",
            fontWeight: 700,
            letterSpacing: ".18em",
            background:
              "linear-gradient(135deg, #ffe896 0%, #ffd740 45%, #c4880c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "textGlow 3s ease-in-out infinite alternate",
          }}
        >
          KODY SUN
        </div>
        <div
          style={{
            fontSize: "clamp(11px, 2.2vw, 16px)",
            letterSpacing: ".38em",
            color: "rgba(198,175,125,.5)",
            textTransform: "uppercase",
            marginTop: "12px",
            fontFamily: "var(--font-body)",
            lineHeight: "2",
          }}
        >
          Sacred Sound · Warrior Spirit
          <br />
          Electronic Ritualist
        </div>
      </div>

      {/* ── SCROLL CUE ─────────────────────────────────────────────
          Sacred Rose rotating · chevron below · clicks to #featuredset
      ───────────────────────────────────────────────────────────── */}
      <button
        onClick={() =>
          document
            .getElementById("featuredset")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[12] flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none p-2 group"
        aria-label="Scroll to next section"
      >
        {/* Sacred Rose — slowly rotating */}
        <svg
          width="96"
          height="96"
          viewBox="0 0 60 60"
          fill="none"
          style={{
            animation: "spinCW 18s linear infinite",
            opacity: 0.72,
            willChange: "transform",
          }}
        >
          <path
            d="M30,47 Q23,30 30,12 Q37,30 30,47 Z"
            fill="rgba(165,39,70,.44)"
            stroke="rgba(232,180,24,.44)"
            strokeWidth=".7"
          />
          <path
            d="M30,47 Q23,30 30,12 Q37,30 30,47 Z"
            fill="rgba(165,39,70,.44)"
            stroke="rgba(232,180,24,.44)"
            strokeWidth=".7"
            transform="rotate(60,30,30)"
          />
          <path
            d="M30,47 Q23,30 30,12 Q37,30 30,47 Z"
            fill="rgba(165,39,70,.44)"
            stroke="rgba(232,180,24,.44)"
            strokeWidth=".7"
            transform="rotate(120,30,30)"
          />
          <path
            d="M30,47 Q23,30 30,12 Q37,30 30,47 Z"
            fill="rgba(165,39,70,.44)"
            stroke="rgba(232,180,24,.44)"
            strokeWidth=".7"
            transform="rotate(180,30,30)"
          />
          <path
            d="M30,47 Q23,30 30,12 Q37,30 30,47 Z"
            fill="rgba(165,39,70,.44)"
            stroke="rgba(232,180,24,.44)"
            strokeWidth=".7"
            transform="rotate(240,30,30)"
          />
          <path
            d="M30,47 Q23,30 30,12 Q37,30 30,47 Z"
            fill="rgba(165,39,70,.44)"
            stroke="rgba(232,180,24,.44)"
            strokeWidth=".7"
            transform="rotate(300,30,30)"
          />
          <circle
            cx="30"
            cy="30"
            r="26"
            stroke="rgba(196,136,12,.16)"
            strokeWidth=".6"
          />
          <circle cx="30" cy="30" r="2.8" fill="rgba(232,180,24,.78)" />
        </svg>
        {/* Chevron */}
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          style={{ opacity: 0.55 }}
          className="group-hover:opacity-90 transition-opacity duration-300"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="rgba(232,180,24,.9)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* ── SECTION CONTENT (future CTAs, scroll cue, etc.) ────── */}
      <div className="section relative z-20" />
    </section>
  );
}
