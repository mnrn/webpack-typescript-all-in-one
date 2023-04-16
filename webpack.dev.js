const common = require('./webpack.common')
const path = require('path')

const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    compress: true
  },
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'index.js'
  }
})
