import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Haul-A-Stall Luxury Restroom Trailers",
  description:
    "View photos of our luxury restroom trailers — interiors, exteriors, and event setups.",
};

const exteriorPhotos = [
  { src: "/2-stall-2-door.webp", alt: "2 Stall 2 Door Trailer — Exterior" },
  { src: "/5-stall-2-door.jpg", alt: "5 Stall 2 Door Trailer — Exterior" },
  { src: "/4-stall-4-door.webp", alt: "4 Stall 4 Door Trailer — Exterior" },
  { src: "/10-stall-2-door.png", alt: "10 Stall 2 Door Trailer — Exterior" },
];

const interiorPhotos = [
  { src: "/interior-common-area.webp", alt: "Common Area Restroom Interior" },
  { src: "/interior-stall-1.webp", alt: "Restroom Stall Interior" },
  { src: "/interior-luxury-womens.jpg", alt: "Luxury Women's Restroom" },
  { src: "/interior-womens.jpg", alt: "Women's Interior" },
  { src: "/interior-mens.jpg", alt: "Men's Interior" },
  { src: "/interior-singular-mens.jpg", alt: "Men's Single Stall" },
  { src: "/interior-12-station-womens.jpg", alt: "12 Station Women's Restroom" },
  { src: "/interior-3-station-womens.jpg", alt: "3 Station Women's Restroom" },
  { src: "/interior-8x17.jpg", alt: "8x17 Trailer Interior" },
  { src: "/interior-8x20-gray.jpg", alt: "8x20 Trailer Interior" },
  { src: "/interior-dsc01850.jpg", alt: "Trailer Interior View" },
  { src: "/interior-dsc03401.jpg", alt: "Trailer Interior Detail" },
  { src: "/interior-dsc04247.jpg", alt: "Trailer Interior Finish" },
];

export default function PhotosPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-gradient pattern-overlay py-16 sm:py-20 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-accent font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            See the Difference
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Browse photos of our luxury restroom trailers at real events.
            Interiors, exteriors, and setups that speak for themselves.
          </p>
        </div>
      </section>

      {/* Exterior Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
              Our Fleet
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground gold-underline">
              Exterior
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {exteriorPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-surface-light/60"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="py-20 sm:py-24 bg-surface relative pattern-overlay">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
              Step Inside
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground gold-underline">
              Interior
            </h2>
          </div>

          {interiorPhotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {interiorPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-surface-light/60"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-accent/25 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-muted text-sm">
                Interior photos coming soon. Want to see our trailers in person?{" "}
                <Link href="/contact" className="text-accent font-semibold hover:text-accent-dark transition-colors">
                  Contact us
                </Link>{" "}
                to schedule a viewing.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Like What You See?
          </h2>
          <p className="text-muted mb-8">
            Browse our trailer options or request a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg"
            >
              View Our Trailers
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-colors shadow-lg border border-surface-light"
            >
              Book Your Reservation Online
            </Link>
            <Link
              href="/quote"
              className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-full hover:bg-accent/5 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
