// NOTE: To use this example standalone (e.g. outside of repo)
// delete the local development overrides at the bottom of this file

// avoid destructuring for older Node version support
const resolve = require('path').resolve;
const webpack = require('webpack');

const config = {
  entry: {
    app: resolve('./app.js')
  },

  devtool: 'source-map',

  module: {
    rules: [{
      // Compile ES2015 using babel
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('.')],
      exclude: [/node_modules/]
    }]
  },

  // Optional: Enables reading mapbox token from environment variable
  plugins: [
    new webpack.EnvironmentPlugin(['MapboxAccessToken'])
  ]
};

// Enables bundling against src in this repo rather than the installed version
module.exports = env => env && env.local ?
  require('../webpack.config.local')(config)(env) : config;