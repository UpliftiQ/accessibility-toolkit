<div align="center">

# UpliftiQ Accessibility Toolkit

**Deaf-led, open-source React components for caption-first, sign-language-ready and visual-first digital experiences.**

[Documentation](./docs/GETTING_STARTED.md) · [Accessibility rules](./ACCESSIBILITY.md) · [Contributing](./CONTRIBUTING.md) · [Roadmap](./docs/ROADMAP.md)

</div>

> **Project status:** pre-release. The repository is ready for public development, but the packages are not yet published to npm. Public APIs may change before `1.0.0`.

## Why this exists

Many products add captions, transcripts and sign-language video after the main interface has already been designed. That produces small overlays, incomplete keyboard support and visual information that is difficult to control.

This toolkit makes those patterns reusable. It helps teams begin with native web standards and build interfaces that do not depend on sound alone.

The World Health Organization reports that more than 5% of the world’s population—430 million people—require rehabilitation for disabling hearing loss. This figure is not a count of Deaf sign-language users. See the [WHO fact sheet](https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss).

## Packages

| Package | Purpose |
| --- | --- |
| [`@upliftiq/caption-player`](./packages/caption-player) | Caption-first media, transcript navigation and optional sign-language video layouts |
| [`@upliftiq/deaf-ui`](./packages/deaf-ui) | Visual alerts, step progress and visual timers that do not rely on sound |
| [`@upliftiq/isl-tools`](./packages/isl-tools) | ISL-ready media components, metadata types and consent/rights validation helpers |

## Planned installation

After the first npm release, users can choose their package manager:

```bash
# pnpm
pnpm add @upliftiq/caption-player @upliftiq/deaf-ui @upliftiq/isl-tools

# npm
npm install @upliftiq/caption-player @upliftiq/deaf-ui @upliftiq/isl-tools

# Yarn
yarn add @upliftiq/caption-player @upliftiq/deaf-ui @upliftiq/isl-tools
```

During pre-release development, clone the repository and use the workspace:

```bash
git clone https://github.com/upliftiq/accessibility-toolkit.git
cd accessibility-toolkit
corepack enable
pnpm install
pnpm check
pnpm dev
```

## First component

```tsx
import { CaptionPlayer } from "@upliftiq/caption-player";
import "@upliftiq/caption-player/styles.css";

export function Lesson() {
  return (
    <CaptionPlayer
      title="Introduction to photosynthesis"
      videoSrc="/lesson.mp4"
      captionTracks={[
        {
          src: "/lesson-en.vtt",
          srcLang: "en",
          label: "English",
          default: true
        }
      ]}
      signLanguage={{
        src: "/lesson-isl.mp4",
        label: "Indian Sign Language explanation"
      }}
      transcript={[
        {
          id: "cue-1",
          start: 0,
          end: 5.2,
          speaker: "Educator",
          text: "Plants use sunlight to create energy."
        }
      ]}
    />
  );
}
```

The player uses the browser’s native media controls and WebVTT caption support. The optional sign-language video follows the main video’s play, pause, seek and playback-rate state.

## Who can use it

- Developers building education, work, event, public-service or community products
- Deaf and hard-of-hearing people who need controllable visual access
- NGOs and community organisations producing accessible training
- Schools and universities publishing caption-first learning content
- Businesses creating accessible onboarding and internal learning
- Public institutions sharing information that cannot depend on audio alone

Read [adoption guides](./docs/ADOPTION_GUIDES.md) for practical examples.

## Technology

- TypeScript with strict public types
- React with semantic native HTML
- HTML media elements and WebVTT captions
- CSS custom properties and scoped component styles
- pnpm workspaces for the monorepo
- tsup for package builds
- Vite for the documentation/demo application
- Storybook with its accessibility addon
- Vitest, Testing Library and axe-core for component tests
- Playwright and `@axe-core/playwright` for browser tests
- Changesets and GitHub Actions for releases

There is no required backend, database or account system. These are frontend primitives designed to work inside any React application. See [the full technical stack](./docs/TECH_STACK.md).

## Accessibility definition of done

A public component is not complete until:

- semantic HTML is used before ARIA;
- every action works by keyboard with visible focus;
- no information depends on sound, colour or motion alone;
- captions and transcripts expose speaker and meaningful audio context;
- zoom, narrow screens, reduced motion and high contrast are considered;
- automated checks, manual keyboard review and relevant Deaf-user review are complete;
- limitations are documented honestly.

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for the complete rules.

## Repository map

```text
accessibility-toolkit/
├── packages/
│   ├── caption-player/
│   ├── deaf-ui/
│   └── isl-tools/
├── apps/docs/
├── docs/
├── stories/
├── tests/e2e/
├── .github/
├── ACCESSIBILITY.md
├── CONTRIBUTING.md
└── GOVERNANCE.md
```

## Open-source boundary

This repository contains reusable accessibility infrastructure, examples, tests and documentation. It does not contain UpliftiQ learner data, proprietary course content, private platform services or internal AI systems.

## Contributing

Code is not the only valuable contribution. Deaf reviewers, ISL educators, caption editors, accessibility testers, designers and technical writers are welcome.

Start with [CONTRIBUTING.md](./CONTRIBUTING.md), then read the [Code of Conduct](./CODE_OF_CONDUCT.md).

Repository owners should follow the [GitHub launch checklist](./docs/GITHUB_LAUNCH_CHECKLIST.md) before announcing the project or publishing npm packages.

## Licence

[MIT](./LICENSE) © UpliftiQ
