import { ContactNavLink } from "@/components/contact/ContactNavLink";
import { FAQ_SECTIONS, SITE } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FaqContent() {
  return (
    <>
      <section className="bg-muted pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <SectionLabel>Help Centre</SectionLabel>
          <h1 className="mt-4 font-heading text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-grey sm:text-lg">
            Everything you need to know about staying at Nivaãra Nerul — from
            bookings and amenities to local attractions and property policies.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-14 md:space-y-16">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-2xl font-medium text-charcoal sm:text-3xl">
                {section.title}
              </h2>

              <div className="mt-6 divide-y divide-border border-y border-border">
                {section.items.map((item) => (
                  <details key={item.question} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-body text-sm font-medium text-charcoal transition-colors hover:text-[#733E24] sm:text-base [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <span
                        className="shrink-0 font-body text-lg leading-none text-[#733E24] transition-transform group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>

                    <div className="pb-5 pr-8">
                      {"answer" in item && item.answer ? (
                        <p className="font-body text-sm font-light leading-relaxed text-grey sm:text-base">
                          {item.answer}
                        </p>
                      ) : null}

                      {"bullets" in item && item.bullets ? (
                        <ul
                          className={
                            "answer" in item && item.answer
                              ? "mt-3 list-disc space-y-2 pl-5"
                              : "list-disc space-y-2 pl-5"
                          }
                        >
                          {item.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="font-body text-sm font-light leading-relaxed text-grey sm:text-base"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted px-6 py-14 md:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 font-heading text-3xl font-medium text-charcoal sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm font-light leading-relaxed text-grey sm:text-base">
            Our team will be delighted to assist you. Reach out by phone, email,
            or through the contact details below.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href={SITE.phoneHref}
              className="font-body text-sm font-medium text-charcoal transition-colors hover:text-[#733E24]"
            >
              {SITE.phone}
            </a>
            <span className="hidden text-grey sm:inline" aria-hidden>
              ·
            </span>
            <a
              href={SITE.emailHref}
              className="font-body text-sm font-medium text-charcoal transition-colors hover:text-[#733E24]"
            >
              {SITE.email}
            </a>
          </div>

          <ContactNavLink className="mt-8 inline-flex items-center font-body text-xs font-medium uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-[#733E24]">
            Contact us
          </ContactNavLink>
        </div>
      </section>
    </>
  );
}
