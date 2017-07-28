const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
  }
}
