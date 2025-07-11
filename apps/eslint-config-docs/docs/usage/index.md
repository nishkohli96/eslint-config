---
sidebar_label: Usage
description: What plugins does this config uses and links to the list of all rules for these plugins.
title: Usage
---

# Usage

This guide explains how to use the package with ESLint version 9 and above. It provides module imports tailored for [Node.js](https://nodejs.org/en), [React](https://react.dev/), [Vite](https://vite.dev/) or [Next.js](https://nextjs.org/) applications, ensuring compatibility and streamlined integration for diverse project environments.

Starting from **version 2** of [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) and **version 3** of [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config), both packages have been modularized into the following independent components, enabling developers to apply rules specific to their framework and whether their project uses **TypeScript**:

- `js`: [Eslint](https://eslint.org/docs/latest/rules/) and [stylistic](https://eslint.style/packages/js) rules for javascript
- `ts`: TypeScript-specific rules, including [stylistic](https://eslint.style/packages/ts) and [typescript-eslint](https://typescript-eslint.io/rules/)
- `jsx`: Rules for [React](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules), [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), [JSX A11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main?tab=readme-ov-file#supported-rules), and [stylistic JSX](https://eslint.style/packages/jsx)
- `next`:  Includes additional JSX rules along with the ones from `eslint-plugin-next` package 
- `next-ts`: [Typescript-eslint](https://typescript-eslint.io/rules/) and [Stylistic-ts](https://eslint.style/packages/ts) rules tailored for [Next.js](https://nextjs.org/) apps.

**Both packages contain the same set of rules.** 

Example applications that utilize the `eslint` and `eslint-flat-config` can be viewed [here](https://github.com/nishkohli96/eslint-config/tree/main/examples).
