var jsEslintConfig = require('./lib/js');
var reactEslintConfig = require( './lib/react');

module.exports = {
  ...jsEslintConfig,
  plugins: [
	  '@stylistic/eslint-plugin'
  ],
};
