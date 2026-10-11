import type { MetadataIssue, SignLanguageMediaMetadata } from "./types";

export function validateSignLanguageMetadata(metadata: SignLanguageMediaMetadata): MetadataIssue[] {
  const issues: MetadataIssue[] = [];

  if (!metadata.languageName.trim()) {
    issues.push({ field: "languageName", severity: "error", message: "Name the sign language." });
  }

  if (!metadata.consentReference.trim()) {
    issues.push({ field: "consentReference", severity: "error", message: "Record a signer consent reference." });
  }

  if (!metadata.rightsStatement.trim()) {
    issues.push({ field: "rightsStatement", severity: "error", message: "Record a licence or rights statement." });
  }

  if (metadata.allowedUses.length === 0 || metadata.allowedUses.every((use) => !use.trim())) {
    issues.push({ field: "allowedUses", severity: "error", message: "Record at least one permitted use." });
  }

  if (!metadata.signerCredit?.trim()) {
    issues.push({
      field: "signerCredit",
      severity: "warning",
      message: "Add the signer’s approved public credit or document why it is withheld."
    });
  }

  if (metadata.aiTrainingAllowed === true && !metadata.aiConsentReference?.trim()) {
    issues.push({
      field: "aiConsentReference",
      severity: "error",
      message: "AI training requires a separate explicit consent reference."
    });
  }

  return issues;
}

export function canPublishSignLanguageMedia(metadata: SignLanguageMediaMetadata) {
  return validateSignLanguageMetadata(metadata).every((issue) => issue.severity !== "error");
}
