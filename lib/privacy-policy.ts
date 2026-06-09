import { SITE } from "@/lib/constants";

export const PRIVACY_POLICY = {
  title: "Privacy Policy",
  summaryTitle: "GHD Hotels Data Protection Summary",
  contactEmail: SITE.email,
  contactEmailHref: SITE.emailHref,
  lastUpdated: "June 2026",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "We request our guests to read this policy carefully before sharing personal information with us. By visiting our websites or using our services, you accept the practices described in this document.",
        "This summary describes how GHD Hotels LLP and its properties — including Nivaãra Nerul — collect, use, store, and protect personal information in accordance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023 (India) and, where applicable, the General Data Protection Regulation (GDPR).",
        `If you have any questions regarding this Privacy Policy, please contact us at ${SITE.email}.`,
        "GHD Hotels reserves the right to update this policy from time to time. We encourage you to review this page periodically to stay informed of any changes.",
      ],
    },
    {
      id: "information-collected",
      title: "Personal Information We Collect",
      paragraphs: [
        "We may collect the following personal information when you interact with GHD Hotels:",
      ],
      bullets: [
        "Name, contact details, and preferred mode of communication",
        "Date of birth, where required for identification or age verification",
        "Reservation details, including arrival and departure dates, number of guests, room preferences, and tariff information",
        "Payment and billing information, including credit or debit card details processed through secure payment channels",
        "Guest preferences related to your stay, dining, or property usage",
        "Information you provide when contacting us, subscribing to our newsletter, or submitting enquiries through our website",
        "Details of individuals accompanying you during your stay, where provided for reservation purposes",
      ],
      footer:
        "When you reserve a room online, we record your stay dates, guest count, room selection, and booking details. We do not knowingly collect personal information from individuals under 18 years of age without appropriate parental or guardian consent. We do not knowingly collect sensitive personal data such as racial or ethnic origin, political opinions, religious beliefs, health information, or criminal background unless voluntarily provided by you to help us serve your specific needs during your stay.",
    },
    {
      id: "how-we-use",
      title: "How We Use Your Personal Information",
      paragraphs: [
        "We use personal information to:",
      ],
      bullets: [
        "Process and manage room reservations, enquiries, and guest requests",
        "Provide hospitality services before, during, and after your stay",
        "Communicate booking confirmations, updates, and essential service information",
        "Send promotional offers, newsletters, and property updates where you have consented to receive them",
        "Improve our websites, services, and guest experience",
        "Conduct surveys and gather feedback to enhance our operations",
        "Comply with legal, regulatory, and accounting obligations",
      ],
      footer: `You may opt out of marketing communications at any time by using the unsubscribe option in our emails or by writing to us at ${SITE.email}. You may also request that we restrict the processing of your personal information for marketing purposes.`,
    },
    {
      id: "how-we-share",
      title: "How We Share Your Personal Information",
      paragraphs: [
        "To deliver a consistent standard of service across GHD Hotels properties, we may share personal information within our group where necessary and in line with this policy.",
        "We may also share information in the following circumstances:",
      ],
      bullets: [
        "With trusted third-party service providers who assist us with reservations, payment processing, email delivery, website hosting, customer support, or analytics — solely to perform services on our behalf and under contractual confidentiality obligations",
        "With employers or corporate accounts where a company card or corporate booking arrangement applies",
        "Where required by law, court order, regulatory authority, or to protect the rights, safety, or property of GHD Hotels, our guests, employees, or the public",
        "In connection with a merger, restructuring, asset transfer, or similar corporate transaction, subject to applicable law",
      ],
      footer:
        "GHD Hotels does not sell guest personal information to third parties. Service providers are contractually prohibited from using personal information for purposes other than those specified by us.",
    },
    {
      id: "non-personal",
      title: "Non-Personal and Technical Information",
      paragraphs: [
        "We may collect non-personal or anonymous information when you visit our website, such as pages viewed, browser type, device information, referring URL, and general usage patterns.",
        "We use cookies and similar technologies to improve website functionality, remember preferences, and understand how visitors use our site. You may disable or delete cookies through your browser settings, although some features of the website may not function properly as a result.",
        "Third-party analytics or advertising tools used on our website may collect technical information subject to their own policies. GHD Hotels is not responsible for the privacy practices of independent third-party websites linked from our platform.",
      ],
    },
    {
      id: "third-party-links",
      title: "Links to Third-Party Websites",
      paragraphs: [
        "Our website may contain links to third-party websites. GHD Hotels is not responsible for the collection, use, or disclosure of information by those third parties. We recommend reviewing the privacy policies of any external websites you visit before submitting personal information.",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      paragraphs: [
        "GHD Hotels takes reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, or destruction, and to keep information accurate and up to date in accordance with applicable law.",
        "When you transact online, we seek to protect the personal information you provide through secure transmission methods. However, no method of transmission over the internet or electronic storage can be guaranteed to be completely secure.",
        "We require our service providers and affiliates to maintain appropriate confidentiality and security safeguards. Where required, we will take steps to assess and respond to suspected data security incidents in line with applicable legal obligations.",
      ],
    },
    {
      id: "data-retention",
      title: "How Long We Retain Your Information",
      paragraphs: [
        "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, including to satisfy legal, accounting, regulatory, or reporting requirements, unless a longer retention period is required or permitted by law.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights and Security Reminders",
      paragraphs: [
        "Depending on applicable law, you may have the right to access, correct, update, or request deletion of your personal information, or to object to or restrict certain processing activities. To exercise these rights, please contact us at the email address below.",
        "For your own privacy, please do not include sensitive personal information in unsecured emails. Do not send full credit card numbers or other highly sensitive details to us by email.",
        "We do not knowingly collect personal information from individuals under 18 years of age. Parents and legal guardians should not permit minors to submit personal information without prior consent.",
      ],
    },
  ],
} as const;
