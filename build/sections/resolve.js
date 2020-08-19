const path = require('path');
const resolveCwd = require('./resolveCwd');

console.log('path.resolve(__dirname, "src")',resolveCwd("src"));

const resolve = {
  modules: [process.cwd(), resolveCwd("src"), 'node_modules'],
  extensions: ['.js', '.jsx']
};

module.exports = resolve;
