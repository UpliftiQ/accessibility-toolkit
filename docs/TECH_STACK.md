# Technical stack

## Architecture decision

The toolkit is a frontend library, not a hosted service. It requires no backend, database, authentication or UpliftiQ account. Applications keep control of their media, consent records, analytics and user data.

## Core stack

| Layer | Choice | Reason |
| --- | --- | --- |
| Language | TypeScript 5.9, strict mode | Stable public types and safer refactoring |
| UI | React 18/19 peer support | Broad adoption and composable component APIs |
| Web foundation | Semantic HTML, ARIA only when required | Native browser behaviour before abstraction |
| Media | `<video>`, `<track>` and WebVTT | Interoperable captions without a proprietary player |
| Styling | Plain CSS and custom properties | Portable themes with no runtime styling dependency |
| Workspace | pnpm workspaces | Efficient package linking and deterministic installs |
| Package build | tsup | ESM, CommonJS, type declarations and source maps |
| Demo/docs | Vite + React | Fast local development and static deployment |
| Component workshop | Storybook + a11y addon | Isolated states and accessibility review |
| Unit tests | Vitest + Testing Library | Behaviour-first component testing |
| Automated accessibility | axe-core | Detect common violations in component and browser tests |
| Browser tests | Playwright | Keyboard, responsive and integration testing |
| Versioning | Changesets + semantic versioning | Reviewable package releases and changelogs |
| Automation | GitHub Actions | Repeatable checks, docs deployment and releases |

## Supported output

Each package builds:

- ESM (`dist/index.js`)
- CommonJS (`dist/index.cjs`)
- TypeScript declarations (`dist/index.d.ts`)
- CSS (`dist/index.css`)
- source maps

React and React DOM remain peer dependencies so consuming applications use their existing React runtime.

## Browser support policy

The initial target is the latest two stable versions of Chromium, Firefox and Safari, plus current mobile Safari and Chrome. Support is based on available contributor testing and will be documented per release.

The implementation avoids browser-specific media APIs where a standard alternative exists. Native caption appearance differs between browsers; known differences must be documented rather than hidden.

## Data and privacy

The packages process data in the browser. They do not:

- create user accounts;
- upload videos or transcripts;
- send analytics;
- call an UpliftiQ API;
- store medical or learner data.

Applications using the toolkit remain responsible for hosting, consent, privacy and security.

## Future extensions

Possible future packages include framework adapters, caption-authoring helpers and non-React web components. They should be separate packages and must not make the core player depend on a hosted backend.
