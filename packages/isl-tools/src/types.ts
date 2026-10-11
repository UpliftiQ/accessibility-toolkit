export interface SignLanguageCaptionTrack {
  src: string;
  srcLang: string;
  label: string;
  default?: boolean;
}

export interface SignLanguageMediaMetadata {
  /** Full language name, for example `Indian Sign Language`. */
  languageName: string;
  /** Optional BCP 47/ISO language tag used by the publishing system. */
  languageTag?: string;
  /** Public credit approved by the signer. */
  signerCredit?: string;
  /** Internal or public reference proving the signer approved this use. */
  consentReference: string;
  /** Licence or rights statement for this media. */
  rightsStatement: string;
  /** Explicit permitted contexts, for example `education` or `web publication`. */
  allowedUses: string[];
  /** Machine-learning use is denied unless this is explicitly true. */
  aiTrainingAllowed?: boolean;
  /** Separate consent reference required when AI training is allowed. */
  aiConsentReference?: string;
  recordedAt?: string;
  region?: string;
}

export interface MetadataIssue {
  field: keyof SignLanguageMediaMetadata;
  severity: "error" | "warning";
  message: string;
}

export interface SignLanguageVideoProps {
  title: string;
  videoSrc: string;
  poster?: string;
  description?: string;
  captions?: SignLanguageCaptionTrack[];
  metadata?: SignLanguageMediaMetadata;
  className?: string;
}
