const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html'
    }),
    new Dotenv()
  ],
  devtool: 'sourcemap',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader : 'css-loader'
        }, {
          loader : 'sass-loader'
        }]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
