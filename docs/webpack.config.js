const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => {
  return {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
      filename: 'index_bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html'
      })
    ]
  };
};
