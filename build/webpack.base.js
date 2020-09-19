
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir){
  return path.join(__dirname, dir)
}

const VueLoadPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry:{
    path:'./main.js'
  },
  output:{
    path:resolve('lib')
  },
  plugins:[
    new VueLoadPlugin(),
    new htmlWebpackPlugin({
      title:'45',
      template:'./index.html'
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        loader:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.vue$/,
        exclude: /(node_modules | bower_components)/,
        use:{
          loader:'vue-loader'
        }
      }
    ]
  }

}



