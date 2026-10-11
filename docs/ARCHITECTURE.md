# Architecture

## Package boundaries

### Caption player

Owns media layout, caption tracks, transcript navigation and sign-video synchronisation. It does not fetch private data or prescribe a video-hosting provider.

### Deaf UI

Owns general visual-first interface primitives that work outside media. It has no dependency on the caption player.

### ISL tools

Owns sign-language media presentation and metadata validation. It does not attempt automatic sign-language generation, recognition or translation.

## Dependency direction

```text
Consumer application
  ├── @upliftiq/caption-player
  ├── @upliftiq/deaf-ui
  └── @upliftiq/isl-tools
          ↓
    React + browser standards
```

Public packages do not depend on each other in the first release. This keeps installation small and prevents a media feature from pulling in unrelated UI.

## Accessibility architecture

- Native controls handle core playback.
- WebVTT provides interoperable captions.
- Transcript cues are buttons because they perform a seek action.
- Sign-language video mirrors playback from the primary video and is muted to avoid duplicate audio.
- Layout and caption-size controls are explicit buttons with pressed state.
- Component status messages use polite live regions.
- CSS uses custom properties so consumers can theme without replacing semantics.

## Non-goals for the first release

- automatic speech-to-sign translation;
- avatar signing;
- sign-language recognition;
- video hosting;
- analytics or learner tracking;
- content-management or authoring backend;
- a full learning-management system.

These boundaries keep claims honest and the core packages reusable.
