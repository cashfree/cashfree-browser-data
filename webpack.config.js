const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/browser.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'browser.min.js',
    globalObject: "this",
    library: {
        name: "browserInfo",
        type: "umd",
    },
  },
};
