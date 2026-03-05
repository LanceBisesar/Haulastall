import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative min-h-[75vw] max-h-[600px] sm:min-h-[50vw] sm:max-h-[700px] flex items-center justify-center bg-surface overflow-hidden">
      {/* Background gradient placeholder — replace with hero image */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-light/50 to-white/25" />

      <div className="relative max-w-3xl mx-auto px-4 text-center py-20">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
          Haul-A-Stall
          <br />
          Luxury Restroom Trailers
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-xl mx-auto">
          Convenient &bull; Comfortable &bull; Clean
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  const cards = [
    {
      title: "Convenient | Comfortable | Clean",
      description:
        "Our luxury restroom trailers are heated, air-conditioned, and feature flushing toilets with real running-water sinks. A massive upgrade from traditional portable restrooms.",
    },
    {
      title: "Impress Your Guests",
      description:
        "Give your guests an experience they won't forget. Elegant interiors, premium fixtures, and spotless facilities that elevate any event.",
    },
    {
      title: "Any Time, Any Place, Any Reason",
      description:
        "Weddings, construction sites, corporate events, marathons, emergency relief — we deliver luxury restroom trailers wherever you need them.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {cards.map((card) => (
            <div key={card.title} className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                {card.title}
              </h2>
              <p className="text-muted leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground">
          Book Now
        </h2>
        <p className="text-muted mb-3">
          Don&apos;t delay your event planning. Contact us today.
        </p>
        <div className="space-y-2 text-muted mb-8">
          <p>
            Email:{" "}
            <a
              href="mailto:Contact@HaulAStall.com"
              className="text-foreground hover:underline"
            >
              Contact@HaulAStall.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+18444178255"
              className="text-foreground hover:underline"
            >
              (844) 417-8255
            </a>
          </p>
          <p>Hours: By Appointment</p>
        </div>
        <Link
          href="/quote"
          className="inline-block px-8 py-3 bg-foreground text-white font-medium rounded hover:bg-primary-light transition-colors"
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
      <AboutSection />
      <CTASection />
    </>
  );
}
