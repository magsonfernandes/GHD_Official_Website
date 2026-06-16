export type LegalDocumentSubsection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export type LegalDocumentSection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  footer?: string;
  subsections?: readonly LegalDocumentSubsection[];
  callouts?: readonly string[];
};

export type LegalDocument = {
  title: string;
  summaryTitle: string;
  contactEmail: string;
  contactEmailHref: string;
  website?: string;
  websiteHref?: string;
  dateLabel: string;
  lastUpdated: string;
  closingNote: string;
  sections: readonly LegalDocumentSection[];
};
