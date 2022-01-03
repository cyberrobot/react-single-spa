const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const path = require('path')
const outputPath = path.resolve(__dirname, 'dist')

require('dotenv').config({
  path: path.join(__dirname, '../../../config/development/.env'),
})

const devConfig = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://localhost:3000/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
  },

  devServer: {
    static: {
      directory: outputPath,
    },
  },

  plugins: [
    new HtmlWebpackTagsPlugin({
      tags: [process.env.NAV_APP, process.env.BODY_APP],
      append: false,
      publicPath: false,
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
