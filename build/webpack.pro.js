
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
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: getWebpackCommonConfig.getLoaders().concat(getWebpackCommonConfig.getCssLoaders(true)),
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
