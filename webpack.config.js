var path = require('path');
var loaders = require('./webpack.loaders.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'script.js'
  },
  mode: 'development',
  module: {
    rules: loaders
  },
  plugins: [

  	new HtmlWebpackPlugin({
      title: 'Basic Webpack Project',
      template: 'src/index.ejs',
      favicon: 'src/favicon.ico',
      inject: true,
    }),

    new ExtractTextPlugin('style.css'),
  ]
};
