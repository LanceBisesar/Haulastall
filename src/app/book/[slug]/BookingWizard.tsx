"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

interface Trailer {
  name: string;
  slug: string;
  config: string;
  capacity: string;
}

interface PriceBreakdown {
  basePrice: number;
  distanceMiles: number | null;
  deliveryFee: number;
  holidaySurcharge: number;
  isHoliday: boolean;
  total: number;
  capacityWarning: string | null;
}

const steps = [
  { number: 1, label: "Contact Info" },
  { number: 2, label: "Event Details" },
  { number: 3, label: "Review & Pay" },
];

const inputStyles =
  "w-full px-4 py-3 rounded-xl border border-surface-light bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors";

export default function BookingWizard({ trailer }: { trailer: Trailer }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Stored data from previous steps
  const [contactData, setContactData] = useState<Record<string, string>>({});
  const [eventData, setEventData] = useState<Record<string, string>>({});

  // Pricing state
  const [pricing, setPricing] = useState<PriceBreakdown | null>(null);
  const [pricingLoading, setPricingLoading] = useState(false);
  const [pricingError, setPricingError] = useState<string | null>(null);

  // Capacity warning (shown in step 2 as user types)
  const [capacityWarning, setCapacityWarning] = useState<string | null>(null);

  // Extract max capacity number from trailer.capacity string (e.g. "Up to 250 guests" → 250)
  const maxCapacity = parseInt(trailer.capacity.replace(/\D/g, ""), 10) || Infinity;

  function getFormData(): Record<string, string> {
    if (!formRef.current) return {};
    const fd = new FormData(formRef.current);
    const data: Record<string, string> = {};
    fd.forEach((val, key) => {
      data[key] = val.toString();
    });
    return data;
  }

  // Check guest capacity on input change
  function handleGuestCountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const count = parseInt(e.target.value, 10);
    if (!isNaN(count) && count > maxCapacity) {
      setCapacityWarning(
        `This trailer is rated for up to ${maxCapacity} guests. With ${count} guests, we recommend upgrading to a larger trailer or adding a second unit for the best experience.`
      );
    } else {
      setCapacityWarning(null);
    }
  }

  // Fetch pricing when we enter step 3
  const fetchPricing = useCallback(async (evData: Record<string, string>) => {
    setPricingLoading(true);
    setPricingError(null);
    setPricing(null);

    // Extract ZIP from the event/delivery address — try dedicated zip field first, then parse from address
    const zip = evData.eventZip || "";

    if (!zip || !/^\d{5}$/.test(zip)) {
      setPricingError("Please go back and enter a valid 5-digit delivery ZIP code.");
      setPricingLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trailerSlug: trailer.slug,
          destinationZip: zip,
          eventDate: evData.eventDate,
          guestCount: evData.guestCount,
        }),
      });
      if (!res.ok) throw new Error("Pricing request failed");
      const data: PriceBreakdown = await res.json();
      setPricing(data);
    } catch {
      setPricingError("Unable to calculate pricing. Final pricing will be confirmed by our team.");
    } finally {
      setPricingLoading(false);
    }
  }, [trailer.slug]);

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current?.reportValidity()) return;

    if (step === 1) {
      setContactData(getFormData());
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (step === 2) {
      const data = getFormData();
      setEventData(data);
      setStep(3);
      fetchPricing(data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    if (step === 2) {
      setEventData(getFormData());
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current?.reportValidity()) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="py-24 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Reservation Submitted!
          </h1>
          <p className="text-muted mb-8 leading-relaxed">
            Thank you for your reservation request. A team member will confirm
            availability and final pricing within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pattern-overlay py-10 sm:py-14 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="relative max-w-3xl mx-auto px-4">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Our Trailers
          </Link>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            Book the {trailer.name}
          </h1>
          <p className="text-white/60 text-sm">
            {trailer.config} &bull; {trailer.capacity}
          </p>
        </div>
      </section>

      {/* Step Tracker */}
      <div className="bg-white border-b border-surface-light sticky top-[72px] z-40">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.number} className="flex items-center flex-1">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step > s.number
                        ? "bg-accent text-white"
                        : step === s.number
                        ? "bg-accent text-white ring-4 ring-accent/20"
                        : "bg-surface-light text-muted"
                    }`}
                  >
                    {step > s.number ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s.number
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium hidden sm:block ${
                      step >= s.number ? "text-foreground" : "text-muted-light"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 mx-3">
                    <div className="h-0.5 rounded-full bg-surface-light">
                      <div
                        className="h-full rounded-full bg-accent transition-all duration-300"
                        style={{ width: step > s.number ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Contact Information */}
          {step === 1 && (
            <form ref={formRef} onSubmit={handleNext} className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Contact Information
                </h2>
                <p className="text-muted text-sm">
                  Tell us who you are so we can reach you about your reservation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-light/60" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="firstName" name="firstName" required defaultValue={contactData.firstName || ""} className={inputStyles} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="lastName" name="lastName" required defaultValue={contactData.lastName || ""} className={inputStyles} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="email" name="email" required defaultValue={contactData.email || ""} className={inputStyles} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" required defaultValue={contactData.phone || ""} className={inputStyles} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1.5">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="address" name="address" required defaultValue={contactData.address || ""} className={inputStyles} />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="city" name="city" required defaultValue={contactData.city || ""} className={inputStyles} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-foreground mb-1.5">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input type="text" id="state" name="state" required defaultValue={contactData.state || ""} className={inputStyles} />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-foreground mb-1.5">
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <input type="text" id="zip" name="zip" required defaultValue={contactData.zip || ""} className={inputStyles} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg text-base"
                >
                  Continue to Event Details &rarr;
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Event Details */}
          {step === 2 && (
            <form ref={formRef} onSubmit={handleNext} className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Event Details
                </h2>
                <p className="text-accent font-medium text-sm">
                  Pricing will appear in Step 3 once your event details are entered.
                </p>
              </div>

              {/* Capacity Warning Alert */}
              {capacityWarning && (
                <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <p className="text-amber-800 font-semibold text-sm">Guest Count Exceeds Capacity</p>
                    <p className="text-amber-700 text-sm mt-1">{capacityWarning}</p>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-light/60" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-1.5">
                      Event Type <span className="text-red-500">*</span>
                    </label>
                    <select id="eventType" name="eventType" required defaultValue={eventData.eventType || ""} className={inputStyles}>
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
                      defaultValue={eventData.guestCount || ""}
                      onChange={handleGuestCountChange}
                      className={inputStyles}
                    />
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-1.5">
                      Event Date <span className="text-red-500">*</span>
                    </label>
                    <input type="date" id="eventDate" name="eventDate" required defaultValue={eventData.eventDate || ""} className={inputStyles} />
                  </div>
                  <div>
                    <label htmlFor="eventEndDate" className="block text-sm font-medium text-foreground mb-1.5">
                      Event End Date
                    </label>
                    <input type="date" id="eventEndDate" name="eventEndDate" defaultValue={eventData.eventEndDate || ""} className={inputStyles} />
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
                      defaultValue={eventData.eventAddress || ""}
                      placeholder="Full address where the trailer will be delivered"
                      className={`${inputStyles} placeholder:text-muted-light`}
                    />
                  </div>
                  <div>
                    <label htmlFor="eventZip" className="block text-sm font-medium text-foreground mb-1.5">
                      Delivery ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="eventZip"
                      name="eventZip"
                      required
                      pattern="\d{5}"
                      maxLength={5}
                      defaultValue={eventData.eventZip || ""}
                      placeholder="e.g. 10001"
                      className={`${inputStyles} placeholder:text-muted-light`}
                    />
                  </div>
                  <div />
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Is there a water hose spigot within 100 ft? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-6">
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="waterAccess" value="yes" required defaultChecked={eventData.waterAccess === "yes"} className="w-4 h-4 text-accent border-surface-light focus:ring-accent/40" />
                        <span className="text-sm text-foreground">Yes</span>
                      </label>
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="waterAccess" value="no" defaultChecked={eventData.waterAccess === "no"} className="w-4 h-4 text-accent border-surface-light focus:ring-accent/40" />
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
                        <input type="radio" name="powerAccess" value="yes" required defaultChecked={eventData.powerAccess === "yes"} className="w-4 h-4 text-accent border-surface-light focus:ring-accent/40" />
                        <span className="text-sm text-foreground">Yes</span>
                      </label>
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="powerAccess" value="no" defaultChecked={eventData.powerAccess === "no"} className="w-4 h-4 text-accent border-surface-light focus:ring-accent/40" />
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
                      defaultValue={eventData.eventNotes || ""}
                      placeholder="Any special requirements, site access notes, or additional details"
                      className={`${inputStyles} placeholder:text-muted-light resize-y`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-8 py-4 border-2 border-surface-light text-muted font-medium rounded-full hover:bg-surface transition-colors text-base"
                >
                  &larr; Back
                </button>
                <button
                  type="submit"
                  className="px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg text-base"
                >
                  See the Price &rarr;
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Review & Payment */}
          {step === 3 && (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Review & Payment
                </h2>
                <p className="text-muted text-sm">
                  Review your pricing estimate and complete your reservation.
                </p>
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-accent/30" style={{ boxShadow: "var(--card-shadow)" }}>
                <h3 className="font-display text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Price Estimate
                </h3>

                {pricingLoading && (
                  <div className="flex items-center gap-3 text-muted py-4">
                    <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                    Calculating your price...
                  </div>
                )}

                {pricingError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                    {pricingError}
                  </div>
                )}

                {pricing && (
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-surface-light/60">
                      <span className="text-muted">Base rental ({trailer.name})</span>
                      <span className="font-semibold text-foreground">${pricing.basePrice.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-surface-light/60">
                      <span className="text-muted">
                        Delivery fee
                        {pricing.distanceMiles !== null && (
                          <span className="text-xs ml-1">
                            ({pricing.distanceMiles} mi{pricing.distanceMiles <= 10 ? " — within free zone" : ` — ${pricing.distanceMiles - 10} mi × $5`})
                          </span>
                        )}
                      </span>
                      <span className="font-semibold text-foreground">
                        {pricing.deliveryFee === 0 ? "FREE" : `$${pricing.deliveryFee.toLocaleString()}`}
                      </span>
                    </div>

                    {pricing.isHoliday && (
                      <div className="flex justify-between py-2 border-b border-surface-light/60">
                        <span className="text-muted">
                          Holiday surcharge
                          <span className="text-xs ml-1">(10%)</span>
                        </span>
                        <span className="font-semibold text-foreground">${pricing.holidaySurcharge.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between py-3 mt-2 border-t-2 border-foreground/10">
                      <span className="text-lg font-bold text-foreground">Estimated Total</span>
                      <span className="text-lg font-bold text-accent">${pricing.total.toLocaleString()}</span>
                    </div>

                    {/* Capacity warning in review */}
                    {pricing.capacityWarning && (
                      <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 flex items-start gap-3 mt-4">
                        <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <div>
                          <p className="text-amber-800 font-semibold text-sm">Guest Count Exceeds Capacity</p>
                          <p className="text-amber-700 text-sm mt-1">{pricing.capacityWarning}</p>
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-muted-light mt-2">
                      This is an estimate based on straight-line distance. Final pricing may be adjusted based on actual driving distance and will be confirmed by our team.
                    </p>
                  </div>
                )}
              </div>

              {/* Event Details Summary */}
              <div className="bg-surface rounded-2xl p-6 border border-surface-light">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Event Summary
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Trailer</span>
                    <span className="font-medium text-foreground">{trailer.name}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Capacity</span>
                    <span className="font-medium text-foreground">{trailer.capacity}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Contact</span>
                    <span className="font-medium text-foreground">{contactData.firstName} {contactData.lastName}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Email</span>
                    <span className="font-medium text-foreground">{contactData.email}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Event Type</span>
                    <span className="font-medium text-foreground capitalize">{eventData.eventType?.replace("-", " ")}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Guest Count</span>
                    <span className="font-medium text-foreground">{eventData.guestCount}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Event Date</span>
                    <span className="font-medium text-foreground">{eventData.eventDate}</span>
                  </div>
                  {eventData.eventEndDate && (
                    <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                      <span className="text-muted">End Date</span>
                      <span className="font-medium text-foreground">{eventData.eventEndDate}</span>
                    </div>
                  )}
                  <div className="sm:col-span-2 flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Delivery Address</span>
                    <span className="font-medium text-foreground text-right">{eventData.eventAddress}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Delivery ZIP</span>
                    <span className="font-medium text-foreground">{eventData.eventZip}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Water Access</span>
                    <span className="font-medium text-foreground capitalize">{eventData.waterAccess}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-light/60">
                    <span className="text-muted">Power Access</span>
                    <span className="font-medium text-foreground capitalize">{eventData.powerAccess}</span>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-light/60" style={{ boxShadow: "var(--card-shadow)" }}>
                <h3 className="font-display text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Payment Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label htmlFor="cardName" className="block text-sm font-medium text-foreground mb-1.5">
                      Name on Card <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="cardName" name="cardName" required className={inputStyles} />
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
                      className={`${inputStyles} placeholder:text-muted-light`}
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
                      className={`${inputStyles} placeholder:text-muted-light`}
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
                      className={`${inputStyles} placeholder:text-muted-light`}
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
                      className={`${inputStyles} placeholder:text-muted-light`}
                    />
                  </div>
                </div>
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

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-8 py-4 border-2 border-surface-light text-muted font-medium rounded-full hover:bg-surface transition-colors text-base"
                >
                  &larr; Back
                </button>
                <button
                  type="submit"
                  className="px-12 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg text-base"
                >
                  Submit Reservation
                </button>
              </div>

              <p className="text-xs text-muted-light text-center">
                By submitting, you agree to be contacted regarding your reservation.
                A team member will confirm availability and final pricing.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
