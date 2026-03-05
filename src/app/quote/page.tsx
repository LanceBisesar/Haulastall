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
      <div className="py-20 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-16 h-16 border-2 border-foreground rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8"
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
          <h1 className="font-display text-2xl font-bold mb-3">
            Quote Request Received
          </h1>
          <p className="text-muted mb-6">
            Thank you for your interest. We&apos;ll review your request and get
            back to you within 24 hours.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-foreground text-white font-medium rounded hover:bg-primary-light transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Get a Quote
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            Tell us about your event and we&apos;ll provide a customized quote.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 border border-surface-light rounded bg-white text-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 border border-surface-light rounded bg-white text-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2.5 border border-surface-light rounded bg-white text-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="eventType"
                className="block text-sm font-medium mb-1"
              >
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                className="w-full px-4 py-2.5 border border-surface-light rounded bg-white text-foreground focus:outline-none focus:border-foreground transition-colors"
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
                className="block text-sm font-medium mb-1"
              >
                Event Date *
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                required
                className="w-full px-4 py-2.5 border border-surface-light rounded bg-white text-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="guestCount"
                className="block text-sm font-medium mb-1"
              >
                Estimated Guest Count
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                className="w-full px-4 py-2.5 border border-surface-light rounded bg-white text-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="100"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium mb-1"
            >
              Event Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full px-4 py-2.5 border border-surface-light rounded bg-white text-foreground focus:outline-none focus:border-foreground transition-colors"
              placeholder="City, State or full address"
            />
          </div>

          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium mb-1"
            >
              Additional Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              className="w-full px-4 py-2.5 border border-surface-light rounded bg-white text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              placeholder="Tell us more about your event..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-foreground text-white font-medium rounded hover:bg-primary-light transition-colors"
          >
            Request a Quote
          </button>

          <p className="text-muted text-sm text-center">
            You can also call us directly at{" "}
            <a
              href="tel:+18444178255"
              className="text-foreground hover:underline"
            >
              (844) 417-8255
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
