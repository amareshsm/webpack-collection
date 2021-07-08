const path = require("path");
const commonConfig = require("./webpack.common");
const {merge} = require("webpack-merge");
const devConfig = {
    output: {
        filename: "bundle.js",
        /* publicPath:'file:///Users/username/Desktop/github/webpack/dist/'
       or we can also enter website domain if the files are hosted.
       publicPath: given value + file name
       */
        publicPath: "/",
      },
    mode:'development',
    devServer:{
      port: 8000,
      contentBase: path.resolve(__dirname, "../dist"),
      open:true,
      hot:true
    }
}
module.exports = merge(commonConfig,devConfig);