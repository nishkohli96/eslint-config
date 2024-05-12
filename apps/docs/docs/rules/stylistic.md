---
sidebar_position: 1
sidebar_label: Stylistic
description: Tabular list of Stylistic js and jsx rules used in the config.
---

# Stylistic rules

**All rule names start with `@stylistic/` prefix.** 

## **Javascript (js)**

These rules are included in the `@nish1896/eslint-config/js` package.

|Rule Name| Configuration 🔧|
|-|-|
|[array-bracket-newline](https://eslint.style/rules/default/array-bracket-newline) | `{ multiline: true, minItems: 4 }` |
|[array-bracket-spacing](https://eslint.style/rules/default/array-bracket-spacing)||
|[array-element-newline](https://eslint.style/rules/default/array-element-newline)| `{ multiline: true, minItems: 4 }` |
|[arrow-parens](https://eslint.style/rules/default/arrow-parens)| as-needed |
|[arrow-spacing](https://eslint.style/rules/default/arrow-spacing)||
|[block-spacing](https://eslint.style/rules/default/block-spacing)||
|[brace-style](https://eslint.style/rules/default/brace-style)||
|[comma-dangle](https://eslint.style/rules/default/comma-dangle)| `{ arrays: 'never', objects: 'never', imports: 'never', exports: 'never' functions: 'never' }` |
|[comma-spacing](https://eslint.style/rules/default/comma-spacing)||
|[eol-last](https://eslint.style/rules/default/eol-last)||
|[function-call-argument-newline](https://eslint.style/rules/default/function-call-argument-newline)| consistent |
|[function-paren-newline](https://eslint.style/rules/default/function-paren-newline)|| consistent |
|[indent](https://eslint.style/rules/default/indent)|| 2 |
|[indent-binary-ops](https://eslint.style/rules/default/indent-binary-ops)| 2 |
|[key-spacing](https://eslint.style/rules/default/key-spacing)||
|[linebreak-style](https://eslint.style/rules/default/linebreak-style)||
|[newline-per-chained-call](https://eslint.style/rules/default/newline-per-chained-call)||
|[no-extra-semi](https://eslint.style/rules/default/no-extra-semi)||
|[no-floating-decimal](https://eslint.style/rules/default/no-floating-decimal)||
|[no-mixed-spaces-and-tabs](https://eslint.style/rules/default/no-mixed-spaces-and-tabs)||
|[no-multi-spaces](https://eslint.style/rules/default/no-multi-spaces)||
|[no-multiple-empty-lines](https://eslint.style/rules/default/no-multiple-empty-lines)||
|[no-trailing-spaces](https://eslint.style/rules/default/no-trailing-spaces)||
|[object-curly-newline](https://eslint.style/rules/default/object-curly-newline)| `{ multiline: true }` |
|[object-curly-spacing](https://eslint.style/rules/default/object-curly-spacing)| always |
|[object-property-newline](https://eslint.style/rulesobject-property-newline)||
|[operator-linebreak](https://eslint.style/rules/default/operator-linebreak)| before |
|[quotes](https://eslint.style/rules/default/quotes)| single |
|[rest-spread-spacing](https://eslint.style/rules/default/rest-spread-spacing)||
|[semi-spacing](https://eslint.style/rules/default/semi-spacing)||
|[space-before-blocks](https://eslint.style/rules/default/space-before-blocks)| `{ functions: 'always', classes: 'always', keywords: 'always' }` |
|[space-infix-ops](https://eslint.style/rules/default/space-infix-ops)||
|[space-unary-ops](https://eslint.style/rules/default/space-unary-ops)||
|[spaced-comment](https://eslint.style/rules/default/spaced-comment)||
|[switch-colon-spacing](https://eslint.style/rules/default/switch-colon-spacing)||
|[template-curly-spacing](https://eslint.style/rules/default/template-curly-spacing)||
|[type-annotation-spacing](https://eslint.style/rules/default/type-annotation-spacing)||
|[type-generic-spacing](https://eslint.style/rules/default/type-generic-spacing)||
|[type-named-tuple-spacing](https://eslint.style/rules/default/type-named-tuple-spacing)||
|[wrap-regex](https://eslint.style/rules/default/wrap-regex)||

## **Javascript in React (jsx)**

These rules are included in the `@nish1896/eslint-config/react` package.

|Rule Name|🔧|
|-|-|
|[jsx-closing-bracket-location](https://eslint.style/rules/default/jsx-closing-bracket-location)||
|[jsx-closing-tag-location](https://eslint.style/rules/default/jsx-closing-tag-location)||
|[jsx-curly-newline](https://eslint.style/rules/default/jsx-curly-newline)|consistent |
|[jsx-curly-spacing](https://eslint.style/rules/default/jsx-curly-spacing)||
|[jsx-equals-spacing](https://eslint.style/rules/default/jsx-curly-spacing)||
|[jsx-indent](https://eslint.style/rules/default/jsx-indent)| 2 |
|[jsx-indent-props](https://eslint.style/rules/default/jsx-indent-props)| 2 |
|[jsx-one-expression-per-line](https://eslint.style/rules/default/jsx-one-expression-per-line)| `{ allow: 'literal' }` |
|[jsx-props-no-multi-spaces](https://eslint.style/rules/default/jsx-props-no-multi-spaces)||
|[jsx-quotes](https://eslint.style/rules/default/jsx-quotes)| prefer-double |
|[jsx-self-closing-comp](https://eslint.style/rules/default/jsx-self-closing-comp)||
|[jsx-wrap-multilines](https://eslint.style/rules/default/jsx-wrap-multilines)| parens-new-line |


The stylistic rule(s) listed below will give an error and will have to be manually fixed.

| Rule Name |
|-|
|[no-mixed-operators](https://eslint.style/rules/default/no-mixed-operators)|
