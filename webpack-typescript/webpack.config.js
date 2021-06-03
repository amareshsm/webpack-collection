module.exports = {
  mode: process.env.NODE_ENV || 'production',  
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  devtool:false,
  resolve: {
    extensions: [".ts", ".js"],
  },
  //Webpack does not look for .ts files by default. You can configure resolve.extensions to look for .ts.
};
