import { ArrowRight, Mail, Phone } from "lucide-react";
import { ContactNavLink } from "@/components/contact/ContactNavLink";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ContactCtaSectionProps = {
  className?: string;
};

const contactCardClass =
  "group flex flex-col items-center gap-3 border border-border bg-[#faf9f6] px-6 py-7 text-center transition-all duration-500 hover:border-[#543119]/30 hover:bg-white hover:shadow-[0_8px_24px_rgba(17,17,17,0.04)] sm:py-8";

const iconWrapClass =
  "flex size-12 items-center justify-center rounded-full border border-[#543119]/20 text-[#543119] transition-colors duration-500 group-hover:border-[#543119] group-hover:bg-[#543119]/5";

const labelClass =
  "font-body text-[10px] font-medium uppercase tracking-[0.16em] text-charcoal/55";

const valueClass =
  "font-body text-sm font-medium text-charcoal transition-colors duration-500 group-hover:text-[#543119] sm:text-base";

function ContactMethodCard({
  href,
  label,
  value,
  icon: Icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: typeof Phone;
}) {
  return (
    <a href={href} className={contactCardClass}>
      <div className={iconWrapClass}>
        <Icon className="size-5" strokeWidth={1.25} aria-hidden />
      </div>
      <div>
        <p className={labelClass}>{label}</p>
        <p className={cn("mt-1", valueClass)}>{value}</p>
      </div>
    </a>
  );
}

export function ContactCtaSection({ className }: ContactCtaSectionProps) {
  return (
    <section className={cn("bg-muted px-6 py-14 md:py-20 lg:px-10", className)}>
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden border border-[#543119]/12 bg-white px-6 py-10 shadow-[0_12px_40px_rgba(17,17,17,0.05)] sm:px-10 sm:py-12 md:px-12 md:py-14">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#543119]/25 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-[#543119]/[0.03] blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-10 -left-10 size-36 rounded-full bg-[#543119]/[0.04] blur-3xl"
            aria-hidden
          />

          <SectionIntro
            label="Contact"
            title="Still have questions?"
            description="Our team will be delighted to assist you. Reach out by phone, email, or through the contact details below."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <ContactMethodCard
              href={SITE.phoneHref}
              label="Call us"
              value={SITE.phone}
              icon={Phone}
            />
            <ContactMethodCard
              href={SITE.emailHref}
              label="Email us"
              value={SITE.email}
              icon={Mail}
            />
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div
              className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[#543119]/20 to-transparent"
              aria-hidden
            />
            <ContactNavLink
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-none border border-[#543119] bg-[#543119] px-8 py-3.5",
                "font-body text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white",
                "transition-all duration-500 ease-out hover:bg-[#543119]/90 hover:border-[#543119]/90",
              )}
            >
              Contact us
              <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
            </ContactNavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
