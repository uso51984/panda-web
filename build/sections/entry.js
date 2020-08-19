const resolveCwd = require('./resolveCwd');

const entry = {
  index: [
    resolveCwd('src/index.jsx')
  ],
}


module.exports = entry;
