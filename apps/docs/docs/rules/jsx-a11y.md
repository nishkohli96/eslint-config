---
sidebar_position: 4
sidebar_label: Jsx A11y
description: Tabular list of jsx-a11y rules used in the config.
title: Jsx-A11y Rules
---

# Jsx-A11y

The below rules are not enabled below by default in the [jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules) plugin. These rules will throw an error if not enforced.

All rule names start with `jsx-a11y/` prefix.

| Rule Name |
|-|
|[anchor-ambiguous-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-ambiguous-text.md)|
|[control-has-associated-label](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/control-has-associated-label.md)|

:::note
As of June 1, 2024 [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) has not been migrated to the flat-file structure. Even the `fixupPluginRules` function from [@eslint/compat](https://eslint.org/blog/2024/05/eslint-compatibility-utilities/#using-the-compatibility-utilities) from doesn't make it work in`@nish1896/eslint-flat-config`. However, it does work in the other package.
:::