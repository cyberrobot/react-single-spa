const { merge } = require('webpack-merge')
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
}

module.exports = merge(commonConfig, prodConfig)
