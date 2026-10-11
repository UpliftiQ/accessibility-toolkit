# Contributing

Thank you for helping build digital experiences that do not depend on sound. Contributions from Deaf and hard-of-hearing people, ISL educators, developers, designers, caption editors, researchers and technical writers are all valuable.

## Before you start

1. Read [ACCESSIBILITY.md](./ACCESSIBILITY.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
2. Search existing issues and discussions.
3. For a large change, open a proposal before implementation.
4. Describe the user need—not only the technical solution.

## Local setup

```bash
git clone https://github.com/upliftiq/accessibility-toolkit.git
cd accessibility-toolkit
corepack enable
pnpm install
pnpm check
pnpm dev
```

Use Node 22.13 or later and pnpm 11 or later.

## Development commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the documentation/demo application |
| `pnpm storybook` | Run isolated component stories |
| `pnpm typecheck` | Check every workspace package |
| `pnpm test` | Run component and accessibility tests |
| `pnpm test:e2e` | Run Playwright browser tests |
| `pnpm build` | Build public packages and documentation |
| `pnpm check` | Run type checks, tests and builds |
| `pnpm changeset` | Record a public package change |

## Contribution paths

- **Code:** components, tests, build tooling and performance
- **Accessibility testing:** keyboard, captions, reflow, contrast and assistive technology
- **Deaf/ISL review:** language, signing presentation, visual communication and cultural assumptions
- **Documentation:** guides, examples, API explanations and captioned tutorials
- **Design:** interaction states, responsive behaviour and user preferences
- **Bug reports:** clear reproduction steps and impact

## Branch and commit guidance

- Branch from `main`.
- Use a short descriptive name such as `fix/transcript-focus`.
- Keep unrelated changes in separate pull requests.
- Write commits in the imperative form, such as `Fix transcript focus restoration`.
- Do not commit generated `dist`, coverage or report directories.

## Pull-request requirements

- Explain the user problem and the chosen behaviour.
- Add or update tests.
- Update public documentation and types.
- Include a changeset for package behaviour changes.
- Complete the accessibility checklist in the pull-request template.
- Avoid accessibility claims that have not been tested.

Maintainers may request Deaf-user review before merging changes that affect captions, transcripts, sign-language media or visual communication.

## Language and respect

- Use “Deaf and hard-of-hearing people” unless a person or community prefers different language.
- Do not use deficit labels such as “deaf-mute.”
- Do not describe one sign language as universal.
- Do not speak for a community without evidence or participation.
- Credit research, code and sign-language expertise.

## Need help?

Use GitHub Discussions for implementation questions after the repository launches. Use Issues for defined bugs and features. For sensitive accessibility or security concerns, email `hi@upliftiq.in`.
