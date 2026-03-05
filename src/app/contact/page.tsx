import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Haul-A-Stall Luxury Restroom Trailers",
  description:
    "Get in touch with Haul-A-Stall for luxury restroom trailer rentals. Call, email, or request a quote online.",
};

const contactMethods = [
  {
    label: "Phone",
    value: "(844) 417-8255",
    subtitle: "(844) 4-1-STALL",
    href: "tel:+18444178255",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "Contact@HaulAStall.com",
    href: "mailto:Contact@HaulAStall.com",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "New York, NY",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const hours = [
  { days: "Monday – Thursday", time: "9:00 AM – 8:00 PM" },
  { days: "Friday – Saturday", time: "9:00 AM – 5:00 PM" },
  { days: "Sunday", time: "By Appointment" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-gradient pattern-overlay py-16 sm:py-20 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-accent font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            Get In Touch
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Have questions about our luxury restroom trailers? We&apos;re here to
            help. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className="card-hover bg-white rounded-2xl p-8 text-center border border-surface-light/60"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-5">
                  {method.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-2">
                  {method.label}
                </h3>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-foreground font-semibold hover:text-accent transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-foreground font-semibold">{method.value}</p>
                )}
                {method.subtitle && (
                  <p className="text-muted text-sm mt-1">{method.subtitle}</p>
                )}
              </div>
            ))}
          </div>

          {/* Hours & Message */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Business Hours */}
            <div className="bg-surface rounded-2xl p-8 sm:p-10">
              <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h2>
              <div className="space-y-4">
                {hours.map((row) => (
                  <div
                    key={row.days}
                    className="flex items-center justify-between py-3 border-b border-surface-light last:border-0"
                  >
                    <span className="text-foreground font-medium">{row.days}</span>
                    <span className="text-muted">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Send a Message CTA */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-surface-light/60" style={{ boxShadow: "var(--card-shadow)" }}>
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Get a free quote! Tell us about your event and we&apos;ll provide a
                personalized recommendation. Include:
              </p>
              <ul className="text-muted text-sm space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Event date &amp; time
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Event location
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Approximate number of guests
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Your contact information
                </li>
              </ul>
              <Link
                href="/quote"
                className="inline-block w-full text-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
