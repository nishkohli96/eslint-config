---
sidebar_position: 1
sidebar_label: Stylistic
description: Tabular list of Stylistic js,ts, jsx and plus rules used in @nish1896/eslint-config and @nish1896/eslint-flat-config packages.
title: Stylistic Rules
---

# Stylistic

## **JS Rules**

All rule names start with `@stylistic/js` prefix.

| Rule Name | Configuration 🔧|
|-|-|
|[array-bracket-spacing](https://eslint.style/rules/js/array-bracket-spacing)||
|[arrow-parens](https://eslint.style/rules/js/arrow-parens)| as-needed |
|[arrow-spacing](https://eslint.style/rules/js/arrow-spacing)||
|[block-spacing](https://eslint.style/rules/js/block-spacing)||
|[brace-style](https://eslint.style/rules/js/brace-style)||
|[comma-spacing](https://eslint.style/rules/js/comma-spacing)||
|[dot-location](https://eslint.style/rules/js/dot-location)| `property` |
|[eol-last](https://eslint.style/rules/js/eol-last)||
|[function-call-argument-newline](https://eslint.style/rules/js/function-call-argument-newline)| `consistent` |
|[function-call-spacing](https://eslint.style/rules/js/function-call-spacing)||
|[function-paren-newline](https://eslint.style/rules/js/function-paren-newline)| `consistent` |
|[indent](https://eslint.style/rules/js/indent)| `2, { ignoredNodes: ['PropertyDefinition[decorators]', 'MethodDefinition[decorators]', 'ClassBody.body > Decorator']}` |
|[jsx-quotes](https://eslint.style/rules/js/jsx-quotes)| prefer-double |
|[key-spacing](https://eslint.style/rules/js/key-spacing)||
|[linebreak-style](https://eslint.style/rules/js/linebreak-style)||
|[max-len](https://eslint.style/rules/js/max-len)| Refer rule config in [source code](https://github.com/nishkohli96/eslint-config/blob/main/packages/eslint-flat-config/lib/js/index.mjs) |
|[max-statements-per-line](https://eslint.style/rules/js/max-statements-per-line)||
|[multiline-ternary](https://eslint.style/rules/js/multiline-ternary)| `always-multiline`|
|[no-extra-semi](https://eslint.style/rules/js/no-extra-semi)||
|[no-floating-decimal](https://eslint.style/rules/js/no-floating-decimal)||
|[no-mixed-spaces-and-tabs](https://eslint.style/rules/js/no-mixed-spaces-and-tabs)||
|[no-multi-spaces](https://eslint.style/rules/js/no-multi-spaces)||
|[no-multiple-empty-lines](https://eslint.style/rules/js/no-multiple-empty-lines)||
|[no-trailing-spaces](https://eslint.style/rules/js/no-trailing-spaces)||
|[nonblock-statement-body-position](https://eslint.style/rules/js/nonblock-statement-body-position)||
|[object-curly-newline](https://eslint.style/rules/js/object-curly-newline)| `{ minProperties: 2 }` |
|[object-curly-spacing](https://eslint.style/rules/js/object-curly-spacing)| always |
|[object-property-newline](https://eslint.style/rules/js/object-property-newline)||
|[operator-linebreak](https://eslint.style/rules/js/operator-linebreak)| before |
|[quotes](https://eslint.style/rules/js/quotes)| single |
|[rest-spread-spacing](https://eslint.style/rules/js/rest-spread-spacing)||
|[semi](https://eslint.style/rules/js/semi)||
|[semi-spacing](https://eslint.style/rules/js/semi-spacing)||
|[space-before-blocks](https://eslint.style/rules/js/space-before-blocks)| `{ functions: 'always', classes: 'always', keywords: 'always' }` |
|[space-infix-ops](https://eslint.style/rules/js/space-infix-ops)||
|[space-unary-ops](https://eslint.style/rules/js/space-unary-ops)||
|[spaced-comment](https://eslint.style/rules/js/spaced-comment)||
|[switch-colon-spacing](https://eslint.style/rules/js/switch-colon-spacing)||
|[template-curly-spacing](https://eslint.style/rules/js/template-curly-spacing)||
|[wrap-regex](https://eslint.style/rules/jsx/wrap-regex)||


## **TS Rules**

All rule names start with `@stylistic/ts` prefix.

|Rule Name| Configuration 🔧 |
|-|-|
|[block-spacing](https://eslint.style/rules/ts/block-spacing)||
|[brace-style](https://eslint.style/rules/ts/brace-style)||
|[comma-spacing](https://eslint.style/rules/ts/comma-spacing)||
|[key-spacing](https://eslint.style/rules/ts/key-spacing)||
|[member-delimiter-style](https://eslint.style/rules/ts/member-delimiter-style)||
|[no-extra-semi](https://eslint.style/rules/ts/no-extra-semi)||
|[object-curly-spacing](https://eslint.style/rules/ts/object-curly-spacing)| `always` |
|[quotes](https://eslint.style/rules/ts/quotes)| `single` |
|[semi](https://eslint.style/rules/ts/semi)||
|[space-before-blocks](https://eslint.style/rules/ts/space-before-blocks)| `{ functions: 'always', classes: 'always', keywords: 'always' }` |
|[space-infix-ops](https://eslint.style/rules/ts/space-infix-ops)||
|[type-annotation-spacing](https://eslint.style/rules/ts/type-annotation-spacing)||


## **JSX Rules**

All rule names start with `@stylistic/jsx` prefix.

|Rule Name|🔧|
|-|-|
|[jsx-closing-bracket-location](https://eslint.style/rules/jsx/jsx-closing-bracket-location)||
|[jsx-closing-tag-location](https://eslint.style/rules/jsx/jsx-closing-tag-location)||
|[jsx-curly-newline](https://eslint.style/rules/jsx/jsx-curly-newline)| `consistent` |
|[jsx-curly-spacing](https://eslint.style/rules/jsx/jsx-curly-spacing)||
|[jsx-equals-spacing](https://eslint.style/rules/jsx/jsx-curly-spacing)||
|[jsx-indent](https://eslint.style/rules/jsx/jsx-indent)| 2 |
|[jsx-indent-props](https://eslint.style/rules/jsx/jsx-indent-props)| 2 |
|[jsx-one-expression-per-line](https://eslint.style/rules/jsx/jsx-one-expression-per-line)| `{ allow: 'literal' }` |
|[jsx-pascal-case](https://eslint.style/rules/jsx/jsx-pascal-case)||
|[jsx-props-no-multi-spaces](https://eslint.style/rules/jsx/jsx-props-no-multi-spaces)||
|[jsx-self-closing-comp](https://eslint.style/rules/jsx/jsx-self-closing-comp)||
|[jsx-wrap-multilines](https://eslint.style/rules/jsx/jsx-wrap-multilines)| `parens-new-line` |


## Additional Rules

All rule names start with `@stylistic/plus` prefix. 

|[curly-newline](https://eslint.style/rules/plus/curly-newline) | `{ consistent: true }` |
|[indent-binary-ops](https://eslint.style/rules/plus/indent-binary-ops)| 2 |
|[type-generic-spacing](https://eslint.style/rules/plus/type-generic-spacing)||
|[type-named-tuple-spacing](https://eslint.style/rules/plus/type-named-tuple-spacing)||
