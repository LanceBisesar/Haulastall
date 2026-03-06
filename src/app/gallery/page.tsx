import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Trailers | Haul-A-Stall Luxury Restroom Trailers",
  description:
    "Browse our fleet of luxury restroom trailers. See the quality and elegance that sets Haul-A-Stall apart.",
};

const trailerModels = [
  {
    name: "2 Door, 2 Stalls",
    slug: "2-door-2-stall",
    config: "Women's private toilet • Men's private toilet with urinal",
    capacity: "Up to 175 guests",
    tag: "Intimate Events",
    image: "/2-stall-2-door.webp",
    layout: "/2-stall-2-door-layout.webp",
  },
  {
    name: "2 Door, 5 Stalls",
    slug: "2-door-5-stall",
    config: "Three women's stalls • Two men's stalls with urinal",
    capacity: "Up to 250 guests",
    tag: "Most Popular",
    image: "/5-stall-2-door.jpg",
    layout: "/5-stall-2-door-layout.png",
  },
  {
    name: "3 Door, 3 Stalls",
    slug: "3-door-3-stall",
    config: "Two women's private stalls • Men's private stall with urinal",
    capacity: "Up to 175 guests",
    tag: "Versatile",
  },
  {
    name: "4 Door, 4 Stalls",
    slug: "4-door-4-stall",
    config: "Two women's stalls • Two men's private stalls with urinals",
    capacity: "Up to 350 guests",
    tag: "Large Events",
    image: "/4-stall-4-door.webp",
    layout: "/4-stall-4-door-layout.webp",
  },
  {
    name: "2 Door, 10 Stalls",
    slug: "2-door-10-stall",
    config: "Five women's stalls • Two men's stalls with urinals",
    capacity: "Up to 500 guests",
    tag: "High Capacity",
    image: "/10-stall-2-door.png",
    layout: "/10-stall-2-door-layout.webp",
  },
  {
    name: "8 Door, 8 Stalls",
    slug: "8-door-8-stall",
    config: "Four women's stalls • Four men's stalls with urinals",
    capacity: "Up to 700 guests",
    tag: "Grand Events",
  },
];

const interiorFeatures = [
  {
    title: "Flushing Porcelain Toilets",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Running Water Sinks",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Vanity Mirrors & Lighting",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Heat & Air Conditioning",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-gradient pattern-overlay py-16 sm:py-20 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-accent font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            Our Fleet
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Trailers
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Browse our selection of premium trailers. Each unit features elegant
            interiors, climate control, and immaculate finishes.
          </p>
        </div>
      </section>

      {/* Trailer Models Grid */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
              Choose Your Configuration
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground gold-underline">
              Trailer Models
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trailerModels.map((model) => (
              <Link
                key={model.name}
                href={`/book/${model.slug}`}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-surface-light/60 block cursor-pointer"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                {/* Trailer image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-surface to-surface-light relative flex items-center justify-center overflow-hidden">
                  {"image" in model && model.image ? (
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
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
                  )}
                  {/* Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full z-10">
                    {model.tag}
                  </span>
                </div>
                {/* Floor plan layout */}
                {"layout" in model && model.layout && (
                  <div className="bg-white border-t border-surface-light/60 p-4">
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Floor Plan</p>
                    <div className="relative aspect-[16/9] bg-surface rounded-lg overflow-hidden">
                      <Image
                        src={model.layout}
                        alt={`${model.name} floor plan`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {model.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    {model.config}
                  </p>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {model.capacity}
                  </div>
                  <span className="inline-flex items-center gap-1 text-accent-dark text-xs font-semibold mt-3">
                    Book Now &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Features */}
      <section className="py-16 sm:py-20 bg-surface relative pattern-overlay">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
            Standard in Every Unit
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-12 gold-underline">
            Interior Features
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {interiorFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white border border-surface-light flex items-center justify-center text-accent shadow-sm">
                  {feature.icon}
                </div>
                <p className="text-sm font-medium text-foreground">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Like What You See CTA */}
      <section className="py-20 sm:py-24 bg-surface text-center">
        <div className="max-w-2xl mx-auto px-4">
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
              className="px-8 py-4 border-2 border-accent/30 text-foreground font-medium rounded-full hover:bg-accent/5 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Book Online CTA */}
      <section className="py-20 sm:py-24 hero-gradient text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/5" />
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Reserve a Trailer?
          </h2>
          <p className="text-white/60 mb-8">
            Book your reservation online or contact us for a personalized
            recommendation based on your event size and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-colors shadow-lg"
            >
              Book Your Reservation Online
            </Link>
            <Link
              href="/quote"
              className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+18444178255"
              className="px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Call (844) 417-8255
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
