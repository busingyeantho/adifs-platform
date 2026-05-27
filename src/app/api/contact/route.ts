import { NextResponse } from "next/server";
import type { ContactFormData } from "@/services/contact";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateRequest(data: ContactFormData) {
  if (!data || typeof data !== "object") {
    return "Invalid request body.";
  }

  const { name, email, message } = data;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return "Please fill in all fields.";
  }

  if (!isValidEmail(email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

async function sendSendGridEmail(data: ContactFormData) {
  const sendgridKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const toEmail = process.env.SENDGRID_TO_EMAIL;

  if (!sendgridKey || !fromEmail || !toEmail) {
    console.log("SendGrid is not configured. Contact submission:", data);
    return;
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: toEmail }],
        subject: `New contact from ${data.name}`,
      },
    ],
    from: { email: fromEmail },
    content: [
      {
        type: "text/plain",
        value: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      },
    ],
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sendgridKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`SendGrid failed: ${response.status} ${errorText}`);
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const validationError = validateRequest(body as ContactFormData);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const contactData = body as ContactFormData;

  await sendSendGridEmail(contactData);

  return NextResponse.json({ success: true });
}
