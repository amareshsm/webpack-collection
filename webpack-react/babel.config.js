let plugins=[];
if(process.env.NODE_ENV !=="production"){
  plugins.push("react-refresh/babel");
}
module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins:plugins,
};

/* runtime -  automatic auto imports the functions that JSX transpiles to. 
classic does not automatic import anything.
https://dev.to/wojtekmaj/how-to-enable-automatic-runtime-in-react-17-with-babel-preset-react-52l
 */

/*babel config and postcss config both refers .browserslistrc */
