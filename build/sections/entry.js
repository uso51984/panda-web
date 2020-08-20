const resolveCwd = require('./resolveCwd');

const entry = {
  index: [
    '@babel/polyfill',
    resolveCwd('src/index.jsx')
  ],
}


module.exports = entry;
