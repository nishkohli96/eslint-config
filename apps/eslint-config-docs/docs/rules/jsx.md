---
sidebar_position: 4
sidebar_label: JSX
description: Tabular list of jsx and jsx-a11y rules used in @nish1896/eslint-config and @nish1896/eslint-flat-config packages.
title: JSX and JSX-A11y Rules
---

# JSX Rules

JSX Rules for [React](https://react.dev/), [Vite](https://vite.dev/) and [Next.js](https://nextjs.org/) apps. 

## jsx-a11y

The below rules are not enabled below by default in the [jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules) plugin and will throw an error if not enforced.

**All rule names start with `jsx-a11y/` prefix.**

| Rule Name |
|-|
|[anchor-ambiguous-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-ambiguous-text.md)|
|[control-has-associated-label](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/control-has-associated-label.md)|

## eslint

| Rule Name |⚠️|
|-|-|
|[no-alert](https://eslint.org/docs/latest/rules/no-alert)|✅|


## eslint-plugin-react

**All rule names start with `react/` prefix.**

| Rule Name |⚠️|❌|🔧|
|-|-|-|-|
|[react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)||✅||
|[jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)|✅|| `{ extensions: ['.tsx', '.jsx'] }` |
