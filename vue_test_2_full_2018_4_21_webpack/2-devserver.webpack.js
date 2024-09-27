const pathlib = require('path');
const { entry, output } = require('./webpack2.config');

module.exports = {
    entry: './src/index',
    output: {
        path: pathlib.resolve('dest'),
        filename: 'bundle.js' 
    },
    devServer: {
        contentBase: pathlib.resolve('static'),
        port: 8090
    }
}