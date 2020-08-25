module.exports = {
  extends: [
    require.resolve('code-rule/dist/eslint'),
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true,
  },
  globals: {
    location: true,
    window: true,
    __TESTING__: true,
    __SERVERRENDER__: true,
    __STATIC__: true,
    __DEV__: true,
    mockStore: true,
    jest: true,
  },
  rules: {
    'indent': ['error', 2],
    'operator-assignment': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-array-index-key': 0,
    'func-names': 0,
    'arrow-body-style': [2, 'as-needed'],
    'no-restricted-globals': 0,
    'no-unused-expressions': 0,
    'semi': 2,
    'key-spacing': 2,
    'object-curly-spacing': 2,
    'arrow-spacing': 2,
    'react/jsx-tag-spacing': 2,
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'quote-props': ['error', 'consistent-as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-return-assign': 0,
  },
  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       config: {
  //         resolve: {
  //           extensions: ['', '.js', '.jsx'],
  //           modules: ['src', 'node_modules']
  //         }
  //       }
  //     }
  //   },
  // },
};
