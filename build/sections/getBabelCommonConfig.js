
'use strict';
module.exports = function (modules) {
  const plugins = [
    // require.resolve('@babel/plugin-transform-object-assign'),
    // require.resolve('@babel/plugin-transform-spread'),
    // require.resolve('@babel/plugin-proposal-export-namespace-from'),
    // require.resolve('@babel/plugin-proposal-object-rest-spread'),
    // require.resolve('@babel/plugin-proposal-class-properties'),
    // [
    //   require.resolve('@babel/plugin-transform-runtime'),
    //   {
    //     help: false,
    //   },
    // ]
  ];

  return {
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          modules: modules,
          exclude: ['transform-typeof-symbol'],
        },
      ],
      require.resolve('@babel/preset-react'),
    ],
    plugins,
  };
};

