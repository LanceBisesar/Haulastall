import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-background to-surface">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
          Premium Portable Luxury
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Luxury Restroom
          <br />
          <span className="text-accent">Trailers</span>
        </h1>
        <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-4">
          Convenient &bull; Comfortable &bull; Clean
        </p>
        <p className="text-muted/80 text-base max-w-xl mx-auto mb-10">
          Elevate your event with heated, air-conditioned restroom trailers
          featuring flushing toilets and real sinks. Your guests deserve better
          than a porta-potty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg text-lg hover:bg-accent-light transition-colors"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 border border-surface-light text-foreground rounded-lg text-lg hover:bg-surface-light/30 transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Spotlessly Clean",
      description:
        "Every unit is professionally sanitized and maintained to the highest standards of cleanliness.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "True Luxury",
      description:
        "Flushing toilets, real sinks, climate control, and elegant finishes that impress your guests.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Delivered Anywhere",
      description:
        "We deliver, set up, and pick up — making the process completely hassle-free for you.",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Why Choose <span className="text-accent">Haul-A-Stall</span>?
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12">
          We provide a premium restroom experience that goes far beyond
          traditional portable restrooms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-background/50 border border-surface-light/30 rounded-xl p-8 text-center hover:border-accent/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-5">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const useCases = [
    { name: "Weddings", icon: "\u{1F492}" },
    { name: "Outdoor Events", icon: "\u{1F3AA}" },
    { name: "Construction Sites", icon: "\u{1F3D7}\uFE0F" },
    { name: "Sporting Events", icon: "\u{1F3DF}\uFE0F" },
    { name: "Marathons & Races", icon: "\u{1F3C3}" },
    { name: "Emergency Relief", icon: "\u{1F6A8}" },
    { name: "Corporate Events", icon: "\u{1F3E2}" },
    { name: "Long-Term Rentals", icon: "\u{1F4C5}" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Any Time, Any Place,{" "}
          <span className="text-accent">Any Reason</span>
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12">
          Our luxury restroom trailers are perfect for every occasion — from
          elegant weddings to rugged job sites.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {useCases.map((uc) => (
            <div
              key={uc.name}
              className="bg-surface border border-surface-light/30 rounded-xl p-6 text-center hover:border-accent/30 transition-colors"
            >
              <div className="text-3xl mb-3">{uc.icon}</div>
              <p className="font-medium text-sm">{uc.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to <span className="text-accent">Impress Your Guests</span>?
        </h2>
        <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
          Don&apos;t delay your event planning. Book a luxury restroom trailer
          today and give your guests the comfort they deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg text-lg hover:bg-accent-light transition-colors"
          >
            Book Now
          </Link>
          <a
            href="tel:+18444178255"
            className="px-8 py-4 border border-accent text-accent rounded-lg text-lg hover:bg-accent/10 transition-colors"
          >
            Call (844) 417-8255
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <UseCasesSection />
      <CTASection />
    </>
  );
}
