"use client";

import { FormEvent, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type NewsletterSignupProps = {
  idSuffix?: string;
};

export function NewsletterSignup({ idSuffix = "" }: NewsletterSignupProps) {
  const emailId = `newsletter-email${idSuffix}`;
  const [email, setEmail] = useState("");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!ageConfirmed || !marketingConsent) {
      setErrorMessage("Please confirm both checkboxes to continue.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ageConfirmed, marketingConsent }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
      setAgeConfirmed(false);
      setMarketingConsent(false);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section className="border-t border-border bg-muted py-10 md:py-12">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <SectionLabel>Newsletter</SectionLabel>
        <h2 className="mt-2 font-heading text-2xl font-medium text-charcoal sm:text-3xl">
          Be the first to know
        </h2>
        <p className="mx-auto mt-2 max-w-xl font-body text-[0.65rem] font-medium uppercase tracking-[0.16em] text-charcoal sm:text-xs sm:tracking-[0.2em]">
          Sign up to receive GHD Hotels newsletters and offers in your inbox
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-lg text-left">
          <label htmlFor={emailId} className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              id={emailId}
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email Address"
              autoComplete="email"
              disabled={status === "loading"}
              className="h-10 flex-1 border border-border bg-white px-3 font-body text-sm font-light text-charcoal outline-none transition-colors placeholder:text-grey/70 focus:border-charcoal disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-10 shrink-0 bg-[#733E24] px-6 font-body text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#733E24]/90 disabled:opacity-60 sm:text-xs"
            >
              {status === "loading" ? "Submitting…" : "Sign Up"}
            </button>
          </div>

          <div className="mt-4 space-y-2.5">
            <label className="flex items-start gap-2.5 font-body text-[0.6875rem] font-light leading-snug text-grey sm:text-xs">
              <input
                type="checkbox"
                checked={ageConfirmed}
                onChange={(event) => setAgeConfirmed(event.target.checked)}
                disabled={status === "loading"}
                className="mt-0.5 size-3.5 shrink-0 accent-[#733E24]"
              />
              <span>
                I am over the age of 18 and have read the{" "}
                <a
                  href="/privacy"
                  className="text-charcoal underline underline-offset-2"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            <label className="flex items-start gap-2.5 font-body text-[0.6875rem] font-light leading-snug text-grey sm:text-xs">
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(event) => setMarketingConsent(event.target.checked)}
                disabled={status === "loading"}
                className="mt-0.5 size-3.5 shrink-0 accent-[#733E24]"
              />
              <span>
                By submitting this form, I confirm I would like to receive emails
                on promotions, special offers and updates from {SITE.name} and its
                affiliated brands.
              </span>
            </label>
          </div>

          <p
            role="status"
            aria-live="polite"
            className={cn(
              "mt-3 min-h-4 text-center font-body text-xs",
              status === "success" && "text-charcoal",
              status === "error" && "text-red-600",
              status !== "success" && status !== "error" && "text-transparent",
            )}
          >
            {status === "success"
              ? "Thank you for subscribing. We'll be in touch soon."
              : errorMessage}
          </p>
        </form>
      </div>
    </section>
  );
}
