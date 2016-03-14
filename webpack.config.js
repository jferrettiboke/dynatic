var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
// ExtractTextPlugin is just for production. On development we use HRM
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var stylelint = require('stylelint');

module.exports = [{
  // The configuration for the client-side rendering
  entry: path.resolve(__dirname, './src/client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loaders: ['postcss'],
        include: ['./src']
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  /*
  plugins: [
    new ExtractTextPlugin('css/styles.css', { allChunks: true })
  ],
  */
  postcss: function () {
    return [autoprefixer, precss({}), stylelint({
      'extends': 'stylelint-config-standard',
      'rules': {}
    })];
  }
},
{
  // The configuration for the server-side rendering
  entry: path.resolve(__dirname, './src/server/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  target: 'node',
  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?module&localIdentName=[name]__[local]___[hash:base64:5]')
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/css/styles.server.css')
  ]
}];
