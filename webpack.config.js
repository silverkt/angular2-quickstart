var path = require('path');

module.exports = {
    entry: {
        main: './app/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    // webpack-dev-server 只会在内存中打包静态资源 用于开发环境
    // 生成环境需要 webpack 打包
    // 如果无法热替换 应该是电脑的原因 请重启电脑，有时使用webstrom里也无法更新，真实项目可以换成 browser-sync
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 9090
    }
};