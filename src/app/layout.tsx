import type { Metadata } from "next";
import { Cinzel_Decorative, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cinzelDeco = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cinzel-deco",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kody Sun — DJ & Music Curator",
  description:
    "DJ, music curator, and event producer. Deep house, soul, and cinematic sounds. Book for events and listen to the latest mixes.",
  openGraph: {
    title: "Kody Sun",
    description: "DJ · Curator · Event Producer",
    url: "https://kodysun.com",
    siteName: "Kody Sun",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kody Sun",
    description: "DJ · Curator · Event Producer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzelDeco.variable} ${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
