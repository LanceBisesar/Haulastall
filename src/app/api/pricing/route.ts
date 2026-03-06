import { NextRequest, NextResponse } from "next/server";
import { calculatePrice, TRAILER_PRICES } from "@/lib/pricing";

export async function POST(req: NextRequest) {
  try {
    const { trailerSlug, destinationZip, eventDate, eventEndDate, guestCount, waterAccess, powerAccess } = await req.json();

    if (!trailerSlug || !TRAILER_PRICES[trailerSlug]) {
      return NextResponse.json({ error: "Invalid trailer" }, { status: 400 });
    }
    if (!destinationZip || !/^\d{5}$/.test(destinationZip)) {
      return NextResponse.json({ error: "Invalid ZIP code" }, { status: 400 });
    }
    if (!eventDate) {
      return NextResponse.json({ error: "Event start date required" }, { status: 400 });
    }
    if (!eventEndDate) {
      return NextResponse.json({ error: "Event end date required" }, { status: 400 });
    }

    const breakdown = await calculatePrice(
      trailerSlug,
      destinationZip,
      eventDate,
      eventEndDate,
      guestCount ? parseInt(guestCount, 10) : undefined,
      waterAccess === "yes" ? true : waterAccess === "no" ? false : undefined,
      powerAccess === "yes" ? true : powerAccess === "no" ? false : undefined
    );

    return NextResponse.json(breakdown);
  } catch {
    return NextResponse.json({ error: "Failed to calculate pricing" }, { status: 500 });
  }
}
