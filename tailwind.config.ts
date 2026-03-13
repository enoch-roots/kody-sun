import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:        "#0A0A0A",
          deep:         "#111111",
          surface:      "#1A1A1A",
          muted:        "#2A2A2A",
          border:       "#333333",
          gold:         "#C9A84C",
          "gold-light": "#E8C97A",
          "gold-dim":   "#8A6F2E",
          white:        "#F5F5F5",
          gray:         "#888888",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.8s ease forwards",
        "fade-in":    "fadeIn 1.2s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
