import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { isSmtpPassConfigured, missingSmtpPassHint } from "@/lib/mailEnv";
import { sendMailViaSmtp } from "@/lib/smtp";

const mailbox = String(
  process.env.NEWSLETTER_RECIPIENT ||
    process.env.MAILBOX ||
    process.env.CONTACT_RECIPIENT ||
    "website@ghdhotels.in",
).trim();

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
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!body.ageConfirmed) {
      return NextResponse.json(
        { ok: false, error: "Please confirm you are over the age of 18." },
        { status: 400 },
      );
    }

    if (!isSmtpPassConfigured()) {
      const envFilePath = path.join(process.cwd(), ".env.local");
      return NextResponse.json(
        {
          ok: false,
          error: "Missing SMTP_PASS",
          hint: missingSmtpPassHint({
            envFilePath,
            envFileExists: fs.existsSync(envFilePath),
          }),
        },
        { status: 400 },
      );
    }

    const submittedAt = new Date().toISOString();
    const marketingConsent = body.marketingConsent === true;

    const subject = `New newsletter signup — ${email}`;
    const text = [
      "A new newsletter signup was submitted on the GHD Hotels website.",
      "",
      `Email: ${email}`,
      `Age confirmed (18+): Yes`,
      `Marketing consent: ${marketingConsent ? "Yes" : "No"}`,
      `Submitted at: ${submittedAt}`,
    ].join("\n");

    await sendMailViaSmtp({
      from: mailbox,
      to: mailbox,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && /Missing SMTP_PASS/i.test(error.message)) {
      const envFilePath = path.join(process.cwd(), ".env.local");
      return NextResponse.json(
        {
          ok: false,
          error: "Missing SMTP_PASS",
          hint: missingSmtpPassHint({
            envFilePath,
            envFileExists: fs.existsSync(envFilePath),
          }),
        },
        { status: 400 },
      );
    }

    const msg =
      error instanceof Error
        ? error.message
        : typeof error === "string"
          ? error
          : "Failed to send email";

    console.error("Newsletter signup error:", error);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
