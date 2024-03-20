const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "browser.min.js",
    globalObject: "this",
    library: {
      name: "browserInfo",
      type: "umd",
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            dead_code: true,
            collapse_vars: true,
            conditionals: true,
            if_return: true,
            unused: true,
            keep_fnames: false,
            keep_classnames: false,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
