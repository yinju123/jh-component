
const base = require('./webpack.base')
const merge = require('merge')
const path = require('path')
const webpackMerge = require('webpack-merge')

const prodConfig = {
  mode:'production',
  // mode:'development'
}

module.exports = webpackMerge.merge(base, prodConfig)




