import { LegalDocumentContent } from "@/components/LegalDocumentContent";
import { TERMS_AND_CONDITIONS } from "@/lib/terms-and-conditions";

export function TermsAndConditionsContent() {
  return <LegalDocumentContent document={TERMS_AND_CONDITIONS} />;
}
