"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import { CORPORATE_OFFICE } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
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
              className="font-heading text-2xl font-medium text-charcoal sm:text-3xl"
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

          <div className="mt-5 space-y-4 font-body text-sm font-light leading-relaxed text-grey">
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

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Full Name *"
                  autoComplete="name"
                  required
                  disabled={status === "loading"}
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email Address *"
                    autoComplete="email"
                    required
                    disabled={status === "loading"}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="sr-only">
                    Phone number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Phone Number *"
                    autoComplete="tel"
                    required
                    disabled={status === "loading"}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Your Message *"
                  rows={4}
                  required
                  disabled={status === "loading"}
                  className={cn(fieldClass, "resize-y min-h-[6.5rem]")}
                />
              </div>

              {errorMessage ? (
                <p className="font-body text-xs text-red-600">{errorMessage}</p>
              ) : null}

              {status === "success" ? (
                <p className="font-body text-xs text-charcoal">
                  Thank you. Your message has been sent successfully.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className="h-10 w-full bg-[#733E24] px-6 font-body text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#733E24]/90 disabled:opacity-60 sm:w-auto sm:text-xs"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </form>
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
