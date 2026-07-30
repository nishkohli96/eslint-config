# CLAUDE.md

## Repository Guidelines

This repository contains `@nish1896/eslint-config` and `@nish1896/eslint-flat-config` —
shareable ESLint + Stylistic rule configs, published as separate npm packages:

- `packages/eslint-config` — legacy (`.eslintrc`) config for ESLint 8 and below.
- `packages/eslint-flat-config` — flat config for ESLint 9 and above.
- `apps/eslint-config-docs` — Docusaurus site documenting both configs.
- `examples/eslint-v8/*` and `examples/eslint-v9/*` — sample projects (js, next, react, vite) used to manually verify each config against real lint runs.
- `changelog/vX.md` — per-major-version changelog.

Package source lives directly under each package's `lib/` directory (no separate build step
for the config files themselves).

## Pull Request Guidelines

- Review every pull request for:
  - Correctness of config file for each module - `js`, `ts`, `jsx`, `next`, `next-ts`
  - Compatability with package dependencies
  - Performance
  - Backward compatibility
  - Documentation updates

- Flag any unnecessary complexity or duplicated code.
- Suggest simpler implementations when possible.
- Ensure public APIs remain consistent.

If any further commits are pushed after raising a pull request, review them as well to ensure that any new sideeffects or bugs don't get introduced.

## Branch Naming

Feature branches must start with:

v_x.y.z or v_x.y.z_<description>

Examples:

v_3.4.1_add-date-picker
v_1.2.10_fix-autocomplete-validation
v_2.5.1_refactor-form-provider

## Pull Request Title

PR titles must follow:

vX.Y.Z - <message>

Examples:

v4.2.0 - Update dependencies
v5.0.0 - Remove xyz rule

If the PR title doesn't follow this format, suggest a corrected title that summarizes the up to three most significant changes in the pull request.

## Merge Strategy

Always recommend **Squash and Merge**.

The final squash commit message should match the PR title.


## Documentation

Whenever a public API changes, raise a PR with:
- Updated documentation
- Updated demo examples
- Updated changelog when applicable in `changelog/vX.md` where `X` is the version number.


## Before Approving

Ensure:

- Lint can be run for both packages on the corresponding directories, even if there are linting errors

If anything above fails, request changes instead of approving.
