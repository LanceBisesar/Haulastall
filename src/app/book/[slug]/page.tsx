import type { Metadata } from "next";
import BookingWizard from "./BookingWizard";
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
  "2-door-5-stall": {
    name: "2 Door, 5 Stalls",
    config: "Three women's stalls • Two men's stalls with urinal",
    capacity: "Up to 250 guests",
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
  "8-door-8-stall": {
    name: "8 Door, 8 Stalls",
    config: "Four women's stalls • Four men's stalls with urinals",
    capacity: "Up to 700 guests",
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

  return <BookingWizard trailer={trailer} />;
}
