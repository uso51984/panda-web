module.exports = {
  "testEnvironment": "jsdom",
  "cacheDirectory": "./node_modules/.cache",
  "verbose": true,
  "globals": {
    "__STATIC__": true,
    "__DEV__": false,
    "__TESTING__": true,
    "__TESTINGHOST__": "localhost",
    "__TESTINGPORT__": 3332
  },
  clearMocks: true,
  collectCoverage: true,
  "collectCoverageFrom": [
    "<rootDir>/src/**/*.{js,jsx}",
    "!**/__mocks__/**"
  ],
  "testRegex": "(\\.(test|spec))\\.(jsx|js)$",
  "coverageDirectory": "test/coverage",
  "coverageThreshold": {
    "global": {
      "branches": 96,
      "functions": 97,
      "lines": 98,
      "statements": 98
    }
  },
  "testPathIgnorePatterns": [
    "/build/",
    "/etc/",
    "/node_modules/",
  ],
  "moduleDirectories": [
    "src",
    "i18n",
    "test/json",
    "test/specs",
    "node_modules"
  ],
  "setupFiles": [
    "<rootDir>/test/setup.jest.js"
  ],
  "roots": [
    "<rootDir>/test/",
    "<rootDir>/src/"
  ],
};
