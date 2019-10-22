const path = require('path');

module.exports = {
  target:'node',
  entry: './bin/www',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
