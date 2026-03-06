import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const trailerModels: Record<
  string,
  { name: string; config: string; capacity: string }
> = {
  "2-door-2-stall": {
    name: "2 Door, 2 Stalls",
    config: "Women's private toilet • Men's private toilet with urinal",
    capacity: "Up to 175 guests",
  },
  "2-door-4-stall": {
    name: "2 Door, 4 Stalls",
    config: "Three women's stalls • One men's stall with urinal",
    capacity: "Up to 200 guests",
  },
  "3-door-3-stall": {
    name: "3 Door, 3 Stalls",
    config: "Two women's private stalls • Men's private stall with urinal",
    capacity: "Up to 175 guests",
  },
  "4-door-4-stall": {
    name: "4 Door, 4 Stalls",
    config: "Two women's stalls • Two men's private stalls with urinals",
    capacity: "Up to 350 guests",
  },
  "2-door-10-stall": {
    name: "2 Door, 10 Stalls",
    config: "Five women's stalls • Two men's stalls with urinals",
    capacity: "Up to 500 guests",
  },
  "ada-accessible": {
    name: "ADA Accessible",
    config: "Wheelchair accessible stall with grab bars and wide doorway",
    capacity: "ADA compliant",
  },
};

export function generateStaticParams() {
  return Object.keys(trailerModels).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const trailer = trailerModels[slug];
    return {
      title: trailer
        ? `Book ${trailer.name} | Haul-A-Stall`
        : "Book a Trailer | Haul-A-Stall",
    };
  });
}

export default async function BookTrailerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trailer = trailerModels[slug];
  if (!trailer) notFound();

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pattern-overlay py-12 sm:py-16 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="relative max-w-3xl mx-auto px-4">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Our Trailers
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
            Book the {trailer.name}
          </h1>
          <p className="text-white/60">
            {trailer.config} &bull; {trailer.capacity}
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="space-y-10">
            {/* Contact / Demographics */}
            <fieldset>
              <legend className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">1</span>
                Contact Information
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1.5">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-foreground mb-1.5">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-foreground mb-1.5">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <hr className="border-surface-light" />

            {/* Event Details */}
            <fieldset>
              <legend className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">2</span>
                Event Details
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-1.5">
                    Event Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="festival">Festival / Concert</option>
                    <option value="private-party">Private Party</option>
                    <option value="construction">Construction Site</option>
                    <option value="marathon">Marathon / Sporting Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-foreground mb-1.5">
                    Estimated Guest Count <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    min="1"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-1.5">
                    Event Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="eventEndDate" className="block text-sm font-medium text-foreground mb-1.5">
                    Event End Date
                  </label>
                  <input
                    type="date"
                    id="eventEndDate"
                    name="eventEndDate"
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="eventAddress" className="block text-sm font-medium text-foreground mb-1.5">
                    Event / Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="eventAddress"
                    name="eventAddress"
                    required
                    placeholder="Full address where the trailer will be delivered"
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Is there a water hose spigot within 100 ft? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="waterAccess"
                        value="yes"
                        required
                        className="w-4 h-4 text-accent border-surface-light focus:ring-accent/40"
                      />
                      <span className="text-sm text-foreground">Yes</span>
                    </label>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="waterAccess"
                        value="no"
                        className="w-4 h-4 text-accent border-surface-light focus:ring-accent/40"
                      />
                      <span className="text-sm text-foreground">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Is there a designated power outlet within 100 ft? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="powerAccess"
                        value="yes"
                        required
                        className="w-4 h-4 text-accent border-surface-light focus:ring-accent/40"
                      />
                      <span className="text-sm text-foreground">Yes</span>
                    </label>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="powerAccess"
                        value="no"
                        className="w-4 h-4 text-accent border-surface-light focus:ring-accent/40"
                      />
                      <span className="text-sm text-foreground">No</span>
                    </label>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="eventNotes" className="block text-sm font-medium text-foreground mb-1.5">
                    Special Requests / Notes
                  </label>
                  <textarea
                    id="eventNotes"
                    name="eventNotes"
                    rows={3}
                    placeholder="Any special requirements, site access notes, or additional details"
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-y"
                  />
                </div>
              </div>
            </fieldset>

            <hr className="border-surface-light" />

            {/* Payment Details */}
            <fieldset>
              <legend className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">3</span>
                Payment Details
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="cardName" className="block text-sm font-medium text-foreground mb-1.5">
                    Name on Card <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-foreground mb-1.5">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="cardExpiry" className="block text-sm font-medium text-foreground mb-1.5">
                    Expiration Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cardExpiry"
                    name="cardExpiry"
                    required
                    placeholder="MM / YY"
                    maxLength={7}
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="cardCvv" className="block text-sm font-medium text-foreground mb-1.5">
                    CVV <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cardCvv"
                    name="cardCvv"
                    required
                    placeholder="123"
                    maxLength={4}
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="billingAddress" className="block text-sm font-medium text-foreground mb-1.5">
                    Billing Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="billingAddress"
                    name="billingAddress"
                    required
                    placeholder="If different from contact address"
                    className="w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
              </div>
            </fieldset>

            <hr className="border-surface-light" />

            {/* Selected trailer summary */}
            <div className="bg-surface rounded-2xl p-6 border border-surface-light">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                Reservation Summary
              </h3>
              <div className="text-sm text-muted space-y-1">
                <p>
                  <span className="font-medium text-foreground">Trailer:</span>{" "}
                  {trailer.name}
                </p>
                <p>
                  <span className="font-medium text-foreground">Configuration:</span>{" "}
                  {trailer.config}
                </p>
                <p>
                  <span className="font-medium text-foreground">Capacity:</span>{" "}
                  {trailer.capacity}
                </p>
              </div>
              <p className="text-xs text-muted-light mt-3">
                Final pricing will be confirmed via email after submission based on event details and delivery location.
              </p>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="mt-1 w-4 h-4 text-accent border-surface-light rounded focus:ring-accent/40"
              />
              <label htmlFor="terms" className="text-sm text-muted">
                I have read and accept the{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-accent font-medium underline hover:text-accent-dark transition-colors"
                >
                  Terms and Conditions
                </Link>{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg text-base"
              >
                Submit Reservation
              </button>
              <p className="text-xs text-muted-light mt-4">
                By submitting, you agree to be contacted regarding your reservation.
                A team member will confirm availability and final pricing.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
