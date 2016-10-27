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
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 9090
    }
};