const path = require("path");
const commonConfig = require("./webpack.common");
const {merge} = require("webpack-merge");
const prodConfig = {
    output: {
        filename: "bundle.[contenthash].js",
        //md5 hash - generates a hash value based on the file content
        /* publicPath:'file:///Users/username/Desktop/github/webpack/dist/'
       or we can also enter website domain if the files are hosted.
       publicPath: given value + file name
       */
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
      },
    mode:'production'
}
module.exports = merge(commonConfig,prodConfig);