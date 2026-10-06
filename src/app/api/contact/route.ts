import { NextResponse } from "next/server";
import { Resend } from "resend";

import { SITE } from "@/content/site";

const RECIPIENTS = [
  "shahhinshir@gmail.com",
  "sh_bgfp@yahoo.com",
  "Shahhin_68@yahoo.com",
] as const;

const FROM = `Bay Guard Fire Protection <${SITE.email}>`;

const LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 200,
  phone: 40,
  subject: 160,
  message: 500,
} as const;

function field(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n|\r|\n/g, " ").trim().slice(0, max);
}

function messageField(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n|\r/g, "\n").trim().slice(0, LIMITS.message);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fail(asForm: boolean, request: Request, message: string, status: number) {
  if (asForm) {
    return NextResponse.redirect(new URL("/contact", request.url), 303);
  }
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const asForm = contentType.includes("form");

  if (!process.env.RESEND_API_KEY) {
    return fail(asForm, request, "Email is not configured.", 500);
  }
  let input: Record<string, unknown>;

  try {
    if (contentType.includes("application/json")) {
      input = ((await request.json()) ?? {}) as Record<string, unknown>;
    } else if (asForm) {
      const form = await request.formData();
      input = {
        firstName: form.get("first-name"),
        lastName: form.get("last-name"),
        email: form.get("email"),
        phone: form.get("phone"),
        subject: form.get("subject"),
        message: form.get("message"),
      };
    } else {
      return fail(false, request, "Invalid request.", 400);
    }
  } catch {
    return fail(asForm, request, "Invalid request.", 400);
  }

  const firstName = field(input.firstName, LIMITS.firstName);
  const lastName = field(input.lastName, LIMITS.lastName);
  const email = field(input.email, LIMITS.email);
  const phone = field(input.phone, LIMITS.phone);
  const subject = field(input.subject, LIMITS.subject);
  const message = messageField(input.message);

  if (!firstName || !lastName || !email || !subject || !message) {
    return fail(asForm, request, "Please complete all required fields.", 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fail(asForm, request, "Enter a valid email.", 400);
  }

  const name = `${firstName} ${lastName}`;
  const phoneLine = phone || "Not provided";
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phoneLine),
    subject: escapeHtml(subject),
    message: escapeHtml(message).replaceAll("\n", "<br />"),
  };

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [...RECIPIENTS],
    replyTo: email,
    subject: `Website enquiry: ${subject}`,
    text: [
      "New enquiry from the Bay Guard Fire Protection website.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phoneLine}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#18181b;line-height:1.5">
        <h1 style="font-size:18px;margin:0 0 16px">New website enquiry</h1>
        <p style="margin:0 0 16px">Someone submitted the contact form on ${escapeHtml(SITE.url)}.</p>
        <table style="border-collapse:collapse;width:100%;max-width:560px">
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Name</td><td style="padding:6px 0">${safe.name}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Email</td><td style="padding:6px 0"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Phone</td><td style="padding:6px 0">${safe.phone}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Subject</td><td style="padding:6px 0">${safe.subject}</td></tr>
        </table>
        <p style="margin:20px 0 8px;font-weight:600">Message</p>
        <p style="margin:0">${safe.message}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend contact send failed:", error);
    return fail(asForm, request, "Could not send your message.", 502);
  }

  if (asForm) {
    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  }

  return NextResponse.json({ ok: true });
}
