// Reusable section divider — geometric token centered with symmetric fine lines
import type { FC } from 'react';

type DividerToken = 'penta-rose' | 'cross-bloom' | 'sacred-rose' | 'triple-lotus' | 'crystal-petal' | 'mandala-lotus' | 'veil-lotus' | 'water-lily' | 'star-burst';

interface SectionDividerProps {
  token?: DividerToken;
  opacity?: number;
}

function PentaRose() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
      <path d="M30,46 Q21.5,30 30,13 Q38.5,30 30,46 Z" fill="rgba(165,39,70,.38)" stroke="rgba(202,78,106,.48)" strokeWidth=".7"/>
      <path d="M30,46 Q21.5,30 30,13 Q38.5,30 30,46 Z" fill="rgba(165,39,70,.38)" stroke="rgba(202,78,106,.48)" strokeWidth=".7" transform="rotate(72,30,30)"/>
      <path d="M30,46 Q21.5,30 30,13 Q38.5,30 30,46 Z" fill="rgba(165,39,70,.38)" stroke="rgba(202,78,106,.48)" strokeWidth=".7" transform="rotate(144,30,30)"/>
      <path d="M30,46 Q21.5,30 30,13 Q38.5,30 30,46 Z" fill="rgba(165,39,70,.38)" stroke="rgba(202,78,106,.48)" strokeWidth=".7" transform="rotate(216,30,30)"/>
      <path d="M30,46 Q21.5,30 30,13 Q38.5,30 30,46 Z" fill="rgba(165,39,70,.38)" stroke="rgba(202,78,106,.48)" strokeWidth=".7" transform="rotate(288,30,30)"/>
      <circle cx="30" cy="30" r="2.4" fill="rgba(202,78,106,.62)"/>
    </svg>
  );
}

function CrossBloom() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.12)" stroke="rgba(196,136,12,.40)" strokeWidth=".72"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.12)" stroke="rgba(196,136,12,.40)" strokeWidth=".72" transform="rotate(90,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.12)" stroke="rgba(196,136,12,.40)" strokeWidth=".72" transform="rotate(180,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.12)" stroke="rgba(196,136,12,.40)" strokeWidth=".72" transform="rotate(270,30,30)"/>
      <circle cx="30" cy="30" r="2.2" fill="none" stroke="rgba(196,136,12,.38)" strokeWidth=".72"/>
    </svg>
  );
}

function SacredRose() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.44)" stroke="rgba(232,180,24,.44)" strokeWidth=".7"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.44)" stroke="rgba(232,180,24,.44)" strokeWidth=".7" transform="rotate(60,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.44)" stroke="rgba(232,180,24,.44)" strokeWidth=".7" transform="rotate(120,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.44)" stroke="rgba(232,180,24,.44)" strokeWidth=".7" transform="rotate(180,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.44)" stroke="rgba(232,180,24,.44)" strokeWidth=".7" transform="rotate(240,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.44)" stroke="rgba(232,180,24,.44)" strokeWidth=".7" transform="rotate(300,30,30)"/>
      <circle cx="30" cy="30" r="26" stroke="rgba(196,136,12,.14)" strokeWidth=".6"/>
      <circle cx="30" cy="30" r="2.8" fill="rgba(232,180,24,.72)"/>
    </svg>
  );
}

function TripleLotus() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.52)" stroke="rgba(202,78,106,.55)" strokeWidth=".62"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.52)" stroke="rgba(202,78,106,.55)" strokeWidth=".62" transform="rotate(120,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.52)" stroke="rgba(202,78,106,.55)" strokeWidth=".62" transform="rotate(240,30,30)"/>
      <circle cx="30" cy="30" r="2.5" fill="rgba(222,120,150,.78)"/>
    </svg>
  );
}

function CrystalPetal() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
      <path d="M30,47 L24,30 30,11 36,30 Z" fill="rgba(135,175,230,.13)" stroke="rgba(175,210,252,.54)" strokeWidth=".65"/>
      <path d="M30,47 L24,30 30,11 36,30 Z" fill="rgba(135,175,230,.13)" stroke="rgba(175,210,252,.54)" strokeWidth=".65" transform="rotate(60,30,30)"/>
      <path d="M30,47 L24,30 30,11 36,30 Z" fill="rgba(135,175,230,.13)" stroke="rgba(175,210,252,.54)" strokeWidth=".65" transform="rotate(120,30,30)"/>
      <path d="M30,47 L24,30 30,11 36,30 Z" fill="rgba(135,175,230,.13)" stroke="rgba(175,210,252,.54)" strokeWidth=".65" transform="rotate(180,30,30)"/>
      <path d="M30,47 L24,30 30,11 36,30 Z" fill="rgba(135,175,230,.13)" stroke="rgba(175,210,252,.54)" strokeWidth=".65" transform="rotate(240,30,30)"/>
      <path d="M30,47 L24,30 30,11 36,30 Z" fill="rgba(135,175,230,.13)" stroke="rgba(175,210,252,.54)" strokeWidth=".65" transform="rotate(300,30,30)"/>
      <polygon points="30,24 35.2,27 35.2,33 30,36 24.8,33 24.8,27" fill="none" stroke="rgba(175,210,252,.22)" strokeWidth=".55"/>
      <circle cx="30" cy="30" r="2" fill="rgba(175,210,252,.6)"/>
    </svg>
  );
}

