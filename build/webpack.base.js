
const path = require('path')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir)
}
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    health: './src/index.js',
    // utils: './utils/utils.js'
  },
  output: {
    path: resolve('../lib'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  plugins:[
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
    
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false,
    // runtimeChunk: true,
    /* 
      runtimeChunk 拆分

    */
    splitChunks: {
      chunks: 'all',
      // chunks: 'async',
      // minSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,

      // cacheGroups: {
      //   // vendors: {
      //   //   test: /[\\/]node_modules[\\/]/,
      //   //   priority: -10
      //   // },
      //   utils: {
      //     test: /utils/,
      //     minSize: 0,
      //     // minChunks: 1,
      //     // priority: -20,
      //   }
      // }
    },
  },
}



