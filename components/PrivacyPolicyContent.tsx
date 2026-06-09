import Link from "next/link";
import { PRIVACY_POLICY } from "@/lib/privacy-policy";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PrivacyPolicyContent() {
  const { title, summaryTitle, contactEmail, contactEmailHref, lastUpdated, sections } =
    PRIVACY_POLICY;

  return (
    <>
      <section className="bg-muted pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mt-4 font-heading text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-grey sm:text-lg">
            {summaryTitle}
          </p>
          <p className="mt-4 font-body text-xs text-grey">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-12 md:space-y-14">
          {sections.map((section) => (
            <article key={section.id} id={section.id}>
              <h2 className="font-heading text-2xl font-medium text-charcoal sm:text-3xl">
                {section.title}
              </h2>

              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-body text-sm font-light leading-relaxed text-grey sm:text-base"
                  >
                    {paragraph.includes(contactEmail) ? (
                      <>
                        {paragraph.split(contactEmail)[0]}
                        <a
                          href={contactEmailHref}
                          className="text-charcoal underline underline-offset-2 transition-colors hover:text-[#733E24]"
                        >
                          {contactEmail}
                        </a>
                        {paragraph.split(contactEmail)[1] ?? ""}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}

                {"bullets" in section && section.bullets ? (
                  <ul className="list-disc space-y-2 pl-5 font-body text-sm font-light leading-relaxed text-grey sm:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {"footer" in section && section.footer ? (
                  <p className="font-body text-sm font-light leading-relaxed text-grey sm:text-base">
                    {section.footer.includes(contactEmail) ? (
                      <>
                        {section.footer.split(contactEmail)[0]}
                        <a
                          href={contactEmailHref}
                          className="text-charcoal underline underline-offset-2 transition-colors hover:text-[#733E24]"
                        >
                          {contactEmail}
                        </a>
                        {section.footer.split(contactEmail)[1] ?? ""}
                      </>
                    ) : (
                      section.footer
                    )}
                  </p>
                ) : null}
              </div>
            </article>
          ))}

          <div className="border-t border-border pt-8">
            <p className="font-body text-sm font-light text-grey">
              For privacy-related enquiries, please contact{" "}
              <a
                href={contactEmailHref}
                className="text-charcoal underline underline-offset-2 transition-colors hover:text-[#733E24]"
              >
                {contactEmail}
              </a>
              .
            </p>
            <p className="mt-4 font-body text-sm text-grey">
              <Link
                href="/"
                className="font-medium uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-[#733E24]"
              >
                Return to homepage
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
