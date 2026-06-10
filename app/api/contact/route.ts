import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { isSmtpPassConfigured, missingSmtpPassHint } from "@/lib/mailEnv";
import { sendMailViaSmtp } from "@/lib/smtp";

const mailbox = String(
  process.env.MAILBOX ||
    process.env.CONTACT_RECIPIENT ||
    "website@ghdhotels.in",
).trim();

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
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

    const subject = `New enquiry from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "Message:",
      message,
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

    console.error("Contact form error:", error);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
