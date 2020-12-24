
const base = require('./webpack.base')
const {merge} = require('webpack-merge')




const prodConfig = {
  mode:'production',
}

// if(analyzer){
//   prodConfig.plugins.push(new BundleAnalyzerPlugin())
// }

module.exports = merge(base, prodConfig)