function StarBurst() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
      <path d="M30,49 Q28.2,30 30,8 Q31.8,30 30,49 Z" fill="rgba(135,175,230,.18)" stroke="rgba(175,210,252,.58)" strokeWidth=".62"/>
      <path d="M30,49 Q28.2,30 30,8 Q31.8,30 30,49 Z" fill="rgba(135,175,230,.18)" stroke="rgba(175,210,252,.58)" strokeWidth=".62" transform="rotate(45,30,30)"/>
      <path d="M30,49 Q28.2,30 30,8 Q31.8,30 30,49 Z" fill="rgba(135,175,230,.18)" stroke="rgba(175,210,252,.58)" strokeWidth=".62" transform="rotate(90,30,30)"/>
      <path d="M30,49 Q28.2,30 30,8 Q31.8,30 30,49 Z" fill="rgba(135,175,230,.18)" stroke="rgba(175,210,252,.58)" strokeWidth=".62" transform="rotate(135,30,30)"/>
      <path d="M30,49 Q28.2,30 30,8 Q31.8,30 30,49 Z" fill="rgba(135,175,230,.18)" stroke="rgba(175,210,252,.58)" strokeWidth=".62" transform="rotate(180,30,30)"/>
      <path d="M30,49 Q28.2,30 30,8 Q31.8,30 30,49 Z" fill="rgba(135,175,230,.18)" stroke="rgba(175,210,252,.58)" strokeWidth=".62" transform="rotate(225,30,30)"/>
      <path d="M30,49 Q28.2,30 30,8 Q31.8,30 30,49 Z" fill="rgba(135,175,230,.18)" stroke="rgba(175,210,252,.58)" strokeWidth=".62" transform="rotate(270,30,30)"/>
      <path d="M30,49 Q28.2,30 30,8 Q31.8,30 30,49 Z" fill="rgba(135,175,230,.18)" stroke="rgba(175,210,252,.58)" strokeWidth=".62" transform="rotate(315,30,30)"/>
      <circle cx="30" cy="30" r="2.2" fill="rgba(175,210,252,.65)"/>
    </svg>
  );
}

function WaterLily() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
      <path d="M30,40 Q17,30 30,20 Q43,30 30,40 Z" fill="rgba(222,120,150,.35)" stroke="rgba(240,170,192,.48)" strokeWidth=".65"/>
      <path d="M30,40 Q17,30 30,20 Q43,30 30,40 Z" fill="rgba(222,120,150,.35)" stroke="rgba(240,170,192,.48)" strokeWidth=".65" transform="rotate(60,30,30)"/>
      <path d="M30,40 Q17,30 30,20 Q43,30 30,40 Z" fill="rgba(222,120,150,.35)" stroke="rgba(240,170,192,.48)" strokeWidth=".65" transform="rotate(120,30,30)"/>
      <path d="M30,40 Q17,30 30,20 Q43,30 30,40 Z" fill="rgba(222,120,150,.35)" stroke="rgba(240,170,192,.48)" strokeWidth=".65" transform="rotate(180,30,30)"/>
      <path d="M30,40 Q17,30 30,20 Q43,30 30,40 Z" fill="rgba(222,120,150,.35)" stroke="rgba(240,170,192,.48)" strokeWidth=".65" transform="rotate(240,30,30)"/>
      <path d="M30,40 Q17,30 30,20 Q43,30 30,40 Z" fill="rgba(222,120,150,.35)" stroke="rgba(240,170,192,.48)" strokeWidth=".65" transform="rotate(300,30,30)"/>
      <circle cx="30" cy="30" r="2.6" fill="rgba(245,180,200,.65)"/>
    </svg>
  );
}

function VeilLotus() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
      {/* 6 outer petals */}
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.36)" stroke="rgba(202,78,106,.36)" strokeWidth=".55"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.36)" stroke="rgba(202,78,106,.36)" strokeWidth=".55" transform="rotate(60,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.36)" stroke="rgba(202,78,106,.36)" strokeWidth=".55" transform="rotate(120,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.36)" stroke="rgba(202,78,106,.36)" strokeWidth=".55" transform="rotate(180,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.36)" stroke="rgba(202,78,106,.36)" strokeWidth=".55" transform="rotate(240,30,30)"/>
      <path d="M30,47 Q23,30 30,12 Q37,30 30,47 Z" fill="rgba(165,39,70,.36)" stroke="rgba(202,78,106,.36)" strokeWidth=".55" transform="rotate(300,30,30)"/>
      {/* 6 inner petals offset 30° */}
      <path d="M30,41 Q26,30 30,19 Q34,30 30,41 Z" fill="rgba(118,28,52,.5)" stroke="rgba(165,39,70,.32)" strokeWidth=".5" transform="rotate(30,30,30)"/>
      <path d="M30,41 Q26,30 30,19 Q34,30 30,41 Z" fill="rgba(118,28,52,.5)" stroke="rgba(165,39,70,.32)" strokeWidth=".5" transform="rotate(90,30,30)"/>
      <path d="M30,41 Q26,30 30,19 Q34,30 30,41 Z" fill="rgba(118,28,52,.5)" stroke="rgba(165,39,70,.32)" strokeWidth=".5" transform="rotate(150,30,30)"/>
      <path d="M30,41 Q26,30 30,19 Q34,30 30,41 Z" fill="rgba(118,28,52,.5)" stroke="rgba(165,39,70,.32)" strokeWidth=".5" transform="rotate(210,30,30)"/>
      <path d="M30,41 Q26,30 30,19 Q34,30 30,41 Z" fill="rgba(118,28,52,.5)" stroke="rgba(165,39,70,.32)" strokeWidth=".5" transform="rotate(270,30,30)"/>
      <path d="M30,41 Q26,30 30,19 Q34,30 30,41 Z" fill="rgba(118,28,52,.5)" stroke="rgba(165,39,70,.32)" strokeWidth=".5" transform="rotate(330,30,30)"/>
      <circle cx="30" cy="30" r="2.2" fill="rgba(202,78,106,.62)"/>
    </svg>
  );
}

