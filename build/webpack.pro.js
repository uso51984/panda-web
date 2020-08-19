
const plugins = require('./sections/plugins');
const getWebpackCommonConfig = require('./sections/webpackCommonConfig');
const entry = require('./sections/entry');
const output = require('./sections/output');

module.exports = () => {
  return {
    devtool: '#source-map',
    resolveLoader: getWebpackCommonConfig.getResolveLoader(),
    entry,
    output: output,
    module: {
      rules: getWebpackCommonConfig.getLoaders().concat(getWebpackCommonConfig.getCssLoaders(true)),
    },
    resolve: getWebpackCommonConfig.resolve,
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
