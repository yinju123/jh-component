
const base = require('./webpack.base')
const merge = require('merge')
const path = require('path')

const devConfig = {
  
}

console.log(merge(base, devConfig))

module.exports = merge(base, devConfig)