function MandalaLotus() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
      <path d="M30,40 Q26.5,30 30,20 Q33.5,30 30,40 Z" fill="rgba(118,28,52,.52)" stroke="rgba(165,39,70,.38)" strokeWidth=".5"/>
      <path d="M30,40 Q26.5,30 30,20 Q33.5,30 30,40 Z" fill="rgba(118,28,52,.52)" stroke="rgba(165,39,70,.38)" strokeWidth=".5" transform="rotate(60,30,30)"/>
      <path d="M30,40 Q26.5,30 30,20 Q33.5,30 30,40 Z" fill="rgba(118,28,52,.52)" stroke="rgba(165,39,70,.38)" strokeWidth=".5" transform="rotate(120,30,30)"/>
      <path d="M30,40 Q26.5,30 30,20 Q33.5,30 30,40 Z" fill="rgba(118,28,52,.52)" stroke="rgba(165,39,70,.38)" strokeWidth=".5" transform="rotate(180,30,30)"/>
      <path d="M30,40 Q26.5,30 30,20 Q33.5,30 30,40 Z" fill="rgba(118,28,52,.52)" stroke="rgba(165,39,70,.38)" strokeWidth=".5" transform="rotate(240,30,30)"/>
      <path d="M30,40 Q26.5,30 30,20 Q33.5,30 30,40 Z" fill="rgba(118,28,52,.52)" stroke="rgba(165,39,70,.38)" strokeWidth=".5" transform="rotate(300,30,30)"/>
      <circle cx="30" cy="30" r="27" stroke="rgba(202,78,106,.16)" strokeWidth=".55"/>
      <circle cx="30" cy="30" r="9"  stroke="rgba(202,78,106,.22)" strokeWidth=".5"/>
      <circle cx="30" cy="30" r="2.8" fill="rgba(232,180,24,.78)"/>
    </svg>
  );
}

const TOKENS: Record<DividerToken, FC> = {
  'penta-rose':   PentaRose,
  'cross-bloom':  CrossBloom,
  'sacred-rose':  SacredRose,
  'triple-lotus': TripleLotus,
  'crystal-petal': CrystalPetal,
  'mandala-lotus': MandalaLotus,
  'veil-lotus': VeilLotus,
  'water-lily': WaterLily,
  'star-burst':  StarBurst,
};

export default function SectionDivider({ token = 'penta-rose', opacity = 1 }: SectionDividerProps) {
  const Token = TOKENS[token];

  return (
    <div
      className="relative flex items-center w-full"
      style={{ opacity, padding: '0 0' }}
    >
      {/* Left arm — long fade + inner accent tick */}
      <div className="flex items-center" style={{ flex: 1, gap: 0 }}>
        {/* Main line — fades from transparent to near-center */}
        <div style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to right, transparent 0%, rgba(196,136,12,.18) 40%, rgba(196,136,12,.32) 100%)',
        }}/>
        {/* Short inner accent — brighter, close to token */}
        <div style={{ width: '18px', height: '1px', background: 'rgba(196,136,12,.38)' }}/>
        {/* Tick mark */}
        <div style={{ width: '1px', height: '6px', background: 'rgba(196,136,12,.30)', flexShrink: 0 }}/>
        <div style={{ width: '6px' }}/>
      </div>

      {/* Token */}
      <div style={{ flexShrink: 0 }}>
        <Token />
      </div>

      {/* Right arm — mirror of left */}
      <div className="flex items-center" style={{ flex: 1, gap: 0 }}>
        <div style={{ width: '6px' }}/>
        <div style={{ width: '1px', height: '6px', background: 'rgba(196,136,12,.30)', flexShrink: 0 }}/>
        <div style={{ width: '18px', height: '1px', background: 'rgba(196,136,12,.38)' }}/>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to left, transparent 0%, rgba(196,136,12,.18) 40%, rgba(196,136,12,.32) 100%)',
        }}/>
      </div>
    </div>
  );
}
