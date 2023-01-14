const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: ['name'].js,
    clean: true
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [{ loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'] } }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new WebpackBar()
  ],
  devServer: {
    port: 3000,
    open: true
  }
}
