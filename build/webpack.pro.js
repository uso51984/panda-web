
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const getWebpackCommonConfig = require('./sections/webpackCommonConfig');
// const resolveCwd = require('./resolveCwd');
const plugins = [new ProgressBarPlugin(),
  new UglifyJsPlugin({
   sourceMap: true
})];

function resolveCwd(...args) {
  args.unshift(process.cwd());
  return path.join(...args);
};

function setHtmlWebpackPlugin(name) {
  plugins.push(
    new HtmlWebpackPlugin({
      chunks: [name],
      title: name,
      template: './build/sections/index.html',
      filename: `${name}.html`,
      // favicon: './build/sections/favicon.png',
      inject: true
    })
  );
}

const entry = {
  index: [
    resolveCwd('src/index.jsx')
  ],
}

for (let key in entry) {
  setHtmlWebpackPlugin(key)
}

module.exports = () => {
  return {
    devtool: '#source-map',
    resolveLoader: getWebpackCommonConfig.getResolveLoader(),
    entry,
    output: {
      path: resolveCwd('dist'),
      filename: '[name].js'
    },
    module: {
      rules: getWebpackCommonConfig.getLoaders().concat(getWebpackCommonConfig.getCssLoaders(false)),
    },
    resolve: getWebpackCommonConfig.getResolve(),
    plugins,
    mode: 'production',
    performance: {
      hints:false
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        automaticNameDelimiter: '-',
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          }
        }
      }
    }
  };
};