const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-typescript')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      library: { type: 'var', name: 'container' },
      filename: 'remoteEntry.js',
      remotes: {
        'home-nav': 'navigation',
        'home-body': 'body',
      },
      exposes: {},
      shared: [],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
