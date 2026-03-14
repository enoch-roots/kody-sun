import type { Metadata } from "next";
import { Cinzel_Decorative, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cinzelDeco = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cinzel-deco",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kodysun.xyz"),
  title: "Kody Sun | DJ & Electronic Ritualist",
  description:
    "Kody Sun is a DJ, music curator, and event producer channelling sacred sound and warrior spirit through deep, soulful, and cinematic electronic music.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "Kody Sun | DJ & Electronic Ritualist",
    description:
      "Sonic Alchemy · Warrior Spirit. Kody Sun is a DJ and music curator blending deep house, soul, and cinematic sound into electronic ritual.",
    url: "https://kodysun.xyz",
    siteName: "Kody Sun",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kody Sun — DJ & Electronic Ritualist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kody Sun | DJ & Electronic Ritualist",
    description:
      "Sonic Alchemy · Warrior Spirit. Deep house, soul, and cinematic electronic music.",
    site: "@kodysunbloom",
    creator: "@kodysunbloom",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzelDeco.variable} ${display.variable} ${body.variable}`}>
      <head>
        {/* Warm up connection to YouTube CDN for thumbnail images in MusicMixes */}
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
