const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css', // 一些第三方库的css 单独打包成css
            chunkFilename: '[name].css'
        })
        // new CopyPlugin({
        //     patterns: [
        //         { from: 'public', to: 'public' }
        //     ]
        // })
    ]
}