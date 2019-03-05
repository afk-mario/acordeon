import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import merge from 'webpack-merge';
import common from './webpack.common.babel';

module.exports = merge(common, {
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
