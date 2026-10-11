# Security policy

## Supported versions

The project is pre-release. Security fixes will target the latest published minor version.

## Report a vulnerability

Do not open a public issue for a vulnerability that could put users, signed media or private data at risk. Email `hi@upliftiq.in` with:

- affected package and version;
- reproduction steps or proof of concept;
- expected impact;
- suggested mitigation, if known.

We will acknowledge the report, assess severity and coordinate a fix before public disclosure. Do not include real learner data or non-public signed media in the report.

## Package safety

- Public packages must not collect analytics by default.
- Components must not upload media or transcripts.
- Network behaviour must be explicit and documented.
- Dependencies are reviewed before addition.
- Release provenance and two-factor authentication should be enabled for npm maintainers.
