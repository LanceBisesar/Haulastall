"use client";

import { useState } from "react";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Outdoor Festival",
  "Construction Site",
  "Sporting Event",
  "Marathon / Race",
  "Emergency / Disaster Relief",
  "Long-Term Rental",
  "Other",
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-24 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Quote Request Received!
          </h1>
          <p className="text-muted mb-8 leading-relaxed">
            Thank you for your interest in Haul-A-Stall. We&apos;ll review your
            request and get back to you within 24 hours.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const inputStyles =
    "w-full px-4 py-3 border border-surface-light rounded-xl bg-white text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all";

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-gradient pattern-overlay py-16 sm:py-20 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-accent font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            Free Estimate
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get a Quote
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Tell us about your event and we&apos;ll provide a customized,
            no-obligation quote.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-white rounded-2xl p-8 sm:p-10 border border-surface-light/60"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={inputStyles}
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={inputStyles}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2"
                  >
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className={inputStyles}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-semibold mb-2"
                  >
                    Event Type <span className="text-accent">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    className={inputStyles}
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-semibold mb-2"
                  >
                    Event Date <span className="text-accent">*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-sm font-semibold mb-2"
                  >
                    Estimated Guest Count
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    className={inputStyles}
                    placeholder="100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold mb-2"
                >
                  Event Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className={inputStyles}
                  placeholder="City, State or full address"
                />
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-semibold mb-2"
                >
                  Additional Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className={`${inputStyles} resize-none`}
                  placeholder="Tell us more about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg text-base"
              >
                Request a Quote
              </button>

              <p className="text-muted text-sm text-center">
                You can also call us directly at{" "}
                <a
                  href="tel:+18444178255"
                  className="text-accent font-semibold hover:underline"
                >
                  (844) 417-8255
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
