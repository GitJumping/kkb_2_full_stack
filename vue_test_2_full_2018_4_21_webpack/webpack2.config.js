const pathlib = require('path');

module.exports={
    // 路径引用的两种写法
    entry: './src/1.js', // 或者如下方式
    // entry: pathlib.resolve('src')+'/1.js',
    output: {
        path: pathlib.resolve('dest/'),     //目标目录
        filename: 'bundle.js'               //输出文件名
    }

    // entry: {
    //     index: './src/index',
    //     test: './src/1'
    // }, 
    // output: {
    //     path: pathlib.resolve('dest/'),     //目标目录
    //     filename: '[name].bundle.js'               //输出文件名
    // }
}