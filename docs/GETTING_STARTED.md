# Getting started

## Status

The packages are pre-release. Use the workspace for development until the first npm release.

## Local development

```bash
git clone https://github.com/upliftiq/accessibility-toolkit.git
cd accessibility-toolkit
corepack enable
pnpm install
pnpm check
pnpm dev
```

The demo runs at the URL printed by Vite.

## After npm publication

Install only the packages you need:

```bash
pnpm add @upliftiq/caption-player
```

Import the component and its CSS:

```tsx
import { CaptionPlayer } from "@upliftiq/caption-player";
import "@upliftiq/caption-player/styles.css";
```

## Prepare accessible media

You need:

1. A primary video file
2. At least one WebVTT caption track when speech or meaningful sound exists
3. A transcript when users need reading and time navigation
4. An optional sign-language video with documented consent and rights

Example caption file:

```vtt
WEBVTT

00:00:00.000 --> 00:00:03.500
EDUCATOR: Plants use sunlight to create energy.

00:00:03.500 --> 00:00:06.500
[Graphic shows water moving from roots to leaves]
```

## Add the player

```tsx
<CaptionPlayer
  title="Introduction to photosynthesis"
  videoSrc="/media/lesson.mp4"
  captionTracks={[
    {
      src: "/captions/lesson-en.vtt",
      srcLang: "en",
      label: "English",
      default: true
    }
  ]}
  signLanguage={{
    src: "/media/lesson-isl.mp4",
    label: "Indian Sign Language explanation"
  }}
  transcript={transcriptCues}
/>
```

## Test before release

- Complete the whole flow with only a keyboard.
- Confirm visible focus and logical focus order.
- Check the caption language and timing.
- Confirm the transcript seeks to the correct moment.
- Test 200% zoom and a 320 CSS-pixel viewport.
- Enable reduced motion and high contrast.
- Run `pnpm test` and `pnpm test:e2e`.
- Arrange Deaf-user review for major caption or sign-language experiences.

Read [ACCESSIBILITY_TESTING.md](./ACCESSIBILITY_TESTING.md) for the complete workflow.
