const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-typescript'),
          ],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'body',
      library: { type: 'var', name: 'body' },
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Body': './src/Body',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'single-spa-react': { singleton: true },
      },
    }),
  ],
}
