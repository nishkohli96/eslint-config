---
sidebar_position: 1
sidebar_label: v2 to v3
description: Migration guide from v2 to v3 for @nish1896/eslint-flat-config.
---

# Migration from v2 to v3

With the release of `@stylistic/eslint-plugin` **v5**, all language-specific plugins (like `@stylistic/eslint-plugin-js`) have been deprecated and merged into a single unified plugin. While the older plugins will continue to function, they will no longer receive updates or new features.

To align with this upstream change, `@nish1896/eslint-flat-config` has been updated in **v3** to support the unified plugin.

> ✅ **There are no breaking changes.**  
> Simply upgrade to the latest version using your package manager:

```bash
# npm
npm install @nish1896/eslint-flat-config@latest  --save-dev

# yarn
yarn add -D @nish1896/eslint-flat-config@latest

# pnpm
pnpm add -D @nish1896/eslint-flat-config@latest
```