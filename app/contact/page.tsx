import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CorporateFooter } from "@/components/corporate/CorporateFooter";
import {
  FadeInSection,
  SectionEyebrow,
  SectionHeading,
} from "@/components/corporate/CorporateUi";
import {
  CORPORATE_OFFICE,
  GUEST_CARE_CONTACT,
  NIVAARA_CONTACT,
  RESERVATION_CONTACT,
  SITE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact GHD Hotels",
  description: "Contact GHD Hotels for reservations, guest care, and corporate enquiries.",
};

export default function ContactPage() {
  const blocks = [
    {
      title: RESERVATION_CONTACT.title,
      lines: [
        { label: "Phone", href: RESERVATION_CONTACT.phoneHref, text: RESERVATION_CONTACT.phone },
        { label: "Email", href: RESERVATION_CONTACT.emailHref, text: RESERVATION_CONTACT.email },
      ],
    },
    {
      title: GUEST_CARE_CONTACT.title,
      lines: [
        { label: "Email", href: GUEST_CARE_CONTACT.emailHref, text: GUEST_CARE_CONTACT.email },
      ],
    },
    {
      title: NIVAARA_CONTACT.title,
      lines: [
        {
          label: "Phone",
          href: NIVAARA_CONTACT.receptionPhoneHref,
          text: NIVAARA_CONTACT.receptionPhone,
        },
        {
          label: "Email",
          href: NIVAARA_CONTACT.receptionEmailHref,
          text: NIVAARA_CONTACT.receptionEmail,
        },
        ...NIVAARA_CONTACT.addressLines.map((line) => ({
          label: "Address",
          href: null as string | null,
          text: line,
        })),
      ],
    },
    {
      title: CORPORATE_OFFICE.title,
      lines: [
        ...CORPORATE_OFFICE.addressLines.map((line) => ({
          label: "Address",
          href: null as string | null,
          text: line,
        })),
        { label: "Email", href: CORPORATE_OFFICE.emailHref, text: CORPORATE_OFFICE.email },
        { label: "Phone", href: CORPORATE_OFFICE.phoneHref, text: CORPORATE_OFFICE.phone },
      ],
    },
  ];

  return (
    <div className="corporate-site bg-[#FCFBF8] text-[#2D2D2D]">
      <Header />
      <main className="pt-14 md:pt-16">
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <FadeInSection>
              <SectionEyebrow>Contact</SectionEyebrow>
              <SectionHeading className="mt-3">Get in touch</SectionHeading>
              <p className="mt-4 max-w-xl font-body text-base text-[#6F6A62]">
                For reservations, guest care, or property enquiries, reach the {SITE.name} team
                through the channels below.
              </p>
            </FadeInSection>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {blocks.map((block) => (
                <FadeInSection key={block.title}>
                  <div className="border border-[#E6DDCF] bg-[#FAF7F2] p-6 sm:p-8">
                    <h2 className="font-heading text-xl text-[#2D2D2D]">{block.title}</h2>
                    <ul className="mt-5 space-y-3">
                      {block.lines.map((line, i) => (
                        <li key={`${block.title}-${i}`} className="font-body text-sm">
                          {line.href ? (
                            <a
                              href={line.href}
                              className="text-[#6F6A62] transition-colors hover:text-[#C6A86B]"
                            >
                              {line.text}
                            </a>
                          ) : (
                            <span className="text-[#6F6A62]">{line.text}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
