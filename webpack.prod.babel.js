import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import merge from 'webpack-merge';
import common from './webpack.common.babel';

module.exports = merge(common, {
  output: {
    filename: '[name].min.js',
    sourceMapFilename: '[name].min.map',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: '[id].min.css',
    }),
  ],
});
