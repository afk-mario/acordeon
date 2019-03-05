import { join } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const context = join(__dirname, 'src');
const dist = join(__dirname, 'dist');

module.exports = {
  context,
  entry: './index',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
    path: dist,
    sourceMapFilename: '[name].map',
    library: 'acordeon',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: context,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        include: context,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
};
