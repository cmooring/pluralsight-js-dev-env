const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  stats: 'verbose', // Use when you need to investigate something....like...where are my dist/css files??
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: { chunks: 'all' },
  },
  module: {
    rules: [
      {
        //It's no longer allowed to omit the -loader suffix when using loaders.
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // see http://webpack.js.org/plugins/mini-css-extract-plugin for more info
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
    },
    {
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
    ]
  }
};
