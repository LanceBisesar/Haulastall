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
    // In production, this would send to an API endpoint
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-20 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10"
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
          <h1 className="text-3xl font-bold mb-4">Quote Request Received!</h1>
          <p className="text-muted text-lg mb-8">
            Thank you for your interest in Haul-A-Stall. We&apos;ll review your
            request and get back to you within 24 hours.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Free Estimate
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get a Quote
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Tell us about your event and we&apos;ll provide a customized quote
            for your luxury restroom trailer needs.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface border border-surface-light/30 rounded-xl p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="John Smith"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Event Type */}
            <div>
              <label
                htmlFor="eventType"
                className="block text-sm font-medium mb-2"
              >
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label
                htmlFor="eventDate"
                className="block text-sm font-medium mb-2"
              >
                Event Date *
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                required
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Guest Count */}
            <div>
              <label
                htmlFor="guestCount"
                className="block text-sm font-medium mb-2"
              >
                Estimated Guest Count
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="100"
              />
            </div>

            {/* Event Location */}
            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium mb-2"
              >
                Event Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="City, State or full address"
              />
            </div>

            {/* Additional Details */}
            <div className="sm:col-span-2">
              <label
                htmlFor="details"
                className="block text-sm font-medium mb-2"
              >
                Additional Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us more about your event, special requirements, or questions..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full px-8 py-4 bg-accent text-primary font-semibold rounded-lg text-lg hover:bg-accent-light transition-colors"
          >
            Request a Quote
          </button>

          <p className="text-muted text-sm text-center mt-4">
            We typically respond within 24 hours. You can also call us directly
            at{" "}
            <a href="tel:+18444178255" className="text-accent hover:underline">
              (844) 417-8255
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
