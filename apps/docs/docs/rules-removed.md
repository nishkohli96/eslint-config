---
sidebar_position: 6
sidebar_label: Rules Removed
description: List of rules that were once included, but later removed from this config.
---

### **Rules removed after initial or subsequent testing**

These rules were once included, but later removed from this config, due to their inconsistency in certain scenarios after trying out in various node and react projects. You will need to manually add them in the `rules` of your .eslintrc, if needed. 

| Rule Name | Reason |
|-|-|
|[@stylistic/array-bracket-newline](https://eslint.style/rules/default/array-bracket-newline) & [@stylisticarray-element-newline](https://eslint.style/rules/default/array-element-newline)| Sometimes smaller array elements with more than 4 items can be wrapped in one line, whereas 3 items with longer character length, like list of urls need to be wrapped in new line | 
|[@stylistic/lines-around-comment](https://eslint.style/rules/default/lines-around-comment)| Sometimes reqd, when writing block comments above functions, but don't need when writing block comment between 2 lines of code |
|[@stylistic/newline-per-chained-call](https://eslint.style/rules/default/newline-per-chained-call) | This rule with default chain length 2 resulted in awkward readability when chaining operations |
|[@typescript-eslint/ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.mdx) | A good developer will avoid writing ts-comments, except in extreme cases. Let's not cause them trouble to write one more line |
|[@typescript-eslint/no-this-alias](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md) | Sometimes `this` is reqd in fn context. eg. MongooseSchema.pre() |
|[id-denylist](https://eslint.org/docs/latest/rules/id-denylist) | Use if required. eg. "id-denylist": ["warn", "e", "cb", 'callback']|
[id-length](https://eslint.org/docs/latest/rules/id-length)| Warning when using `_` for unused vars |
|[jsx-first-prop-new-line](https://eslint.style/rules/default/jsx-first-prop-new-line)||
|[multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style)| The default setting `starred-block` read commented code as a comment itself, which made it difficult to uncomment the code
|[no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs) | Same rule in [eslint.style](https://eslint.style/rules/default/no-mixed-spaces-and-tabs) |
|[no-shadow](https://eslint.org/docs/latest/rules/no-shadow) | Gave unwanted warnings when using enums |
|[no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars) | `@typescript-eslint/no-unused-vars` does it better |
|[react/react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md) | React v17+ doesn't require `import React from react` |
|[react/jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)| Causing issues with flat-config while importing react-plugin |
|[sort-keys](https://eslint.org/docs/latest/rules/sort-keys)| Sometimes more crucial object keys should come first |
[sort-vars](https://eslint.org/docs/latest/rules/sort-vars)| Same as above |
