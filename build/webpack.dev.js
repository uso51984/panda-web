
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const getWebpackCommonConfig = require('./sections/webpackCommonConfig');
const plugins = [new ProgressBarPlugin()];

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
      filename: '[name].[chunkhash].js'
    },
    module: {
      rules: getWebpackCommonConfig.getLoaders().concat(getWebpackCommonConfig.getCssLoaders(false)),
    },
    resolve: getWebpackCommonConfig.getResolve(),
    plugins,
    mode: 'development',
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
    },
    devServer: {
      host: 'localhost',
      compress: false,
      historyApiFallback: true,
      open: true,
      port: 8070
    }
  };
};