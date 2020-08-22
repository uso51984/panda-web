const path = require('path');
const resolveCwd = require('./resolveCwd');

const resolve = {
  modules: ['node_modules'],
  extensions: ['.js', '.jsx'],
  alias: {
    '@': resolveCwd('src'),
  }
};

module.exports = resolve;
