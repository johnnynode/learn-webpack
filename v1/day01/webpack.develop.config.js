var path = require('path');

module.exports = {
    // 项目入口文件
    entry: path.resolve(__dirname, 'src/js/app.js'),
    // 编译之后的输出路径
    output: {
        path: path.resolve(__dirname, 'deploy/js'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            // {test: /\.css$/, loader:"style!css"}
        ]
    }
}

var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/js/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'deploy'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
}
