const path = require("path")
const HtmlWebpackPlugin  = require("html-webpack-plugin")
module.exports = {
  mode:"development",
  entry:"./src/index.ts",
  output: {
    path:path.resolve(__dirname,"./dist"),
    filename:"bundle.js"
  },
  resolve: {
    extensions:[".ts",".js","cjs","json"]
  },
  devServer: {},
  module:{
    // 加载哪些文件
    rules:[
      {
        test:/\.ts$/,
        loader:"ts-loader"
      },
      {
        test:/\.(png|jpe?g|svg|gif)$/,
        type:"asset/resource"
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ]
}