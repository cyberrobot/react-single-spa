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
      name: 'navigation',
      library: { type: 'var', name: 'navigation' },
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Header': './src/Header',
        './Footer': './src/Footer',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'single-spa-react': { singleton: true },
      },
    }),
  ],
}
