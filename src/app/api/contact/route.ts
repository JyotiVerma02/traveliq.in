import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 2000;

function clean(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string"
    ? value.trim().replace(/\s+/g, " ").slice(0, maxLength)
    : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid form payload." },
      { status: 400 }
    );
  }

  const data = payload as Record<string, unknown>;
  const lead = {
    name: clean(data.name, 120),
    email: clean(data.email, 160).toLowerCase(),
    phone: clean(data.phone, 40),
    subject: clean(data.subject, 160),
    message: clean(data.message, 2000),
    source: "traveliq.in/contact-us",
  };

  if (!lead.name || !lead.email || !lead.message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isEmail(lead.email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        message:
          "Contact delivery is not configured yet. Please call or WhatsApp TravelIQ for immediate support.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Webhook returned ${response.status}`);
    }

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form delivery failed", error);

    return NextResponse.json(
      {
        message:
          "We could not send your message right now. Please try again or contact us on WhatsApp.",
      },
      { status: 502 }
    );
  }
}
