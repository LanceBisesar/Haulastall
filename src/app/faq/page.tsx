import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Haul-A-Stall Luxury Restroom Trailers",
  description:
    "Frequently asked questions about Haul-A-Stall luxury restroom trailer rentals, pricing, delivery, and more.",
};

const faqs = [
  {
    question: "What is a luxury restroom trailer?",
    answer:
      "A luxury restroom trailer is a mobile restroom unit that provides the same amenities as a high-end indoor restroom. Our trailers feature flushing porcelain toilets, real running-water sinks, climate control (heat and A/C), interior lighting, mirrors, and elegant finishes — a massive upgrade from traditional portable restrooms.",
  },
  {
    question: "How many guests can a trailer accommodate?",
    answer:
      "Our trailers can accommodate varying numbers of guests depending on the unit size and event duration. For a typical 4-6 hour event, a standard trailer can comfortably serve 100-200 guests. For larger events or longer durations, we can provide multiple units. Contact us for a personalized recommendation.",
  },
  {
    question: "What do I need to provide at the event site?",
    answer:
      "We handle the heavy lifting! You just need to ensure there's a relatively flat, accessible area for the trailer. Depending on the unit, we may need access to a standard electrical outlet or water connection, though many of our trailers are fully self-contained. We'll discuss all requirements during the booking process.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking as early as possible, especially for peak season events (spring and summer). For weddings and large events, 2-3 months in advance is ideal. However, we do our best to accommodate last-minute requests when units are available.",
  },
  {
    question: "Do you deliver and set up the trailer?",
    answer:
      "Yes! Our service includes delivery, professional setup, and pickup after your event. We'll coordinate timing with you to ensure everything is ready before your guests arrive and removed at a convenient time afterward.",
  },
  {
    question: "Are the trailers cleaned and sanitized?",
    answer:
      "Absolutely. Every trailer is thoroughly cleaned and sanitized before each rental. We take pride in delivering units that are spotless and fully stocked with supplies including hand soap, paper towels, and toilet paper.",
  },
  {
    question: "What types of events do you serve?",
    answer:
      "We serve all types of events and situations including weddings, corporate events, outdoor festivals, construction sites, sporting events, marathons, emergency/disaster relief, and long-term rentals. If you have a unique need, just ask — we're happy to help.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on the trailer size, rental duration, delivery distance, and any additional services needed. We provide free, no-obligation quotes tailored to your specific event. Contact us or fill out our quote form for a personalized estimate.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "We understand that plans can change. Please contact us as soon as possible if you need to cancel or reschedule. We'll work with you to find a solution. Cancellation policies will be outlined in your rental agreement.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Common Questions
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Everything you need to know about renting a luxury restroom trailer
            from Haul-A-Stall.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-surface border border-surface-light/30 rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-medium text-lg list-none">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-muted shrink-0 ml-4 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-muted leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-surface border border-surface-light/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-muted mb-6">
            We&apos;re happy to help with any other questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+18444178255"
              className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors"
            >
              Call (844) 417-8255
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
