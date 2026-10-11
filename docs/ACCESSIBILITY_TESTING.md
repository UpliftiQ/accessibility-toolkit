# Accessibility testing workflow

## 1. Automated component test

Use Testing Library queries that match how a person finds controls:

```tsx
const button = screen.getByRole("button", { name: /show transcript/i });
await user.click(button);
expect(screen.getByRole("region", { name: /transcript/i })).toBeVisible();
```

Run axe-core against each important state. Resolve serious and critical violations before review.

## 2. Keyboard review

- Tab through the complete component.
- Confirm focus is visible at every stop.
- Confirm order follows visual and reading order.
- Use Enter and Space on buttons.
- Confirm transcript cues seek media without trapping focus.
- Confirm native video controls remain usable.

## 3. Visual review

- 200% browser zoom
- 320 CSS-pixel viewport
- high-contrast/forced-colours mode
- dark and light consumer themes
- reduced-motion preference
- long labels and translated content

## 4. Media review

- correct caption language and label;
- caption timing and reading speed;
- speaker changes and meaningful sound cues;
- signer's hands, face and upper body remain visible;
- controls and captions do not cover signing;
- seek, pause and playback-rate changes keep videos acceptably synchronised.

## 5. Human review

Automated testing cannot judge sign-language quality, caption meaning or visual communication. Major changes require review by people who use the affected experience.

Record who reviewed, what tasks they completed, the findings and unresolved limitations. Do not publish private participant data.
