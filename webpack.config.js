const path = require('path');
/* eslint-disable */
const merge = require('lodash.merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-enable */

module.exports = {
  mode: 'development',
  entry: {
    index: './src/scripts/index.js',
  },
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};

const productionConfig = merge([ //eslint-disable-line
  {
    output: {
      publicPath: '/js_capstone_project/',
    },
  },
]);