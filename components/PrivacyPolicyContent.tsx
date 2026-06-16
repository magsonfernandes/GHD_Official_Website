import { LegalDocumentContent } from "@/components/LegalDocumentContent";
import { PRIVACY_POLICY } from "@/lib/privacy-policy";

export function PrivacyPolicyContent() {
  return <LegalDocumentContent document={PRIVACY_POLICY} />;
}
