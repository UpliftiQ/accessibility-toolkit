# Releasing packages

## Maintainer checklist

1. Confirm CI is green on `main`.
2. Confirm user-facing changes include Changesets.
3. Review generated changelogs and package versions.
4. Run `pnpm check` from a clean checkout.
5. Confirm npm package contents with `pnpm --filter <package> pack --dry-run`.
6. Publish through the release workflow.
7. Verify package provenance, documentation and GitHub release notes.
8. Announce known limitations with the release.

## Required repository secrets

The provided release workflow uses `NPM_TOKEN`. Configure a restricted automation token for the `@upliftiq` scope. Prefer npm trusted publishing when the organisation has completed the required npm configuration, then update the workflow and remove the long-lived token.

Never place tokens in repository files, issues, logs or pull requests.
