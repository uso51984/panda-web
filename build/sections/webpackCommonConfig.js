

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const getBabelCommonConfig = require('./getBabelCommonConfig');
const resolve = require('./resolve');

const autoprefixerConfig = autoprefixer({
  remove: false
});

const babelConfig = getBabelCommonConfig();

module.exports = {
  resolve,
  getResolveLoader() {
    return {
      modules: [
        path.resolve(__dirname, '../../node_modules'),
        path.resolve(__dirname, '../../'),
      ],
      moduleExtensions: ['-loader'],
    };
  },
  getLoaders() {
    return [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelConfig
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-sprite',
      // },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/octet-stream',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg|jpeg|webp|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images',
              name: '[name].[ext]?[contenthash:8]',
            },
          }
        ]
      }
    ];
  },

  getCssLoaders(extractCss) {
    const styleLoader = {
      loader: 'style',
    };

    const postcssLoader = {
      loader: 'postcss',
      options: { plugins: [autoprefixerConfig] },
    };

    const cssLoader = [
      {
        loader: 'css',
        options: {
          importLoaders: 1,
          sourceMap: true,
        },
      },
      postcssLoader,
    ];

    const lessLoader = cssLoader.concat([
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            strictMath: false,
            modifyVars: {
              'ant-prefix': 'crm'
            },
            javascriptEnabled: true,
          },
        },
      }
    ]);

    if (extractCss) {
      const extractCssLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
        }
      }
      cssLoader.unshift(extractCssLoader);
      lessLoader.unshift(extractCssLoader);
    } else {
      cssLoader.unshift(styleLoader);
      lessLoader.unshift(styleLoader);
    }
    return [
      {
        test: /\.css$/,
        use: cssLoader,
      },
      {
        test: /\.less$/,
        use: lessLoader,
      },
    ];
  },
};
