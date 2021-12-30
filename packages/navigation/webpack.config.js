const { ModuleFederationPlugin } = require('webpack').container
const path = require('path')
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://localhost:3001/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
  },

  devServer: {
    static: {
      directory: outputPath,
    },
  },

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
