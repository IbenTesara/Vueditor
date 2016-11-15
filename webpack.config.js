
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const components = new ExtractTextPlugin('components.css', {allChunks: true});
const common = new ExtractTextPlugin('style.css');

module.exports = {

  entry: {
    vueditor: './src/js/main.js',
    style: './src/less/style.less'
  },

  output: {
    publicPath: '',
    path: path.join(__dirname, './build'),
    filename: '[name].js',
    // export itself to a global var
    libraryTarget: "umd",
    // name of the global var
    library: "Vueditor"
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.(less|css)$/, loader: common.extract('style-loader', 'css!less!postcss') },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' }
    ]
  },

  vue: {
    loaders: {
      css: components.extract('style!css!postcss'),
      less: components.extract('style-loader', 'css!less!postcss')
    }
  },

  babel: {
    presets: ['es2015']
  },

  postcss: function () {
    return [autoprefixer];
  },

  plugins: [
    components,
    common
  ],

  externals: {
    'toolbarConfig': 'toolbarConfig',
    'vue': 'Vue',
    'vuex': 'Vuex'
  }

};