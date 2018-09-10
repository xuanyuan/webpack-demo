const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  /*
  * webpack-dev-server提供的简单web服务器，能够实时重新加载
  * 修改配置文件，告诉开发服务器，在哪里查找文件
  * 此处配置告知 webpack-dev-server，在localhost:8080下建立服务，
  * 将dist目录下的文件， 作为可访问文件。
  */
  devServer: {
    contentBase: './dist',
    hot: true // 启用HMR
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // 每次构建前清理dist文件夹
    new CleanWebpackPlugin(['dist']),
    // 创建全新的index.html,所有的bundle会自动添加到html中
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}