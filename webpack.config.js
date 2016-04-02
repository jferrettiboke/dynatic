var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
// ExtractTextPlugin is just for production. On development we use HRM
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var stylelint = require('stylelint');

var commonLoaders = [
  { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
  { test: /\.json$/, loader: 'json' },
  { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]', 'postcss') },
  { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=5000&name=images/[name]-[hash:base64:5].[ext]' },
  { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=5000&name=fonts/[name]-[hash:base64:5].[ext]' }
];

var postCSSConfig = function () {
  return [autoprefixer, precss({}), stylelint({
    'extends': 'stylelint-config-standard',
    'rules': {}
  })];
};

module.exports = [
  {
    // The configuration for the client-side rendering
    entry: path.resolve(__dirname, './src/client/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist/public'),
      publicPath: 'http://localhost:8080/',
      filename: 'bundle.js'
    },
    module: {
      preLoaders: [
        { test: /\.css$/, loader: 'postcss', include: ['./src'] }
      ],
      loaders: commonLoaders
    },
    plugins: [
      new ExtractTextPlugin('css/styles.css')
    ],
    postcss: postCSSConfig
  },
  {
    // The configuration for the server-side rendering
    entry: path.resolve(__dirname, './src/server/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'http://localhost:8080/',
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
      loaders: commonLoaders
    },
    plugins: [
      new ExtractTextPlugin('public/css/styles.css')
    ]
  }
];
