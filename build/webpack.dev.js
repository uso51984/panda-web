
const webpack = require('webpack');
const path = require('path');
const plugins = require('./sections/plugins');
const getWebpackCommonConfig = require('./sections/webpackCommonConfig');

function resolveCwd(...args) {
  args.unshift(process.cwd());
  return path.join(...args);
};

const entry = {
  index: [
    resolveCwd('src/index.jsx')
  ],
}


module.exports = () => {
  return {
    devtool: '#source-map',
    resolveLoader: getWebpackCommonConfig.getResolveLoader(),
    entry,
    output: {
      publicPath: '/',
      path: resolveCwd('dist'),
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[name].[contenthash:8].async.js'
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
