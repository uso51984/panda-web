
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const getWebpackCommonConfig = require('./sections/webpackCommonConfig');

const env = process.env.NODE_ENV || 'development';

const definitions = {
  'process.env.NODE_ENV': JSON.stringify(env),
  NODE_ENV: JSON.stringify(env),
  __STATIC__: env === 'static',
  __DEV__: env === 'development',
  __PRODUCTION__: env === 'production',
  __TESTING__: env === 'test',
  __TESTINGHOST__: '',
  __TESTINGPORT__: ''
};

const DefinePlugin = new webpack.DefinePlugin(definitions)
const ReplacementPlugin = new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh/);
const uglifyJsPlugin = new UglifyJsPlugin({ sourceMap: true })
const plugins = [new ProgressBarPlugin(), DefinePlugin, ReplacementPlugin, uglifyJsPlugin];

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

for (const key in entry) {
  setHtmlWebpackPlugin(key)
}

module.exports = () => {
  return {
    devtool: '#source-map',
    resolveLoader: getWebpackCommonConfig.getResolveLoader(),
    entry,
    output: {
      publicPath: '/',
      path: resolveCwd('dist'),
      filename: '[name].[chunkhash:8].js'
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
