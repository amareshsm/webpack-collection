const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWepackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
let mode = "development";
let target = "web";
let plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWepackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

if(process.env.SERVE){
  plugins.push(new ReactRefreshWebpackPlugin());
}


module.exports = {
  mode: mode,
  target: target,
  entry: {
    //need to specify entry if u use fastrefresh
    main: "./src/index.js",
  },
  output: {
    //need to specify output if u use cleanwebpack plugin
    path: path.resolve(__dirname, "dist") /*path must be absolute */,
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        /*  type: "asset/inline" - assets inlined into js bundle file
         type: "asset" - webpack decides whether to inline images or to export images based on the asset size.
        */
        type: "asset/resource",
        //no need to add file load webpack v5 supports assets by default.

        // parser:{ //option to increase max size
        //   dataUrlCondition:{
        //     maxSize: 30 * 1024,
        //   }
        // }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: plugins,
  devtool: "source-map",
  devServer: {
    /*
    When you run webpack dev server what webpack dev server does is, instead of creating a bundled file ( e.g. bundle.js )
     in dist folder, it creates a bundled file in memory. It then serves that information to express, and 
     then express creates a web socket connection to render that on the browser on a certain port no.
      So you can’t actually see index.html or bundle.js file in dist folder , as its in memory.*/
    contentBase: "./dist",
    //relative path to op folder
    hot: true,
    //hot - false live reloading will be enabled.
    //hot - true hot reloading (HMR) will be enabled (not especially for react).
  },
};
