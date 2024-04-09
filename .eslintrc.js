var jsEslintConfig = require('./lib/js');
var reactEslintConfig = require( './lib/react');

module.exports = {
  ...reactEslintConfig,
  rules: {
    ...jsEslintConfig.rules,
    ...reactEslintConfig.rules
  },
  plugins: [
	  '@stylistic/eslint-plugin'
  ],
};
