
const path = require('path')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(dir){
  return path.join(__dirname, dir)
}

const VueLoadPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry:{
    index:'./src/index.js',
    utils:'./utils/utils.js'
  },
  output:{
    path:resolve('../lib'),
    filename:'[name].js',
    library:'health',
    libraryTarget: 'umd'
  },
  plugins:[
    new VueLoadPlugin(),
    new CleanWebpackPlugin()
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
    splitChunks: {
      chunks: 'all'
    },
  },


}



