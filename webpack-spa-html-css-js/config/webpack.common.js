const path = require("path");
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(png|ttf)$/,
        type: "asset/resource",
        /*exports the assets into dist and adds the path to the code - suitable for large files*/
      },
      {
        test: /\.(jpe?g)$/,
        type: "asset/inline",
      /* converts the asset into base64 format and injects into the js bundle - suitable for small files*/
      },
      // {
      //   test:/\.(png|jpe?g|ttf)$/,
      //   type:'asset',
           /* hybrid of resource and inline webpack decide to choose which one based on the file size */
      //   parser:{
      //     dataUrlCondition:{
      //       maxSize: 400 * 1024 //400kb
      //     }
      //   }
      // }
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        /* minicssextract loader: extracts CSS into separate files.*/
        /* css-loader: interprets @import and url() like import/require() and will resolve them. 
         imports CSS as a plain string in your JavaScript.
        */
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        /* style-loader: Inject CSS into the DOM.
           css-loader: imports CSS as a plain string in your JavaScript.
           sass-loader: Loads a Sass/SCSS file and compiles it to CSS.           
        */
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            //convets es6,es7,es8 syntax to es5
            plugins: ["@babel/plugin-proposal-class-properties"]
            //class porperties are not the part of official ECMA script sepcification
            //so we need to use special plugin for that.
          },
        },
      },
    ],
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'style.[contenthash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:[
        '**/*',
        path.join(process.cwd(),'build/**/*')
        /*if u want to remove some custom named (eg:build) folder 
        we have to mention the absolute path */
      ]
    }),
    new HtmlWebpackPlugin({
      title:'Webpage using html,css,js with webpack',
      template:'./public/index.html',
      'meta': {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        'theme-color': '#000'
        // Will generate: <meta name="theme-color" content="#000">
      }
    })
  ]
};
