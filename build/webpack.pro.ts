const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'production',
    output: {
        filename: '[name].[chunkHash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}