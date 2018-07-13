const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: './index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'index.dist.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin()
    ]
}
