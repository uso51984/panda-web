
const plugins = require('./sections/plugins');
const getWebpackCommonConfig = require('./sections/webpackCommonConfig');
const entry = require('./sections/entry');
const output = require('./sections/output');

console.log('getWebpackCommonConfig.resolve', getWebpackCommonConfig.resolve)

module.exports = () => {
  return {
    devtool: '#source-map',
    resolveLoader: getWebpackCommonConfig.getResolveLoader(),
    entry,
    output,
    module: {
      rules: getWebpackCommonConfig.getLoaders().concat(getWebpackCommonConfig.getCssLoaders(false)),
    },
    resolve: getWebpackCommonConfig.resolve,
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
