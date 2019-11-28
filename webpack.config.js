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
      host: '192.168.0.101',
      port: '3001',
      hot: false,
    },
    devtool: 'inline-source-map',
};