import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Haul-A-Stall Luxury Restroom Trailers",
  description:
    "Browse our fleet of luxury restroom trailers. See the quality and elegance that sets Haul-A-Stall apart.",
};

const galleryItems = [
  {
    title: "Exterior View",
    description:
      "Sleek, modern trailer design that blends seamlessly with any event setting.",
    aspect: "aspect-video",
  },
  {
    title: "Interior — Women's Suite",
    description:
      "Spacious interiors with vanity mirrors, premium fixtures, and elegant finishes.",
    aspect: "aspect-square",
  },
  {
    title: "Interior — Men's Suite",
    description:
      "Clean, well-lit facilities with full-flush urinals and private stalls.",
    aspect: "aspect-square",
  },
  {
    title: "Vanity & Sinks",
    description:
      "Real running water sinks with soap dispensers, paper towels, and vanity lighting.",
    aspect: "aspect-video",
  },
  {
    title: "Climate Control System",
    description:
      "Heated in winter and air-conditioned in summer for year-round comfort.",
    aspect: "aspect-video",
  },
  {
    title: "Event Setup",
    description:
      "Professional delivery and setup to ensure everything is perfect for your event.",
    aspect: "aspect-square",
  },
];

export default function GalleryPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Our Fleet
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Take a closer look at our luxury restroom trailers and see why our
            clients love them.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group bg-surface border border-surface-light/30 rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
            >
              {/* Placeholder for image */}
              <div
                className={`${item.aspect} bg-gradient-to-br from-surface-light to-primary flex items-center justify-center`}
              >
                <div className="text-center p-6">
                  <svg
                    className="w-12 h-12 text-muted/40 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-muted/60 text-sm">{item.title}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted mb-6">
            Want to see our trailers in person? Schedule a viewing or request a
            quote today.
          </p>
          <Link
            href="/quote"
            className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg text-lg hover:bg-accent-light transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
