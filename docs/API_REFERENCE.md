# API reference

The API is pre-release and may change before `1.0.0`.

## `@upliftiq/caption-player`

### `CaptionPlayer`

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Accessible title for the media experience |
| `videoSrc` | `string` | Yes | Primary video URL |
| `poster` | `string` | No | Primary video poster image |
| `captionTracks` | `CaptionTrack[]` | No | WebVTT caption tracks |
| `signLanguage` | `SignLanguageSource` | No | Optional sign-language video and accessible label |
| `transcript` | `TranscriptCue[]` | No | Clickable transcript cues |
| `defaultLayout` | `LayoutMode` | No | `side-by-side`, `picture-in-picture`, `primary-only` or `sign-only` |
| `defaultTranscriptOpen` | `boolean` | No | Initial transcript visibility |
| `onLayoutChange` | `(layout) => void` | No | Called after a user changes layout |
| `className` | `string` | No | Additional class on the root element |

### `CaptionTrack`

```ts
interface CaptionTrack {
  src: string;
  srcLang: string;
  label: string;
  default?: boolean;
}
```

### `TranscriptCue`

```ts
interface TranscriptCue {
  id: string;
  start: number;
  end: number;
  text: string;
  speaker?: string;
  description?: string;
}
```

## `@upliftiq/deaf-ui`

### `VisualAlert`

Shows a visible message with status semantics. Use `variant="danger"` only for urgent information.

### `StepProgress`

Shows labelled progress through a known sequence. The current step uses `aria-current="step"`.

### `VisualTimer`

Shows elapsed progress and readable remaining time. It intentionally produces no sound.

## `@upliftiq/isl-tools`

### `SignLanguageVideo`

Renders a labelled sign-language video with optional caption track and metadata summary.

### `validateSignLanguageMetadata`

Checks whether language, signer consent and usage rights have been recorded. It supports governance; it is not a legal determination.
