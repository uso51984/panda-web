const resolveCwd = require('./resolveCwd');

const entry = {
  index: [
    "core-js/stable",
    "regenerator-runtime/runtime",
    './src/index.jsx'
    // resolveCwd('src/index.jsx')
  ],
}

module.exports = entry;
