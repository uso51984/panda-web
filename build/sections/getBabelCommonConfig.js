
module.exports = () => {
  const plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-export-default-from'),
    require.resolve('@babel/plugin-proposal-export-namespace-from'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-transform-typeof-symbol'),
    [
      require.resolve('@babel/plugin-transform-runtime'),
      {
        help: false,
      },
    ],
    ["import", {
      "libraryName": "antd",
      "style": process.env.NODE_ENV !== 'test'
    }]
  ];

  return {
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          "corejs": 3,
          "loose": true
        },
      ],
      require.resolve('@babel/preset-react'),
    ],
    plugins,
  };
};

