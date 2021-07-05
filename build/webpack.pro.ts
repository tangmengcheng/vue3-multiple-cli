const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         { from: 'public', to: 'public' }
        //     ]
        // })
    ]
}