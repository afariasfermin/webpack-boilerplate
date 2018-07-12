const path = require('path');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: './index.js',
    mode: 'development',
    output: {
        filename: 'index.dist.js',
        path: path.resolve(__dirname, 'dist')
    }
}