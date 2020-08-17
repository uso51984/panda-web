module.exports = {
  extends: [require.resolve('code-rule/dist/eslint')],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true,
  },
  "globals": {
    "location": true,
    "window": true,
    "__TESTING__": true,
    "__SERVERRENDER__": true,
    "__STATIC__": true,
    "__DEV__": true,
    "jest": true
  },
  rules: {
    "indent": ["error", 2],
    "operator-assignment": 0,
    "no-param-reassign": 0,
    "import/no-extraneous-dependencies": 0,
    "react/no-array-index-key": 0
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['', '.js', '.jsx'],
            modules: ['src', 'node_modules']
          }
        }
      }
    },
  },
};
