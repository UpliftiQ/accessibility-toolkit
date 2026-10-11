# Caption and transcript authoring

## Good captions

- Match the spoken meaning accurately.
- Identify speakers when the speaker is not visually obvious.
- Include meaningful sounds such as `[applause]` or `[alarm flashes and sounds]`.
- Use readable line lengths and natural phrase breaks.
- Avoid placing important captions over faces, hands or essential diagrams.
- Name each track clearly, such as `English` or `Hindi`.

## Transcripts

A transcript should preserve the meaning of the media and allow users to return to the relevant time. Add descriptions when a visual event carries information not present in speech.

```ts
const transcript = [
  {
    id: "intro-1",
    start: 0,
    end: 4.8,
    speaker: "Educator",
    text: "Plants use sunlight to create energy.",
    description: "A diagram shows sunlight reaching a green leaf."
  }
];
```

## Validation

WebVTT syntax validation does not prove caption quality. Review timing, meaning, spelling, speaker identity and placement with real users.
