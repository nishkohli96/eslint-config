import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/jsx-closing-bracket-location': 'warn',
      '@stylistic/jsx-closing-tag-location': 'warn',
      '@stylistic/jsx-curly-newline': ['warn', 'consistent'],
      '@stylistic/jsx-curly-spacing': 'warn',
      '@stylistic/jsx-equals-spacing': 'warn',
      '@stylistic/jsx-indent': ['warn', 2],
      '@stylistic/jsx-indent-props': ['warn', 2],
      '@stylistic/jsx-one-expression-per-line': ['warn', { allow: 'literal' }],
      '@stylistic/jsx-props-no-multi-spaces': 'warn',
      '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
      '@stylistic/jsx-self-closing-comp': 'warn',
      '@stylistic/jsx-wrap-multilines': [
        'warn',
        {
          arrow: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          declaration: 'parens-new-line',
          logical: 'parens-new-line',
          return: 'parens-new-line',
        },
      ],
    },
  },
];
