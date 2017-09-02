const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { NODE_ENV } = process.env;
const isProduction = (NODE_ENV === 'production');

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: isProduction ? 'dist/[name].[hash].js' : 'dist/index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.ejs',
      minify: {
        collapseWhitespace: isProduction,
      }
    })
  ]
};

if (isProduction) {
  config.plugins.push(new UglifyJSPlugin({sourceMap: true}));
}

module.exports = config;
