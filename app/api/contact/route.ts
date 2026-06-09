import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (!host || !user || !password) {
    return null;
  }

  return {
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass: password },
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const smtpConfig = getSmtpConfig();
    if (!smtpConfig) {
      console.error("Contact form failed: SMTP is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 },
      );
    }

    const recipient =
      process.env.CONTACT_RECIPIENT ??
      process.env.NEWSLETTER_RECIPIENT ??
      "info@ghdhotels.in";
    const submittedAt = new Date().toISOString();

    const transporter = nodemailer.createTransport(smtpConfig);

    await transporter.sendMail({
      from: `"GHD Hotels Website" <${smtpConfig.auth.user}>`,
      to: recipient,
      replyTo: email,
      subject: `Contact Form — ${name}`,
      text: [
        "A new contact form message was submitted on the GHD Hotels website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Submitted at: ${submittedAt}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Contact Form Message</h2>
        <p>A new contact form message was submitted on the GHD Hotels website.</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Submitted at:</strong> ${submittedAt}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
