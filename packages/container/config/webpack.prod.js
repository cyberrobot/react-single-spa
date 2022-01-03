const { merge } = require('webpack-merge')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const commonConfig = require('./config/webpack.common')
const path = require('path')

require('dotenv').config({
  path: path.join(__dirname, '../../config/production/.env'),
})

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackTagsPlugin({
      tags: [process.env.NAV_APP, process.env.BODY_APP],
      append: false,
      publicPath: false,
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
