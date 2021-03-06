
const base = require('./webpack.base')
const webpackMerge = require('webpack-merge')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const devConfig = {
  mode:'development',
  plugins:[
    new htmlWebpackPlugin({
      title:'45',
      template:'./index.html'
    })
  ],
  // devtools:'cheap-module-eval-source-map'
}


module.exports = webpackMerge.merge(base, devConfig)




