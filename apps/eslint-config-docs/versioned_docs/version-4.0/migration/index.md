# Migration Guide

**This migration guide will help you to use the latest version of the config.** 

Due to eslint v9, the which introduced a flat-config file, another package had to be created with same set of rules to make this repository one of the earliest eslint shareable configs to be compatible with the flat file structure.

- If you are using eslint version ***8.57.1 or below***, use [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config). 

- For eslint version ***9***, use [@nish1896/eslint-flat-config@latest-v3](https://www.npmjs.com/package/@nish1896/eslint-flat-config). The latest major version of this package requires ESLint **v10**, see the [v3 to v4 migration guide](/migration/eslint-flat-config/v3_to_v4).

Similarly, the core package, [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin) which both the configuration packages relied on, has been further split into the following specialized packages:

- [@stylistic/eslint-plugin-js](https://eslint.style/packages/js)
- [@stylistic/eslint-plugin-ts](https://eslint.style/packages/ts)
- [@stylistic/eslint-plugin-jsx](https://eslint.style/packages/jsx)
- [@stylistic/eslint-plugin-plus](https://eslint.style/packages/plus)

The legacy ESLint configuration (v8 and below) is only supported till version 3 of this package.

This guide will help you migrate to ESLint v9 and transition to the latest recommended version of [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config).