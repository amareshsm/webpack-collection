const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader","postcss-loader"],
      },
    ],
  },
  plugins:[new MiniCssExtractPlugin()],
  devtool:"source-map"
};
