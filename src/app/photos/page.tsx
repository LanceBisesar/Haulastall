import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Haul-A-Stall Luxury Restroom Trailers",
  description:
    "View photos of our luxury restroom trailers — interiors, exteriors, and event setups.",
};

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

      {/* Gallery Grid - placeholder for images */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
              Our Work
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground gold-underline">
              Event Photos
            </h2>
          </div>

          {/* Placeholder grid - ready for images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-gradient-to-br from-surface to-surface-light rounded-2xl border border-surface-light/60 flex items-center justify-center"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="text-center">
                  <svg
                    className="w-12 h-12 text-accent/25 mx-auto mb-2"
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
                  <p className="text-muted-light text-xs">Coming soon</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-sm mt-10">
            More photos coming soon. Want to see our trailers in person?{" "}
            <Link href="/contact" className="text-accent font-semibold hover:text-accent-dark transition-colors">
              Contact us
            </Link>{" "}
            to schedule a viewing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-surface relative pattern-overlay">
        <div className="relative max-w-2xl mx-auto px-4 text-center">
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
