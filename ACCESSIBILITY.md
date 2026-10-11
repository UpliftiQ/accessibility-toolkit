# Accessibility policy

Accessibility is a release requirement for this project. WCAG conformance is a baseline; it is not a substitute for Deaf-led review or real-use testing.

## Core rules

1. **Use semantic HTML first.** A button must be a `<button>`. A link must have a real destination. ARIA must not replace correct native elements.
2. **Do not depend on sound.** Every alert, timer, completion state and media cue needs a visible equivalent.
3. **Support keyboard use.** Every action must be reachable and operable with a logical focus order and visible focus indicator.
4. **Treat captions as content.** Caption files need accurate timing, speaker identity and meaningful non-speech information.
5. **Provide a transcript when speech carries meaning.** Transcript cues should allow navigation back to the matching media time.
6. **Give people control.** Caption size, sign-video position, layout and motion preferences must not be locked by the component.
7. **Do not use colour alone.** Text, shape or iconography must communicate the same status.
8. **Respect zoom and reflow.** Core flows must remain usable at 200% zoom and a 320 CSS-pixel viewport without two-dimensional scrolling, except where content genuinely requires it.
9. **Respect reduced motion.** Avoid required animation and honour `prefers-reduced-motion`.
10. **Document limitations.** An honest known limitation is safer than an unsupported accessibility claim.

## Sign-language media rules

- Obtain specific consent from the signer and document allowed uses.
- Record ownership, licence, attribution and retention information.
- Do not use signed media as AI training data unless the signer gave separate, explicit consent.
- Name the sign language accurately; do not describe every signed video as universal.
- Keep the signer large enough to read hands, facial expression and upper-body movement.
- Do not cover hands or face with controls, captions or branding.
- Validate important sign-language UX changes with sign-language users.

## Required pull-request evidence

For user-interface changes, include:

- keyboard path and expected focus order;
- screenshots or a short captioned recording when visual behaviour changed;
- automated test results;
- axe results with serious and critical violations resolved;
- manual notes for zoom, reflow, contrast and reduced motion;
- Deaf-user or domain review for major changes affecting sign language, captions or visual communication.

## Testing matrix

| Area | Minimum check |
| --- | --- |
| Semantics | Browser accessibility tree and Testing Library role queries |
| Keyboard | Tab, Shift+Tab, Enter, Space, Escape and component-specific keys |
| Focus | Visible indicator, logical order and safe focus restoration |
| Captions | Valid WebVTT, correct language label and meaningful cues |
| Transcript | Correct time navigation and current-cue indication |
| Visual state | Status is not communicated by colour or audio alone |
| Zoom/reflow | 200% desktop zoom and 320 CSS-pixel viewport |
| Motion | Reduced-motion preference |
| Automation | Unit tests, axe-core and Playwright |
| Human review | Deaf-user review for major experience changes |

## Reporting an accessibility barrier

Open an accessibility issue with:

- the component and page;
- the expected result;
- what happened instead;
- browser, operating system and assistive technology, if relevant;
- steps to reproduce;
- whether the problem blocks completion.

Do not include private personal, medical or learner data in a public issue. Email `hi@upliftiq.in` for sensitive reports.
