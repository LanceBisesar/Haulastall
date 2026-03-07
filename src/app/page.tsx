import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative hero-gradient pattern-overlay min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden">
      {/* Decorative gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

      <div className="relative max-w-4xl mx-auto px-4 text-center py-24">
        <Image
          src="/logo.png"
          alt="Haul-A-Stall"
          width={300}
          height={195}
          className="h-24 sm:h-28 w-auto mx-auto mb-6 brightness-0 invert"
          priority
        />
        <p className="text-accent font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">
          Luxury Restroom Trailers
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
          Providing Luxury in the
          <br />
          <span className="text-accent">Most Unexpected Place</span>
        </h1>
        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-4">
          Not your everyday porta-potty &mdash; <strong className="text-white">not even close.</strong>
        </p>
        <p className="text-accent-light text-base sm:text-lg font-medium mb-10">
          Convenient &bull; Comfortable &bull; Clean
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors text-base shadow-lg"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-colors text-base shadow-lg"
          >
            Book Your Reservation Online
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-base"
          >
            View Our Trailers
          </Link>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 55 1440 60V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Climate Controlled",
      description:
        "Heated in winter, air-conditioned in summer. Our trailers keep your guests comfortable year-round regardless of the weather.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Elegant Interiors",
      description:
        "Flushing porcelain toilets, real running-water sinks, vanity mirrors, premium fixtures, and elegant finishes throughout.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Any Event, Any Size",
      description:
        "Weddings, corporate events, festivals, construction sites, marathons, emergencies — we deliver wherever you need us.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Spotless & Sanitized",
      description:
        "Every trailer is thoroughly cleaned and fully stocked before delivery. We take pride in our immaculate presentation.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground gold-underline">
            Upscale, Inside and Out
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover bg-white rounded-2xl p-8 text-center border border-surface-light/60 shadow-sm"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-5">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 sm:py-24 bg-surface relative pattern-overlay">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/luxury-exterior.jpg"
              alt="Haul-A-Stall luxury restroom trailer at an elegant venue"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
              About Haul-A-Stall
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Impress Your Guests
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Our luxury restroom trailers provide the same amenities as a high-end
              indoor restroom — flushing porcelain toilets, real running-water sinks,
              climate control, interior lighting, mirrors, and elegant finishes.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Give your guests an experience they won&apos;t forget. Whether it&apos;s
              a wedding, corporate gala, outdoor festival, or construction project, our
              trailers deliver comfort and class wherever you need them.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
            >
              Explore Our Fleet
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 sm:py-24 hero-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/5" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-accent/5" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
          Ready to Book?
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          Don&apos;t Delay Your Event Planning
        </h2>
        <p className="text-white/60 mb-4">
          Contact us today for a free, no-obligation quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-white/70 text-sm mb-10">
          <a href="mailto:Contact@HaulAStall.com" className="hover:text-accent transition-colors">
            Contact@HaulAStall.com
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="tel:+18444178255" className="hover:text-accent transition-colors">
            (844) 417-8255
          </a>
        </div>
        <Link
          href="/quote"
          className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg text-base"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
