"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  formatContactFetchFailure,
  formatContactSubmitFailure,
  mailApiHtmlError,
  parseContactResponseJson,
} from "@/lib/contactFormDiagnostics";
import { sectionBodyClass } from "@/lib/section-typography";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const fieldClass =
  "w-full border border-border bg-white px-3 py-2.5 font-body text-sm font-light text-charcoal outline-none transition-colors placeholder:text-grey/70 focus:border-charcoal disabled:opacity-60";

const idPrefixDefault = "contact";

type ContactMessageFormProps = {
  idPrefix?: string;
  className?: string;
  title?: string;
  description?: string;
};

export function ContactMessageForm({
  idPrefix = idPrefixDefault,
  className,
  title = "Send Us a Message",
  description = "For enquiries, partnerships, or investment discussions.",
}: ContactMessageFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const formReady = Boolean(
    form.name.trim() && form.email.trim() && form.message.trim(),
  );
  const canSend = formReady && status !== "loading";

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const url = "/api/contact";
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 30_000);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
        signal: controller.signal,
      });

      const raw = await response.text();
      const contentType = response.headers.get("content-type") || "";
      const data =
        parseContactResponseJson(raw, contentType) ??
        ({} as { ok?: boolean; error?: string; hint?: string });

      if (
        !data.error &&
        (raw.trim().startsWith("<!") || contentType.includes("text/html"))
      ) {
        throw new Error(mailApiHtmlError(url));
      }

      if (!response.ok || data.ok !== true) {
        throw new Error(
          formatContactSubmitFailure({
            requestUrl: url,
            response,
            rawBody: raw,
          }),
        );
      }

      setForm({ name: "", email: "", phone: "", message: "" });
      setStatus("success");
    } catch (error) {
      const isNetwork =
        error instanceof TypeError ||
        (error instanceof DOMException && error.name === "AbortError") ||
        (error instanceof Error &&
          /failed to fetch|networkerror|load failed|aborted/i.test(
            error.message,
          ));

      setErrorMessage(
        isNetwork
          ? formatContactFetchFailure(url, error)
          : error instanceof Error
            ? error.message
            : "Failed to send message.",
      );
      setStatus("error");
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  return (
    <div className={className}>
      <h3 className="font-heading text-xl font-thin text-charcoal sm:text-2xl">
        {title}
      </h3>
      <p className={sectionBodyClass(false, "mt-2 text-left")}>{description}</p>

      {status === "success" ? (
        <div className="mt-6 border border-[#543119]/20 bg-muted/30 px-6 py-8 text-center">
          <p className="font-heading text-xl font-thin text-charcoal">
            Message Received
          </p>
          <p className={sectionBodyClass(false, "mt-3 text-center")}>
            Thank you for reaching out. A member of the GHD Hotels team will be
            in touch shortly.
          </p>
          <button
            type="button"
            className="mt-6 h-10 rounded-none border border-charcoal bg-white px-6 font-body text-[0.65rem] font-medium uppercase tracking-[0.1em] text-charcoal sm:text-xs"
            onClick={() => setStatus("idle")}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-3">
          <div>
            <label
              htmlFor={`${idPrefix}-name`}
              className="mb-2 block font-body text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal"
            >
              Full Name *
            </label>
            <input
              id={`${idPrefix}-name`}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
              required
              disabled={status === "loading"}
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-email`}
              className="mb-2 block font-body text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal"
            >
              Email Address *
            </label>
            <input
              id={`${idPrefix}-email`}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              autoComplete="email"
              required
              disabled={status === "loading"}
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-phone`}
              className="mb-2 block font-body text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal"
            >
              Phone Number
            </label>
            <input
              id={`${idPrefix}-phone`}
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 00000 00000"
              autoComplete="tel"
              disabled={status === "loading"}
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-message`}
              className="mb-2 block font-body text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal"
            >
              Message *
            </label>
            <textarea
              id={`${idPrefix}-message`}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we assist you?"
              rows={5}
              required
              disabled={status === "loading"}
              className={cn(fieldClass, "min-h-[6.5rem] resize-none")}
            />
          </div>

          {status === "error" && errorMessage ? (
            <div className="border border-red-500/30 px-4 py-3 text-left">
              <p className="mb-2 font-body text-sm font-medium text-red-600">
                Could not send your message. Details:
              </p>
              <pre className="max-h-64 overflow-y-auto whitespace-pre-wrap break-words font-mono text-xs leading-relaxed text-red-600/90">
                {errorMessage}
              </pre>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={!canSend}
            className="mt-2 h-10 w-full rounded-none bg-[#543119] px-6 font-body text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#543119]/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:text-xs"
          >
            {status === "loading"
              ? "Sending..."
              : !formReady
                ? "Fill in the form to continue"
                : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
