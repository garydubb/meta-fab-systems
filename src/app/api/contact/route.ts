import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, message } = body;

  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Name, phone, and email are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL.");
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please call or email us directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  const { error } = await resend.emails.send({
    from: `MetaFab Systems Website <${fromEmail}>`,
    to: toEmail,
    replyTo: email,
    subject: `New quote request from ${name}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      "Project details:",
      message?.trim() || "(none provided)",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Couldn't send your message. Please try again or call us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
