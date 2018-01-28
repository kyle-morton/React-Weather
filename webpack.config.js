const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["./src/js/app.js"], //takes app.js file with react components
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js" //outputs compiled js file to dist/js folder
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" //entry js file transformed using babel-loader (JSX into JS)
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};