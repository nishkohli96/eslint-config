# @nish1896/eslint-config

**A set of developer-friendly [eslint](https://eslint.org/), [stylistic](https://eslint.style/), [typescript](https://www.typescriptlang.org/) and [accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) configuration rules to help you and fellow developers follow the industry-recommended coding practices for easier readability, maintenance and productivity !**

The usage of [eslint-stylistic](https://eslint.style/) over [prettier](https://prettier.io/) will give you additional options to format your code and hopefully avoid conflict of rules between `eslint` and `prettier` for which you additionally had to install [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier).  

On running `eslint .` some of the rules imported from this config will give you a warning ⚠️ indicating that the code issue may be ignored while the rules triggering an error ❌ will discourage you to avoid that coding practice. `eslint --fix .` should hopefully fix most of the warnings or errors in your code. It's okay to have a few warnings when developing, but they should be taken care of when pushing your code for production. 

>[!WARNING]
>Ignored eslint warnings or errors in code will likely cause your app build to fail, unless resolved or specified eslint to ignore using the `eslint-ignore` syntax.
>

This config extends the following plugins - 
- [eslint/recommended](https://eslint.org/docs/latest/rules/)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [@stylistic](https://eslint.style/)

## Installation

You'll first need to install [ESLint](https://eslint.org/). If you project is a monorepo, add a `-W` flag to each of the commands below.

```
npm i eslint --save-dev
```
```
yarn add -D eslint
```

Next, install `@nish1896/eslint-config`.

```
npm install @nish1896/eslint-config  --save-dev
```
```
yarn add -D @nish1896/eslint-config
```

## Usage

Add `@nish1896/eslint-config` to the extends section of your *eslint configuration file*. `eslint-config` suffix can be ignored.

```json
{
    "extends": [
        "@nish1896"
    ]
}
```

To add a new rule, turn off or modify the existing list of rules, append the `rules` in your *eslint configuration file*.

```json
{
  "rules": {
    "<new-rule>": "error",
    "no-unused-vars": "off",
    "id-length": ["warn", { "min": 3, "max": 20 }]
  }
}
```

To disable one or more rules throughout the file,
```
/* eslint-disable  @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
```

To disable one or more rules in the next line,

```
/* eslint-disable-next-line <rule1>, <rule2> */
```

> [!CAUTION]
> The syntax below won't work 
> ```
> // eslint-disable-next-line <rule1>, <rule2>
> or
> /** eslint-disable-next-line  @typescript-eslint/no-unused-vars */
> ```
> 

Add *"lint"* command to your `package.json` file.

```
npm pkg set scripts.lint="eslint --fix ."
```

To run linting on your codebase,
```sh
npm run lint
```
```
yarn lint
```

Some folders have already been preconfigured to ignore when linting.
```
   ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    'coverage',
    '.next',
    '.turbo',
    '.eslintrc.js',
    '*.d.ts',
  ]
```

[Integrate with husky](https://typicode.github.io/husky/getting-started.html) as a `pre-commit` git hook to make sure no bad code passes through!

## List of Rules

View the complete list of rules
- [eslint](https://eslint.org/docs/latest/rules/)
- [stylistic](https://eslint.style/rules)
- [typescript](https://typescript-eslint.io/rules/)
- [react](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules)

⚠️ ***WARNING*** - write your code neatly please, hopefully, eslint will clean up the mess.  
❌ ***ERROR*** - you should AVOID this coding practice.   
🔧 ***CONFIGURE*** - specified or overwritten default case for a rule.  

## **stylistic rules**

All rule names start with `@stylistic/` prefix.  

>[!NOTE]
> Starting `v1.0.3` almost all of the `stylistic` rules will default to warn. These can be easily fixed by running linting and do not require the attention of the developer.
>

|Rule Name|🔧|
|-|-|
|[array-bracket-newline](https://eslint.style/rules/default/array-bracket-newline)| { multiline: true, minItems: 4 } |
|[array-bracket-spacing](https://eslint.style/rules/default/array-bracket-spacing)||
|[arrow-parens](https://eslint.style/rules/default/arrow-parens)| as-needed |
|[arrow-spacing](https://eslint.style/rules/default/arrow-spacing)||
|[block-spacing](https://eslint.style/rules/default/block-spacing)||
|[brace-style](https://eslint.style/rules/default/brace-style)||
|[comma-dangle](https://eslint.style/rules/default/comma-dangle)||  always-multiline |
|[comma-spacing](https://eslint.style/rules/default/comma-spacing)||
|[eol-last](https://eslint.style/rules/default/eol-last)||
|[function-call-argument-newline](https://eslint.style/rules/default/function-call-argument-newline)| consistent |
|[function-paren-newline](https://eslint.style/rules/default/function-paren-newline)|| consistent |
|[indent](https://eslint.style/rules/default/indent)|| 2 |
|[indent-binary-ops](https://eslint.style/rules/default/indent-binary-ops)| 2 |
|[jsx-closing-bracket-location](https://eslint.style/rules/default/jsx-closing-bracket-location)||
|[jsx-closing-tag-location](https://eslint.style/rules/default/jsx-closing-tag-location)||
|[jsx-curly-newline](https://eslint.style/rules/default/jsx-curly-newline)|consistent |
|[jsx-curly-spacing](https://eslint.style/rules/default/jsx-curly-spacing)||
|[jsx-equals-spacing](https://eslint.style/rules/default/jsx-curly-spacing)||
|[jsx-first-prop-new-line](https://eslint.style/rules/default/jsx-first-prop-new-line)| multiline-multiprop |
|[jsx-indent](https://eslint.style/rules/default/jsx-indent)| 2 |
|[jsx-indent-props](https://eslint.style/rules/default/jsx-indent-props)| 2 |
|[jsx-one-expression-per-line](https://eslint.style/rules/default/jsx-one-expression-per-line)| { allow: 'literal' } |
|[jsx-props-no-multi-spaces](https://eslint.style/rules/default/jsx-props-no-multi-spaces)||
|[jsx-quotes](https://eslint.style/rules/default/jsx-quotes)| prefer-double |
|[jsx-self-closing-comp](https://eslint.style/rules/default/jsx-self-closing-comp)||
|[jsx-wrap-multilines](https://eslint.style/rules/default/jsx-wrap-multilines)| parens-new-line |
|[key-spacing](https://eslint.style/rules/default/key-spacing)||
|[linebreak-style](https://eslint.style/rules/default/linebreak-style)||
|[no-extra-semi](https://eslint.style/rules/default/no-extra-semi)||
|[no-floating-decimal](https://eslint.style/rules/default/no-floating-decimal)||
|[no-mixed-spaces-and-tabs](https://eslint.style/rules/default/no-mixed-spaces-and-tabs)||
|[no-multi-spaces](https://eslint.style/rules/default/no-multi-spaces)||
|[no-multiple-empty-lines](https://eslint.style/rules/default/no-multiple-empty-lines)||
|[no-trailing-spaces](https://eslint.style/rules/default/no-trailing-spaces)||
|[object-curly-newline](https://eslint.style/rules/default/object-curly-newline)| { multiline: true } |
|[object-curly-spacing](https://eslint.style/rules/default/object-curly-spacing)| always |
|[object-property-newline](https://eslint.style/rulesobject-property-newline)||
|[operator-linebreak](https://eslint.style/rules/default/operator-linebreak)| before |
|[quotes](https://eslint.style/rules/default/quotes)| single |
|[rest-spread-spacing](https://eslint.style/rules/default/rest-spread-spacing)||
|[space-unary-ops](https://eslint.style/rules/default/sace-unary-ops)||
|[semi-spacing](https://eslint.style/rules/default/semi-spacing)||
|[spaced-comment](https://eslint.style/rules/default/spaced-comment)||
|[switch-colon-spacing](https://eslint.style/rules/default/switch-colon-spacing)||
|[template-curly-spacing](https://eslint.style/rules/default/template-curly-spacing)||
|[type-annotation-spacing](https://eslint.style/rules/default/type-annotation-spacing)||
|[type-generic-spacing](https://eslint.style/rules/default/type-generic-spacing)||
|[type-named-tuple-spacing](https://eslint.style/rules/default/type-named-tuple-spacing)||
|[wrap-regex](https://eslint.style/rules/default/wrap-regex)||

Only the stylistic rule(s) listed below will give an error and will have to be manually fixed.

| Rule Name |
|-|
|[no-mixed-operators](https://eslint.style/rules/default/no-mixed-operators)|


## **eslint rules**

|Rule Name|⚠️|❌|🔧|
|-|-|-|-|
|[array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)|✔️|||
|[arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)|✔️|| as-needed |
|[curly](https://eslint.org/docs/latest/rules/curly)|✔️|||
|[default-case](https://eslint.org/docs/latest/rules/default-case)|✔️|||
|[default-param-last](https://eslint.org/docs/latest/rules/default-param-last)|✔️|||
|[dot-notation](https://eslint.org/docs/latest/rules/dot-notation)||✔️||
|[eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)||✔️||
|[func-names](https://eslint.org/docs/latest/rules/)|✔️|| as-needed |
|[no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop)|✔️|||
|[no-debugger](https://eslint.org/docs/latest/rules/no-debugger)|✔️|||
|[no-eq-null](https://eslint.org/docs/latest/rules/no-eq-null)||✔️||
|[no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments)|✔️|||
|[no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)|✔️|||
|[no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)|✔️|||
|[no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)||✔️||
|[no-var](https://eslint.org/docs/latest/rules/no-var)|✔️|||
|[object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand)|✔️|||
|[prefer-const](https://eslint.org/docs/latest/rules/prefer-const)||✔️||
|[prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)|✔️|||
|[prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)|✔️|||
|[prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)||✔️||
|[require-await](https://eslint.org/docs/latest/rules/require-await)||✔️||
|[semi](https://eslint.org/docs/latest/rules/semi)|✔️|||
|[use-isnan](https://eslint.org/docs/latest/rules/use-isnan)|✔️|||

## **typescript-eslint rules**

| Rule Name |⚠️|❌|🔧|
|-|-|-|-|
|[ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md)|✔️|||

## **eslint-plugin-react rules**

| Rule Name |⚠️|❌|🔧|
|-|-|-|-|
|[react/jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)||✔️||
|[react/jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)|✔️|| { extensions: ['.tsx', '.jsx'] } |

## **jsx-a11y rules**

Enabled below rules that are not enabled by default in the `jsx-a11y/recommended` plugin. All rule names start with `jsx-a11y/` prefix.

| Rule Name |⚠️|❌|🔧|
|-|-|-|-|
|[anchor-ambiguous-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-ambiguous-text.md)||✔️||
|[control-has-associated-label](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/control-has-associated-label.md)||✔️||

## **Rules removed after initial or subsequent testing**

You will need to manually add them in the `rules` of your .eslintrc, if needed. 

| Rule Name | Reason |
|-|-|
|[@stylistic/lines-around-comment](https://eslint.style/rules/default/lines-around-comment)| Sometimes reqd, when writing block comments above functions, but don't need when writing block comment between 2 lines of code |
|[@typescript-eslint/no-this-alias](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md) | sometimes `this` is reqd in fn context. eg. MongooseSchema.pre() |
|[id-denylist](https://eslint.org/docs/latest/rules/id-denylist) | use if required. eg. "id-denylist": ["warn", "e", "cb", 'callback']|
[id-length](https://eslint.org/docs/latest/rules/id-length)| warning when using `_` for unused vars |
|[multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style)| the default setting `starred-block` read commented code as a comment itself, which made it difficult to uncomment the code
|[no-shadow](https://eslint.org/docs/latest/rules/no-shadow) | gave unwanted warnings when using enums |
|[no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars) | `@typescript-eslint/no-unused-vars` does it better |
|[react/react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md) | react v17+ doesn't require `import React from react` |
|[sort-keys](https://eslint.org/docs/latest/rules/sort-keys)| sometimes more crucial object keys should come first |
[sort-vars](https://eslint.org/docs/latest/rules/sort-vars)| same as above |


Checkout out other [recommended community plugins](/Recommendations.md)

[To create your own plugin follow this guide](https://eslint.org/docs/latest/extend/plugins).

# Support Me

If you found this config useful, please don't forget to star the repository. It would make my day if you consider [buying me a coffee](https://www.buymeacoffee.com/nish1896)  
