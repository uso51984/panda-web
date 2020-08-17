
module.exports = (modules) => {
  const plugins = [
    [
      require.resolve('@babel/plugin-transform-runtime'),
      {
        help: false,
      },
    ]
  ];

  return {
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          modules,
          exclude: ['transform-typeof-symbol'],
        },
      ],
      require.resolve('@babel/preset-react'),
    ],
    plugins,
  };
};

