const path = require('path');

module.exports = {
    mode: 'development',
    entry: './www/js/App.js',
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'index.bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'www'),
      host: 'localhost',
      port: '3001',
      hot: false,
    },
    devtool: 'inline-source-map',
};