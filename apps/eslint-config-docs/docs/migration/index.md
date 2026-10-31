# Migration Guide

**This migration guide will help you to use the latest version of the config.**

ESLint `v9` introduced the flat config file, so a separate package, [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config), was created from [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config) with the same set of rules. The latest major version of this package is built for ESLint `v10`.

## Which package and version should I use?

| ESLint version | Package | Version |
|-|-|-|
| `8.57.1` or below | [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config) | `3.x` (deprecated, no further updates) |
| `9` | [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) | `3.x` (deprecated, see the [ESLint 9 usage guide](../usage/eslint-9.md)) |
| `10` and above | [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) | `4.x` and above |

The legacy ESLint `v8` configuration is only supported till **version 3** of `@nish1896/eslint-config`.

## Migration guides

Pick the guide that matches where you are coming from:

- **ESLint 8 to 9:** [Migrate to eslint v9](./eslint-8_to_9.md), switch from `@nish1896/eslint-config` to `@nish1896/eslint-flat-config`.
- **ESLint 9 to 10:** [Migrate from v3 to v4](./eslint-flat-config/v3_to_v4.md), upgrade `@nish1896/eslint-flat-config` for ESLint `v10`. This needs Node.js `^20.19.0 || ^22.13.0 || >=24`.
- **Older releases of `@nish1896/eslint-flat-config`:** [v2 to v3](./eslint-flat-config/v2_to_v3.md) and [v1 to v2](./eslint-flat-config/v1_to_v2.md).

If you are on ESLint 8, go through the ESLint 8 to 9 guide first, then the v3 to v4 guide.

## About `@stylistic/eslint-plugin`

[@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin) is used by both packages for the formatting rules. Its language-specific plugins (`@stylistic/eslint-plugin-js`, `-ts`, `-jsx` and `-plus`) are deprecated and merged back into the single plugin since its **v5**. `@nish1896/eslint-flat-config` uses the unified plugin, see the [v2 to v3 guide](./eslint-flat-config/v2_to_v3.md).
