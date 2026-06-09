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
      email?: string;
      ageConfirmed?: boolean;
      marketingConsent?: boolean;
    };

    const email = body.email?.trim().toLowerCase() ?? "";

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!body.ageConfirmed || !body.marketingConsent) {
      return NextResponse.json(
        { error: "Please confirm both checkboxes to continue." },
        { status: 400 },
      );
    }

    const smtpConfig = getSmtpConfig();
    if (!smtpConfig) {
      console.error("Newsletter signup failed: SMTP is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 },
      );
    }

    const recipient =
      process.env.NEWSLETTER_RECIPIENT ?? process.env.SMTP_USER ?? email;
    const submittedAt = new Date().toISOString();

    const transporter = nodemailer.createTransport(smtpConfig);

    await transporter.sendMail({
      from: `"GHD Hotels Website" <${smtpConfig.auth.user}>`,
      to: recipient,
      replyTo: email,
      subject: "New Newsletter Signup — GHD Hotels",
      text: [
        "A new newsletter signup was submitted on the GHD Hotels website.",
        "",
        `Email: ${email}`,
        `Age confirmed: Yes`,
        `Marketing consent: Yes`,
        `Submitted at: ${submittedAt}`,
      ].join("\n"),
      html: `
        <h2>New Newsletter Signup</h2>
        <p>A new newsletter signup was submitted on the GHD Hotels website.</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Age confirmed:</strong> Yes</li>
          <li><strong>Marketing consent:</strong> Yes</li>
          <li><strong>Submitted at:</strong> ${submittedAt}</li>
        </ul>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Unable to submit your signup right now. Please try again later." },
      { status: 500 },
    );
  }
}
