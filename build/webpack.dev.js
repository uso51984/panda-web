const internalIp = require('internal-ip');
const plugins = require('./sections/plugins');
const getWebpackCommonConfig = require('./sections/webpackCommonConfig');
const entry = require('./sections/entry');
const output = require('./sections/output');

let host = 'localhost';
let port = 7001;

if (process.env.NODE_ENV === "static:ip") {
  host = internalIp.v4.sync()
  port = 7002
}

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
      host,
      compress: false,
      historyApiFallback: true,
      open: false,
      port
    }
  };
};
