const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'js'),
  },
};