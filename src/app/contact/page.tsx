import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Haul-A-Stall Luxury Restroom Trailers",
  description:
    "Get in touch with Haul-A-Stall for luxury restroom trailer rentals. Call, email, or request a quote online.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            Have questions about our luxury restroom trailers? We&apos;re here
            to help.
          </p>
        </div>

        <div className="space-y-8 text-center">
          <div>
            <h2 className="font-display text-xl font-bold mb-2">
              Book Now! Don&apos;t Delay Your Event Planning
            </h2>
          </div>

          <div className="space-y-3 text-muted">
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

          <div className="pt-4">
            <Link
              href="/quote"
              className="inline-block px-8 py-3 bg-foreground text-white font-medium rounded hover:bg-primary-light transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
