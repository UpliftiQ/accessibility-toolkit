# `@upliftiq/caption-player`

Caption-first React media player with WebVTT tracks, a navigable transcript and optional sign-language video.

The package is pre-release. See the repository [getting-started guide](../../docs/GETTING_STARTED.md) and [API reference](../../docs/API_REFERENCE.md).

```tsx
<CaptionPlayer
  title="Accessible lesson"
  videoSrc="/lesson.mp4"
  captionTracks={[
    { src: "/lesson-en.vtt", srcLang: "en", label: "English", default: true }
  ]}
  signLanguage={{ src: "/lesson-isl.mp4", label: "Indian Sign Language" }}
  transcript={cues}
/>
```
