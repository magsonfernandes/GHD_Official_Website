import Link from "next/link";
import type { LegalDocument } from "@/lib/legal-document";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";

type LegalDocumentContentProps = {
  document: LegalDocument;
};

function renderLinkedText(
  text: string,
  contactEmail: string,
  contactEmailHref: string,
  website?: string,
  websiteHref?: string,
) {
  if (text.includes(contactEmail)) {
    return (
      <>
        {text.split(contactEmail)[0]}
        <a
          href={contactEmailHref}
          className="text-charcoal underline underline-offset-2 transition-colors hover:text-[#543119]"
        >
          {contactEmail}
        </a>
        {text.split(contactEmail)[1] ?? ""}
      </>
    );
  }

  if (website && websiteHref && text.includes(website)) {
    return (
      <>
        {text.split(website)[0]}
        <a
          href={websiteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal underline underline-offset-2 transition-colors hover:text-[#543119]"
        >
          {website}
        </a>
        {text.split(website)[1] ?? ""}
      </>
    );
  }

  return text;
}

export function LegalDocumentContent({ document }: LegalDocumentContentProps) {
  const {
    title,
    summaryTitle,
    contactEmail,
    contactEmailHref,
    website,
    websiteHref,
    dateLabel,
    lastUpdated,
    closingNote,
    sections,
  } = document;

  return (
    <>
      <section className="bg-muted pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionIntro
            label="Legal"
            title={title}
            description={summaryTitle}
            titleAs="h1"
          />
          <p className="mt-4 text-center font-body text-xs text-grey">
            {dateLabel}: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-12 md:space-y-14">
          {sections.map((section) => (
            <article key={section.id} id={section.id}>
              <h2 className={sectionHeadingClass()}>{section.title}</h2>

              <div className="mt-5 space-y-4">
                {"callouts" in section && section.callouts ? (
                  <div className="space-y-2">
                    {section.callouts.map((callout) => (
                      <p
                        key={callout}
                        className={sectionBodyClass(
                          false,
                          "mt-0 font-medium uppercase tracking-[0.08em] text-sm sm:text-base",
                        )}
                      >
                        {callout}
                      </p>
                    ))}
                  </div>
                ) : null}

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={sectionBodyClass(false, "mt-0 text-sm sm:text-base")}
                  >
                    {renderLinkedText(
                      paragraph,
                      contactEmail,
                      contactEmailHref,
                      website,
                      websiteHref,
                    )}
                  </p>
                ))}

                {"bullets" in section && section.bullets ? (
                  <ul
                    className={sectionBodyClass(
                      false,
                      "mt-0 list-disc space-y-2 pl-5 text-sm sm:text-base",
                    )}
                  >
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {"subsections" in section && section.subsections
                  ? section.subsections.map((subsection) => (
                      <div key={subsection.title} className="space-y-3">
                        <h3
                          className={sectionBodyClass(
                            false,
                            "mt-0 font-medium text-sm sm:text-base",
                          )}
                        >
                          {subsection.title}
                        </h3>
                        {subsection.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className={sectionBodyClass(false, "mt-0 text-sm sm:text-base")}
                          >
                            {renderLinkedText(
                              paragraph,
                              contactEmail,
                              contactEmailHref,
                              website,
                              websiteHref,
                            )}
                          </p>
                        ))}
                        {"bullets" in subsection && subsection.bullets ? (
                          <ul
                            className={sectionBodyClass(
                              false,
                              "mt-0 list-disc space-y-2 pl-5 text-sm sm:text-base",
                            )}
                          >
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))
                  : null}

                {"footer" in section && section.footer ? (
                  <p className={sectionBodyClass(false, "mt-0 text-sm sm:text-base")}>
                    {renderLinkedText(
                      section.footer,
                      contactEmail,
                      contactEmailHref,
                      website,
                      websiteHref,
                    )}
                  </p>
                ) : null}
              </div>
            </article>
          ))}

          <div className="border-t border-border pt-8">
            <p className={sectionBodyClass(false, "mt-0 text-sm sm:text-base")}>
              {closingNote}
            </p>
            <p className="mt-4 font-body text-sm text-grey">
              <Link
                href="/"
                className="font-medium uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-[#543119]"
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
