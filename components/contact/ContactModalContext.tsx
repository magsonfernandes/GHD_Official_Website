"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import { CORPORATE_OFFICE } from "@/lib/constants";
import {
  formatContactFetchFailure,
  formatContactSubmitFailure,
  mailApiHtmlError,
  parseContactResponseJson,
} from "@/lib/contactFormDiagnostics";
import { cn } from "@/lib/utils";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactModalContextValue = {
  openContact: () => void;
  closeContact: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

const fieldClass =
  "w-full border border-border bg-white px-3 py-2.5 font-body text-sm font-light text-charcoal outline-none transition-colors placeholder:text-grey/70 focus:border-charcoal disabled:opacity-60";

function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) return;
    setStatus("idle");
    setErrorMessage("");
  }, [open]);

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close contact"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 flex h-[94vh] w-[min(96vw,1400px)] flex-col overflow-hidden rounded-none bg-white shadow-[0_24px_60px_rgba(17,17,17,0.24)] lg:flex-row"
      >
        <div className="relative min-h-[16rem] w-full shrink-0 lg:min-h-0 lg:w-[44%]">
          <Image
            src={CORPORATE_OFFICE.image}
            alt={CORPORATE_OFFICE.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-6 sm:px-10 sm:py-8 lg:px-12 lg:py-10">
          <div className="flex items-start justify-between gap-4">
            <h2
              id="contact-modal-title"
              className={sectionHeadingClass(false, "mt-0 text-left")}
            >
              {CORPORATE_OFFICE.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 font-body text-xs uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-[#733E24]"
            >
              Close
            </button>
          </div>

          <div className={sectionBodyClass(false, "mt-5 space-y-4 text-left")}>
            <div>
              <p className="font-body text-xs font-medium uppercase tracking-[0.14em] text-charcoal">
                Address
              </p>
              <address className="mt-2 space-y-0.5 not-italic">
                {CORPORATE_OFFICE.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>

            <p>
              <span className="font-medium text-charcoal">Email:</span>{" "}
              <a
                href={CORPORATE_OFFICE.emailHref}
                className="transition-colors hover:text-charcoal"
              >
                {CORPORATE_OFFICE.email}
              </a>
            </p>

            <p>
              <span className="font-medium text-charcoal">Phone:</span>{" "}
              <a
                href={CORPORATE_OFFICE.phoneHref}
                className="transition-colors hover:text-charcoal"
              >
                {CORPORATE_OFFICE.phone}
              </a>
            </p>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h3 className="font-heading text-xl font-medium text-charcoal sm:text-2xl">
              Send Us a Message
            </h3>
            <p className={sectionBodyClass(false, "mt-2 text-left")}>
              For enquiries, partnerships, or investment discussions.
            </p>

            {status === "success" ? (
              <div className="mt-6 border border-[#733E24]/20 bg-muted/30 px-6 py-8 text-center">
                <p className="font-heading text-xl font-light text-charcoal">
                  Message Received
                </p>
                <p className={sectionBodyClass(false, "mt-3 text-center")}>
                  Thank you for reaching out. A member of the GHD Hotels team
                  will be in touch shortly.
                </p>
                <button
                  type="button"
                  className="mt-6 h-10 border border-charcoal bg-white px-6 font-body text-[0.65rem] font-medium uppercase tracking-[0.1em] text-charcoal sm:text-xs"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-3">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-body text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
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
                    htmlFor="contact-email"
                    className="mb-2 block font-body text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
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
                    htmlFor="contact-phone"
                    className="mb-2 block font-body text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
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
                    htmlFor="contact-message"
                    className="mb-2 block font-body text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
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
                  className="mt-2 h-10 w-full bg-[#733E24] px-6 font-body text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#733E24]/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:text-xs"
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : !formReady ? (
                    "Fill in the form to continue"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openContact = useCallback(() => setOpen(true), []);
  const closeContact = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#contact") {
        setOpen(true);
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <ContactModalContext.Provider value={{ openContact, closeContact }}>
      {children}
      <ContactModal open={open} onClose={closeContact} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}
