
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(dir){
  return path.join(__dirname, dir)
}

const VueLoadPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry:{
    index:'./src/index.js'
  },
  output:{
    path:resolve('../lib'),
    filename:'[name].js',
    library:'health',
    libraryTarget: 'umd'
  },
  plugins:[
    new VueLoadPlugin(),
    new CleanWebpackPlugin(),
    // new htmlWebpackPlugin({
    //   title:'45',
    //   template:'./index.html'
    // })
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
        test:/\.scss$/,
        loader:[
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test:/\.vue$/,
        exclude: /(node_modules | bower_components)/,
        use:{
          loader:'vue-loader'
        }
      },
      {
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization:{
    minimize: false,
  }

}



