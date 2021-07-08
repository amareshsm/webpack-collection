const path = require("path");
const commonConfig = require("./webpack.common");
const {merge} = require("webpack-merge");
const prodConfig = {
    output: {
        filename: "[name].[contenthash].js",
        /* name- webpack will take nmae from the entry point */
        /* md5 hash - generates a hash value based on the file content */
        /* publicPath:'file:///Users/username/Desktop/github/webpack/dist/'
           or we can also enter website domain if the files are hosted.
           publicPath: given value + file name
         */
        path: path.resolve(__dirname, "../dist"),
        publicPath: "./static/",
      },
    mode:'production',
    optimization:{
      splitChunks:{
        chunks:'all'
      }
    }
}
module.exports = merge(commonConfig,prodConfig);