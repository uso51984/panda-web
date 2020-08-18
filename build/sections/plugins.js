const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV || 'development';
const definitions = {
  'process.env.NODE_ENV': JSON.stringify(env),
  NODE_ENV: JSON.stringify(env),
  __STATIC__: env === 'static',
  __DEV__: env === 'development',
  __PRODUCTION__: env === 'production',
  __TESTING__: env === 'test'
};

const brogressBarPlugin = new ProgressBarPlugin();
const definePlugin = new webpack.DefinePlugin(definitions)
const replacementPlugin = new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh/);
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  chunks: ['index'],
  title: 'panda-web',
  template: './build/sections/index.html',
  filename: 'index.html',
  // favicon: './build/sections/favicon.png',
  inject: true
})
const uglifyJsPlugin = new UglifyJsPlugin({ sourceMap: true })
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].[hash:8].css',
  chunkFilename: '[id].[hash:8].css',
})

const plugins = [brogressBarPlugin, htmlWebpackPlugin, definePlugin, replacementPlugin];

if (env === 'production') {
  plugins.push(uglifyJsPlugin)
  plugins.push(miniCssExtractPlugin)
}

module.exports = plugins;
