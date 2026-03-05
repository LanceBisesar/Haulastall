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
  },
  {
    title: "Interior — Women's Suite",
    description:
      "Spacious interiors with vanity mirrors, premium fixtures, and elegant finishes.",
  },
  {
    title: "Interior — Men's Suite",
    description:
      "Clean, well-lit facilities with full-flush urinals and private stalls.",
  },
  {
    title: "Vanity & Sinks",
    description:
      "Real running water sinks with soap dispensers, paper towels, and vanity lighting.",
  },
  {
    title: "Climate Control System",
    description:
      "Heated in winter and air-conditioned in summer for year-round comfort.",
  },
  {
    title: "Event Setup",
    description:
      "Professional delivery and setup to ensure everything is perfect for your event.",
  },
];

export default function GalleryPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Gallery
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            Take a closer look at our luxury restroom trailers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="border border-surface-light rounded-lg overflow-hidden"
            >
              <div className="aspect-[4/3] bg-surface flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-muted-light"
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
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/quote"
            className="inline-block px-8 py-3 bg-foreground text-white font-medium rounded hover:bg-primary-light transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
