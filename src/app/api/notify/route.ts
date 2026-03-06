import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "contact@haulastall.com";
const FROM_EMAIL = "notifications@haulastall.com";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

interface NotifyBody {
  step: 1 | 2 | 3 | "quote";
  trailer?: string;
  contact?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  event?: {
    eventType?: string;
    guestCount?: string;
    eventDate?: string;
    eventEndDate?: string;
    eventAddress?: string;
    eventZip?: string;
    waterAccess?: string;
    powerAccess?: string;
    eventNotes?: string;
  };
  pricing?: {
    total?: string;
    basePrice?: string;
    deliveryFee?: string;
  };
  quote?: {
    name?: string;
    email?: string;
    phone?: string;
    eventType?: string;
    eventDate?: string;
    eventEndDate?: string;
    guestCount?: string;
    trailerPreference?: string;
    eventAddress?: string;
    waterAccess?: string;
    powerAccess?: string;
    specialRequests?: string;
  };
}

function formatField(label: string, value?: string): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#222">${value}</td></tr>`;
}

function buildContactSection(contact: NotifyBody["contact"]): string {
  if (!contact) return "";
  return `
    <h3 style="color:#8B7D3C;margin:20px 0 10px">Contact Information</h3>
    <table style="border-collapse:collapse;width:100%">
      ${formatField("Name", `${contact.firstName || ""} ${contact.lastName || ""}`.trim())}
      ${formatField("Email", contact.email)}
      ${formatField("Phone", contact.phone)}
      ${formatField("Address", [contact.address, contact.city, contact.state, contact.zip].filter(Boolean).join(", "))}
    </table>
  `;
}

function buildEventSection(event: NotifyBody["event"]): string {
  if (!event) return "";
  return `
    <h3 style="color:#8B7D3C;margin:20px 0 10px">Event Details</h3>
    <table style="border-collapse:collapse;width:100%">
      ${formatField("Event Type", event.eventType?.replace("-", " "))}
      ${formatField("Guest Count", event.guestCount)}
      ${formatField("Delivery Date", event.eventDate)}
      ${formatField("Pick-Up Date", event.eventEndDate)}
      ${formatField("Delivery Address", event.eventAddress)}
      ${formatField("Delivery ZIP", event.eventZip)}
      ${formatField("Water Access", event.waterAccess)}
      ${formatField("Power Access", event.powerAccess)}
      ${formatField("Special Notes", event.eventNotes)}
    </table>
  `;
}

function buildPricingSection(pricing: NotifyBody["pricing"]): string {
  if (!pricing) return "";
  return `
    <h3 style="color:#8B7D3C;margin:20px 0 10px">Pricing Estimate</h3>
    <table style="border-collapse:collapse;width:100%">
      ${formatField("Base Price", pricing.basePrice ? `$${pricing.basePrice}` : undefined)}
      ${formatField("Delivery Fee", pricing.deliveryFee ? `$${pricing.deliveryFee}` : undefined)}
      ${formatField("Estimated Total", pricing.total ? `$${pricing.total}` : undefined)}
    </table>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body: NotifyBody = await req.json();
    const { step } = body;

    let subject = "";
    let html = "";

    const wrapper = (title: string, content: string) => `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <div style="background:#8B7D3C;color:white;padding:16px 24px;border-radius:8px 8px 0 0">
          <h2 style="margin:0;font-size:18px">${title}</h2>
        </div>
        <div style="background:#f9f9f6;padding:24px;border:1px solid #e5e2d9;border-top:none;border-radius:0 0 8px 8px">
          ${content}
        </div>
        <p style="color:#999;font-size:12px;margin-top:12px;text-align:center">Haul A Stall Notification System</p>
      </div>
    `;

    if (step === 1) {
      const name = `${body.contact?.firstName || ""} ${body.contact?.lastName || ""}`.trim();
      subject = `New Booking Started — ${name}`;
      html = wrapper(
        "New Booking Started",
        `<p style="color:#555">Someone has begun a booking for <strong>${body.trailer || "a trailer"}</strong>.</p>
        ${buildContactSection(body.contact)}`
      );
    } else if (step === 2) {
      const name = `${body.contact?.firstName || ""} ${body.contact?.lastName || ""}`.trim();
      subject = `Booking Step 2 Completed — ${name}`;
      html = wrapper(
        "Booking Progress: Event Details Submitted",
        `<p style="color:#555"><strong>${name}</strong> has completed event details for <strong>${body.trailer || "a trailer"}</strong>.</p>
        ${buildContactSection(body.contact)}
        ${buildEventSection(body.event)}`
      );
    } else if (step === 3) {
      const name = `${body.contact?.firstName || ""} ${body.contact?.lastName || ""}`.trim();
      subject = `Booking Review Reached — ${name}`;
      html = wrapper(
        "Booking Progress: Review Page Reached",
        `<p style="color:#555"><strong>${name}</strong> has reached the review page for <strong>${body.trailer || "a trailer"}</strong>. They have been directed to contact you to complete the reservation.</p>
        ${buildContactSection(body.contact)}
        ${buildEventSection(body.event)}
        ${buildPricingSection(body.pricing)}`
      );
    } else if (step === "quote") {
      const name = body.quote?.name || "Unknown";
      subject = `New Quote Request — ${name}`;
      html = wrapper(
        "New Quote Request",
        `<p style="color:#555">A new quote request has been submitted.</p>
        <h3 style="color:#8B7D3C;margin:20px 0 10px">Quote Details</h3>
        <table style="border-collapse:collapse;width:100%">
          ${formatField("Name", body.quote?.name)}
          ${formatField("Email", body.quote?.email)}
          ${formatField("Phone", body.quote?.phone)}
          ${formatField("Event Type", body.quote?.eventType)}
          ${formatField("Event Date", body.quote?.eventDate)}
          ${formatField("Event End Date", body.quote?.eventEndDate)}
          ${formatField("Guest Count", body.quote?.guestCount)}
          ${formatField("Trailer Preference", body.quote?.trailerPreference)}
          ${formatField("Delivery Address", body.quote?.eventAddress)}
          ${formatField("Water Access", body.quote?.waterAccess)}
          ${formatField("Power Access", body.quote?.powerAccess)}
          ${formatField("Special Requests", body.quote?.specialRequests)}
        </table>`
      );
    } else {
      return NextResponse.json({ error: "Invalid step" }, { status: 400 });
    }

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notification email error:", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}
