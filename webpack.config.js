const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = env => {
    return {
        context: path.resolve(__dirname, 'src'),
        devtool: 'inline-source-map',
        entry: './index.js',
        mode: env.mode,
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
                    exclude: /node_modules/,
                    include: /src/,
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
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
}
