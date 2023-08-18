const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
      static: './dist',
      hot: true,
  },
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
      {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Remmy\'s Todo App',
      filename: 'index.html',
      template: 'src/template.html',
    })
  ],
  devtool: 'inline-source-map',
  // optimization: {
  //   runtimeChunk: 'single',
  // },
}