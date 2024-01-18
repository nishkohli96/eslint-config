# @nish1896/eslint-config-lint-rules

**[eslint](https://eslint.org/) and [stylistic](https://eslint.style/) rules to help you and fellow developers follow the industry-recommended coding practices for easier readability, maintenance and productivity!**

The usage of `eslint-stylistic` over [prettier](https://prettier.io/) will give you additional options to format your code and hopefully avoid conflict of rules between `eslint` and `prettier` for which you additionally had to install [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier). Some of the rules imported from this plugin will give you a warning ⚠️ when running `eslint --fix` indicating that the code issue can be ignored while the rules triggering an error ❌ indicate that your code might not be as per the industry standards and that coding style should be avoided.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```
npm i eslint --save-dev
```
```
yarn add -D eslint
```

Next, install `@nish1896/eslint-plugin-nish-lint` and `@stylistic/eslint-plugin` :

```
npm install @nish1896/eslint-config-lint-rules @stylistic/eslint-plugin --save-dev
```
```
yarn add -D @nish1896/eslint-config-lint-rules @stylistic/eslint-plugin
```

## Usage

Add `@nish1896/eslint-config-lint-rules` to the extends section of your `.eslintrc` configuration file. The plugin also has `eslint-stylistic` rules defined, but unfortunately it needs to be manually configured in your `.eslintrc` or `eslint.config.js`.

```json
{
    "extends": [
        "@nish1896/eslint-config-lint-rules"
    ],
    "plugins": [
        "@stylistic/eslint-plugin"
    ]
}
```

To run linting across your project, add a *"lint"* command to your `package.json` file.

```
npm pkg set scripts.lint="eslint --fix"
```

[Integrate with husky](https://typicode.github.io/husky/getting-started.html) as a `pre-commit` git hook to make sure no bad code passes through!

## List of Rules

Check out the complete list of [eslint](https://eslint.org/docs/latest/rules/) and [stylistic](https://eslint.style/rules) rules.

To search or read about the documentation of a specific rule, append the rule name as a suffix to [https://eslint.org/docs/latest/rules/](https://eslint.org/docs/latest/rules/) or [https://eslint.style/rules/default](https://eslint.style/rules/default). 

⚠️ Configurations set to warn in.
❗ Set in the errors configuration.
☑️ Set in the recommended configuration.
🔧 Overridden the default values and specified custom values

Checkout out other [recommended community plugins](/Recommendations.md)

[Create your own plugin](https://eslint.org/docs/latest/extend/plugins).

# Support Me

If you found this plugin useful, please don't forget to star the repository. It would make my day if you consider [buying me a coffee](https://www.buymeacoffee.com/nish1896)  