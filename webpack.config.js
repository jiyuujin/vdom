const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',

    entry: './src/main.ts',

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },

    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
