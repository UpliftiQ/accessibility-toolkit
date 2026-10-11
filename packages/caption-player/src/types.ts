export interface CaptionTrack {
  /** URL of a valid WebVTT file. */
  src: string;
  /** BCP 47 language tag, for example `en` or `hi`. */
  srcLang: string;
  /** Human-readable language label shown by the browser. */
  label: string;
  /** Mark only one track as the default. */
  default?: boolean;
}

export interface TranscriptCue {
  id: string;
  /** Start time in seconds. */
  start: number;
  /** End time in seconds. */
  end: number;
  text: string;
  speaker?: string;
  /** Essential visual or non-speech context. */
  description?: string;
}

export interface SignLanguageSource {
  src: string;
  /** Name the sign language in the label whenever possible. */
  label: string;
  poster?: string;
}

export type LayoutMode =
  | "side-by-side"
  | "picture-in-picture"
  | "primary-only"
  | "sign-only";

export type CaptionSize = "small" | "medium" | "large";

export interface CaptionPlayerProps {
  title: string;
  videoSrc: string;
  poster?: string;
  captionTracks?: CaptionTrack[];
  signLanguage?: SignLanguageSource;
  transcript?: TranscriptCue[];
  defaultLayout?: LayoutMode;
  defaultTranscriptOpen?: boolean;
  className?: string;
  onLayoutChange?: (layout: LayoutMode) => void;
}
