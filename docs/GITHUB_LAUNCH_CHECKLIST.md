# GitHub launch checklist

Use this checklist for the new official repository: `github.com/upliftiq/accessibility-toolkit`.

## 1. Create the organisation and repository

- Create the GitHub organisation with the exact handle `upliftiq`.
- Create a public repository named `accessibility-toolkit`.
- Do not import the old personal repository as the new project history.
- Upload this repository so `README.md`, not an extra parent folder, is at the repository root.
- Use `main` as the default branch.
- Add the description: `Deaf-led React toolkit for caption-first, sign-language-ready digital experiences.`
- Add topics: `accessibility`, `captions`, `deaf`, `indian-sign-language`, `react`, `typescript`, `webvtt`.

## 2. Configure community features

- Enable Issues and Discussions.
- Set the support and contact links.
- Confirm the bug, accessibility and feature issue forms appear correctly.
- Add trusted maintainers with the minimum required permissions.
- Require two-factor authentication for organisation members.

## 3. Protect `main`

- Require pull requests before merge.
- Require at least one approving review.
- Require the CI checks.
- Dismiss stale approvals when important code changes.
- Block force pushes and branch deletion.
- Allow maintainers to bypass only for documented emergencies.

## 4. Configure GitHub Pages

- Set Pages source to GitHub Actions.
- Run the documentation workflow.
- Verify keyboard navigation, captions, transcript controls and mobile layout.
- Replace placeholder media before presenting it as a real ISL example.

## 5. Prepare npm

- Create or verify the npm organisation scope `@upliftiq`.
- Enable two-factor authentication for maintainers.
- Grant package publishing only to release maintainers.
- Add a restricted `NPM_TOKEN` repository secret for the included workflow, or configure npm trusted publishing and update the workflow.
- Run package dry-runs and review exact tarball contents.
- Do not publish until package names and README links are confirmed.

## 6. First public development milestone

- Open requirement issues from the roadmap.
- Label small tasks as `good first issue` only when they are truly bounded.
- Publish the first architecture decision.
- Invite Deaf reviewers and accessibility contributors before stabilising the API.
- Record known limitations publicly.

## 7. First npm release

- Complete `pnpm check` on a clean checkout.
- Complete browser tests in CI.
- Include Changesets for every public package.
- Publish an alpha version first, such as `0.1.0-alpha.0`, if APIs are still being tested.
- Verify installation in a separate empty React application.
- Announce only verified features; do not claim automatic sign-language translation or unsupported compliance.
