import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Haul-A-Stall Luxury Restroom Trailers",
  description:
    "Read the terms and conditions for renting luxury restroom trailers from Haul-A-Stall, LLC.",
};

const sections = [
  {
    title: "Delivery Location",
    body: "The Portable Restroom Trailer must not be moved from the delivered location without written permission from Haul-A-Stall, LLC.",
  },
  {
    title: "Acceptance",
    body: "Customer shall be considered accepting these terms and conditions upon: (i) Paying deposit for use of equipment; (ii) Equipment delivered to the Customer\u2019s site by and or through their delegated person and use of equipment; (iii) acknowledgment or action of typical Customer; or (iv) Company\u2019s performance services at customer request. This Agreement supersedes any prior or other terms of any purchase order or other Customer documents. All agreements must be reviewed and approved by Haul-A-Stall, LLC.",
  },
  {
    title: "Access to Site",
    body: "The Restroom Trailer must be clear and accessible for service and service truck at all times. Customer agrees to provide the company with access to job site to perform normal business services such as: Deliveries, Service or restrooms, and or pickup of equipment through (i) Open access to site during specified operating hours (ii) Provide company with gate code, combination, or key and (iii) Contact phone number to open specific site in reasonable time period. Customer agrees to inspect all items and verify quantity and condition before accepting possession. All items accepted shall be considered to be in satisfactory condition. Customer agrees if Customer or Customers appointed representative or agent cannot be available to verify quantities at the time of delivery, the count of Haul-A-Stall, LLC is considered accurate, acceptable and binding.",
  },
  {
    title: "Rental Rate and Terms",
    body: 'The Portable Restroom Trailer is delivered free of visible damage and or graffiti. The Customer will be responsible and charged for any damages or replacement costs incurred from repairing damage. Customer agrees to pay all charges due to the company during the rental period outlined in the quote or invoice from the company. All invoices are deemed "due on receipt". Customer will be responsible for all collection expense rising out of the company\u2019s efforts to collect due money. For rentals longer than 1 week, the waste tank must be pumped at least weekly at a fee of $350.00 per clean out service. Emergency visits are billed additional $100.00 per hour plus mileage. Emergency Pump services are $350.00 on weekdays and $600.00 on weekends per pump service, due prior to or upon service.',
  },
  {
    title: "Monthly Rentals",
    body: "Customer shall make monthly payments in advance, based on invoices for services agreed to be performed, and for additional damages, costs or deposits. Payment is due in full immediately upon invoice. For reoccurring monthly rentals, payments are due 7 days prior to renewal for subsequent months. Late payments are subject to additional fees, interest and possible termination of contract. All monthly cycles are based on 4 weekly periods, which is 28 days, and billing is reflected as such.",
  },
  {
    title: "Damages to Equipment",
    body: "Customer is liable for all loss or damage to the Equipment, regardless of cause or fault, except for reasonable use. Customer shall pay Company the actual cost of repair or replacement of the Equipment and, in addition thereto, for Company\u2019s loss of use of the Equipment. Customer shall promptly notify Haul-A-Stall, LLC of any loss or damage to equipment. Customer accepts the Restroom Trailer(s) in the present condition upon delivery. Customer agrees to maintain the Restroom Trailer(s) in good condition and repair. Improper use or maintenance and all related costs are the sole responsibility of the customer.",
  },
  {
    title: "Contamination of Equipment",
    body: "Customer agrees and will be responsible for all (i) Hazardous Materials found in equipment (Hazard Materials includes: Oils, Gas, Flammable liquids, Biohazardous wastes (Excluding normal toilet wastes), explosives, paints, or other non-toilet wastes found in equipment) (ii) cleanup and containment of these wastes at the customer\u2019s expense (iii) any fines or penalties issued by state, federal, or local authorities. Lastly, the equipment will be considered on rent until the clean process is completed and the unit is removed from the site.",
  },
  {
    title: "Permits and Licenses",
    body: "The renter shall obtain and assume the cost of any permits or licenses if required by local or county ordinances. If event is shut down due to lack of proper permits, Haul-A-Stall, LLC. will not be held liable for any loss.",
  },
  {
    title: "Cancellations",
    body: "All items are withheld from our inventory for your event. Deposits are refundable if cancellation is requested 30 days prior to delivery. Cancellations made less than 30 days prior to delivery will incur 50% charge of the agreement. All monies are non-refundable if cancellation is within 14 days of delivery. All cancellations by customer must be submitted in writing.",
  },
  {
    title: "Returned Checks",
    body: "Customer agrees to pay $50.00 charge for any check returned by a bank for insufficient funds, closed account(s) or any reason.",
  },
  {
    title: "Risk and Liability",
    body: "All equipment is used at the risk of the Customer. Conditions which prevent satisfactory use do not relieve Customer from responsibility of rental charges. Customer assumes all risk and liability for injury(ies) including death to any person and all risk and liability from the rental, delivery, use, condition, maintenance of equipment. Customer accepts any item as is and assumes all risks. It is expressly understood and agreed by the Customer that Haul-A-Stall, LLC shall not be liable in any manner and shall be held harmless for any injuries or damages caused to person, property, material, or articles whatsoever while in, under, near or about, or during use of any property rented from.",
  },
  {
    title: "Liability and Indemnification",
    body: "The Lessee/customer will indemnify and hold harmless the Lessor against any and all claims, actions, suits, proceedings, costs, expenses, damages, and liabilities, including attorney\u2019s fees and costs, arising out of or related to the Lessee\u2019s use of the Equipment. In the event Haul-A-Stall, LLC is required to bring legal action or to engage in other collection efforts to enforce this repayment obligation then in any such legal action Haul-A-Stall will be entitled to recover, along with any other remedies provided by law, its reasonable attorney fees and legal expenses plus costs of collection activities other than a legal action.",
  },
  {
    title: "Warranties",
    body: "Haul-A-Stall, LLC makes no warranties either expressed or implied. There is no warranty that any item is suited for Customer\u2019s intended use.",
  },
  {
    title: "Termination",
    body: 'The company holds the rights to terminate this agreement and remove equipment if: (i) Customer fails to pay invoices when due, (ii) Equipment is damaged (iii) or company deems customer to be in breach of this agreement. If Haul-A-Stall is unable to perform its obligations due to strikes, transmission failure, "Acts of God," such as pandemics and earthquakes, and other reasonably unforeseeable events, Haul-A-Stall shall not be liable to the other for damages resulting from the failure to perform. Further, Haul-A-Stall reserves the right to terminate the Contract under material breach, change in circumstances, insolvency, unavailable inventory and mutual agreement. In the event of Contract termination, the customer must settle outstanding damages or fees, return assets and documents to the Haul-A-Stall.',
  },
  {
    title: "Quote Expiration",
    body: "All quotes expire 7 days after the date of quote.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pattern-overlay py-12 sm:py-16 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
            Terms and Conditions
          </h1>
          <p className="text-white/60">
            Haul-A-Stall, LLC &bull; (844) 417-8255 &bull; www.HaulAStall.com &bull; Contact@HaulAStall.com
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-lg font-bold text-foreground mb-2">
                  {section.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Our Trailers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
