/**
 * OptimizedImage — standard image wrapper for all non-hero images.
 *
 * USAGE PATTERN
 * ─────────────
 * Above the fold (LCP candidate):
 *   <OptimizedImage src={heroImg} priority sizes="100vw" ... />
 *
 * Below the fold (lazy-loaded, blur-up):
 *   import albumArt from '@/public/images/album.jpg';
 *   <OptimizedImage src={albumArt} sizes="(max-width:768px) 100vw, 50vw" alt="..." />
 *
 * WHAT THIS ENFORCES
 * ──────────────────
 * • Static import  → Next.js auto-generates blurDataURL + knows exact dimensions.
 *   No layout shift, instant blur placeholder, correct srcset range.
 * • placeholder="blur"  → smooth fade-in instead of image pop on every image.
 * • sizes prop      → tells the browser the rendered width so it picks the
 *   smallest srcset entry that looks sharp (avoids 1280px downloads on mobile).
 * • quality=80      → good balance of sharpness vs file size for AVIF/WebP.
 *   Override to 85 for hero/large feature images, 70 for thumbnails.
 * • loading="lazy"  → defers off-screen decoding (default for non-priority).
 * • AVIF/WebP served automatically by Next.js (configured in next.config.ts).
 *
 * COMMON sizes VALUES
 * ───────────────────
 * Full bleed section bg:      "100vw"
 * Half-width desktop card:    "(max-width:768px) 100vw, 50vw"
 * Third-width grid:           "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
 * Fixed thumbnail (e.g. 96px):"96px"
 */

import Image, { type ImageProps, type StaticImageData } from 'next/image';

type Props = Omit<ImageProps, 'src' | 'placeholder'> & {
  /** Must be a statically imported image (import img from '@/public/...') */
  src: StaticImageData;
  /** Describes the rendered width at each breakpoint — required for good srcset selection */
  sizes: string;
  quality?: number;
  /** Set to true only for LCP / above-the-fold images */
  priority?: boolean;
};

export default function OptimizedImage({
  src,
  alt,
  sizes,
  quality = 80,
  priority = false,
  ...rest
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      quality={quality}
      priority={priority}
      placeholder="blur"   // auto blurDataURL from static import — zero config
      {...rest}
    />
  );
}
