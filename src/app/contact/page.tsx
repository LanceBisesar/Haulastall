import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Haul-A-Stall Luxury Restroom Trailers",
  description:
    "Get in touch with Haul-A-Stall for luxury restroom trailer rentals. Call, email, or request a quote online.",
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Have questions about our luxury restroom trailers? We&apos;re here
            to help. Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-surface border border-surface-light/30 rounded-xl p-8 text-center hover:border-accent/30 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-5">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
            <a
              href="tel:+18444178255"
              className="text-accent text-lg font-medium hover:underline"
            >
              (844) 417-8255
            </a>
            <p className="text-muted text-sm mt-2">By appointment</p>
          </div>

          {/* Email */}
          <div className="bg-surface border border-surface-light/30 rounded-xl p-8 text-center hover:border-accent/30 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-5">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Email Us</h3>
            <a
              href="mailto:Contact@HaulAStall.com"
              className="text-accent text-lg font-medium hover:underline"
            >
              Contact@HaulAStall.com
            </a>
            <p className="text-muted text-sm mt-2">
              We respond within 24 hours
            </p>
          </div>

          {/* Quote */}
          <div className="bg-surface border border-surface-light/30 rounded-xl p-8 text-center hover:border-accent/30 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-5">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Request a Quote</h3>
            <Link
              href="/quote"
              className="text-accent text-lg font-medium hover:underline"
            >
              Get a Free Quote
            </Link>
            <p className="text-muted text-sm mt-2">
              Fill out our quick form
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-surface border border-surface-light/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Service Area</h2>
          <p className="text-muted max-w-2xl mx-auto">
            We deliver luxury restroom trailers across the region. Contact us to
            confirm availability in your area. We&apos;re happy to work with you
            to make your event a success, no matter the location.
          </p>
        </div>
      </div>
    </div>
  );
}
