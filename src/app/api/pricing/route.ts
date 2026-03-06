import { NextRequest, NextResponse } from "next/server";
import { calculatePrice, TRAILER_PRICES } from "@/lib/pricing";

export async function POST(req: NextRequest) {
  try {
    const { trailerSlug, destinationZip, eventDate, eventEndDate, guestCount } = await req.json();

    if (!trailerSlug || !TRAILER_PRICES[trailerSlug]) {
      return NextResponse.json({ error: "Invalid trailer" }, { status: 400 });
    }
    if (!destinationZip || !/^\d{5}$/.test(destinationZip)) {
      return NextResponse.json({ error: "Invalid ZIP code" }, { status: 400 });
    }
    if (!eventDate) {
      return NextResponse.json({ error: "Event date required" }, { status: 400 });
    }

    const breakdown = await calculatePrice(
      trailerSlug,
      destinationZip,
      eventDate,
      guestCount ? parseInt(guestCount, 10) : undefined,
      eventEndDate || undefined
    );

    return NextResponse.json(breakdown);
  } catch {
    return NextResponse.json({ error: "Failed to calculate pricing" }, { status: 500 });
  }
}
