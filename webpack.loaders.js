var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      exclude: /(node_modules)/,
      loader: ExtractTextPlugin.extract(['css-loader','sass-loader']),
      // loader: ['style-loader','css-loader','sass-loader'],
    },
    {
      test: /\.css$/,
      exclude: /(node_modules)/,
      loader: ExtractTextPlugin.extract(['css-loader'])
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: '../images/[name].[ext]'
      }
    }
];
