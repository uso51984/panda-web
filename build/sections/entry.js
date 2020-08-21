const resolveCwd = require('./resolveCwd');

const entry = {
  index: [
    "core-js/stable",
    "regenerator-runtime/runtime",
    resolveCwd('src/index.jsx')
  ],
}

module.exports = entry;
