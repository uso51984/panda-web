module.exports = {
  extends: [
    require.resolve('code-rule/dist/eslint'),
    'plugin:react-hooks/recommended'
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true
  },
  globals: {
    location: true,
    window: true,
    __TESTING__: true,
    __SERVERRENDER__: true,
    __STATIC__: true,
    __DEV__: true,
    mockStore: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './test/resolveConfig'
      }
    }
  }
};
