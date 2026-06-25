import { SITE } from "@/lib/constants";
import type { LegalDocument } from "@/lib/legal-document";

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  summaryTitle: "GHD Hotels LLP · Nivaara Coco Beach, Goa",
  contactEmail: SITE.email,
  contactEmailHref: SITE.emailHref,
  dateLabel: "Last updated",
  lastUpdated: "June 2026",
  closingNote: "This Privacy Policy was last updated in June 2026.",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      paragraphs: [
        "We invite our guests to read this policy carefully before sharing any personal information with us. By visiting our website or using our services, you accept and agree to the practices described in this document.",
        "This Privacy Policy describes how GHD Hotels LLP and its properties — including Nivaara Coco Beach, Goa — collect, use, store, and protect personal information in accordance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023 (India).",
        "GHD Hotels LLP reserves the right to update this Privacy Policy from time to time. We encourage you to review this page periodically to stay informed of any changes. Continued use of our website or services following any updates constitutes your acceptance of the revised policy.",
        `For any questions regarding this Privacy Policy, please contact us at: ${SITE.email}.`,
      ],
    },
    {
      id: "information-collected",
      title: "2. Personal Information We Collect",
      paragraphs: [
        "We may collect the following personal information when you interact with GHD Hotels, its website, or any of its properties:",
      ],
      bullets: [
        "Full name, contact details (email address, phone number, postal address), and preferred mode of communication",
        "Date of birth, where required for identification or age verification purposes",
        "Job designation and business address, where relevant",
        "Reservation details, including arrival and departure dates, number of guests, room preferences, and tariff information",
        "Payment and billing information, including credit or debit card details, processed exclusively through secure payment channels",
        "Guest preferences related to your stay, dining, and property usage",
        "Information provided when contacting us, subscribing to our newsletter, or submitting enquiries through our website",
        "Details of individuals accompanying you during your stay, where provided for reservation purposes",
        "Spouse or partner name and anniversary date, where voluntarily shared to facilitate personalised service",
      ],
      footer:
        "We do not knowingly collect personal information from individuals under 18 years of age without appropriate parental or guardian consent. We do not knowingly collect sensitive personal data, such as racial or ethnic origin, political opinions, religious beliefs, health information, or criminal background, unless voluntarily provided by you to help us serve your specific needs during your stay.",
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Personal Information",
      paragraphs: ["We use the personal information we collect to:"],
      bullets: [
        "Process and manage room reservations, enquiries, and guest requests",
        "Deliver hospitality services before, during, and after your stay",
        "Communicate booking confirmations, updates, and essential service-related information",
        "Send promotional offers, newsletters, and property updates, where you have consented to receive them",
        "Maintain records of your preferences to ensure a consistent level of personalised service across GHD Hotels properties",
        "Improve our website, services, and overall guest experience",
        "Conduct surveys and gather feedback to enhance our operations",
        "Comply with applicable legal, regulatory, and accounting obligations",
        "Detect and prevent fraud and misuse of our services",
      ],
      footer: `You may opt out of marketing communications at any time by using the unsubscribe option in our emails or by writing to us at ${SITE.email}. You may also request that we restrict processing of your personal information for marketing purposes.`,
    },
    {
      id: "how-we-share",
      title: "4. How We Share Your Personal Information",
      paragraphs: [
        "To deliver a consistent standard of service across GHD Hotels properties, we may share personal information within our group where necessary and in line with this policy.",
        "We may also share information in the following circumstances:",
      ],
      bullets: [
        "With trusted third-party service providers who assist us with reservations, payment processing, email delivery, website hosting, customer support, or analytics — solely to perform services on our behalf and under contractual confidentiality obligations",
        "With your employer or corporate accounts, where a company card or corporate booking arrangement applies and billing information is required",
        "Where required by applicable law, court order, or regulatory authority, or to protect the rights, safety, or property of GHD Hotels, our guests, employees, or the public",
        "In connection with a merger, restructuring, acquisition, asset transfer, or similar corporate transaction, subject to applicable law",
      ],
      footer:
        "GHD Hotels does not sell guest personal information to any third party. Service providers are contractually prohibited from using your personal information for any purpose other than those specified by us. Any sharing within The GHD Group will ensure that your personal information is handled in accordance with this policy.",
    },
    {
      id: "cookies",
      title: "5. Cookies and Non-Personal Information",
      paragraphs: [
        "When you visit our website, we may automatically collect non-personal or anonymous information, such as the pages you visit, your browser type, device information, referring URL, IP address, and general usage patterns. This information helps us analyse trends, administer the site, and improve the user experience.",
        "We use cookies and similar technologies to:",
      ],
      bullets: [
        "Improve website functionality and remember your preferences",
        "Understand how visitors navigate and use our website",
        "Deliver content personalised to your browsing preferences",
        "Support the processing of reservations and other online requests",
      ],
      footer:
        "You may disable or delete cookies through your browser settings, although some features of our website — including the booking engine — may not function properly as a result. Third-party analytics or advertising tools on our website may collect technical information subject to their own privacy policies. GHD Hotels is not responsible for the practices of such third parties.",
    },
    {
      id: "third-party-links",
      title: "6. Links to Third-Party Websites",
      paragraphs: [
        "Our website may contain links to third-party websites for your convenience. GHD Hotels is not responsible for the collection, use, maintenance, or disclosure of information by those third parties. We recommend reviewing the privacy policies of any external websites you visit before submitting personal information.",
      ],
    },
    {
      id: "data-security",
      title: "7. Data Security",
      paragraphs: [
        "GHD Hotels takes reasonable technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction, and to keep information accurate and up to date in accordance with applicable law.",
        "When you transact online, we seek to protect the personal information you provide through secure transmission methods. However, please note that no method of transmission over the internet or electronic storage can be guaranteed to be completely secure.",
        "We require our service providers and affiliates to maintain appropriate confidentiality and security safeguards. Where required, we will take steps to assess and respond to any suspected data security incidents in accordance with applicable legal obligations.",
        "For your own protection, please do not include sensitive personal information — such as full credit card numbers — in unsecured emails sent to us.",
      ],
    },
    {
      id: "data-retention",
      title: "8. How Long We Retain Your Information",
      paragraphs: [
        "We retain personal information only for as long as is necessary to fulfil the purposes described in this policy, including to satisfy our legal, accounting, regulatory, or reporting requirements. Where a longer retention period is required or permitted by law, we will retain your information accordingly.",
      ],
    },
    {
      id: "your-rights",
      title: "9. Your Rights",
      paragraphs: [
        "Depending on applicable law, you may have the right to:",
      ],
      bullets: [
        "Access the personal information we hold about you",
        "Request correction or completion of inaccurate or incomplete information",
        "Request deletion of your personal data, under certain conditions",
        "Object to or restrict certain processing activities, including direct marketing",
        "Request portability of your personal data to another organisation or directly to you, under certain conditions",
      ],
      footer: `To exercise any of these rights, please contact us at ${SITE.email}. We will respond to your request within the timeframe required by applicable law.`,
    },
    {
      id: "controlling-information",
      title: "10. Controlling Your Personal Information",
      paragraphs: [
        "You retain control over the personal information you share with us. In addition to the rights listed above:",
      ],
      bullets: [
        "You may opt out of promotional communications at any time",
        "You may request that we update or correct any information we hold about you that you believe to be inaccurate",
        "You may withdraw consent for non-essential data processing at any time, without affecting the lawfulness of processing based on consent prior to its withdrawal",
      ],
      footer:
        "We will not sell, distribute, or lease your personal information to third parties unless we have your explicit permission or are required by law to do so.",
    },
    {
      id: "contact-us",
      title: "11. Contact Us",
      paragraphs: [
        "For privacy-related enquiries, requests to exercise your rights, or any questions regarding this policy, please contact us at:",
        "GHD Hotels LLP",
        `Email: ${SITE.email}`,
      ],
    },
  ],
};
