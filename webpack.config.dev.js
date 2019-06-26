import path from 'path';
import webpack from 'webpack';

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      enforce: "pre",
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    {
      //It's no longer allowed to omit the -loader suffix when using loaders.
      test: /\.css$/,
      loaders: ['style-loader','css-loader']
    }]
  }
}
