const path = require('path');

const EslingPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: [path.resolve(__dirname, "./src/index.js")],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|mp3)$/i,
        type: "asset/resource",
    },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new EslingPlugin({ extensions: 'ts' }),
    new CopyPlugin({
          patterns: [
        { from: path.resolve(__dirname, './src/assets/'), to: path.resolve(__dirname, './dist/assets') },
      ],
    }),
  ],
};