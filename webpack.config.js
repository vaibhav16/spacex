var webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
  
  entry: [
    './public/src/index.js'
  ],
  output: {
    path: __dirname + '/public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /.js$|.css$/,
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    "alias": {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};