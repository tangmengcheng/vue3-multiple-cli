import { join } from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.vue', '.ts']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Vue3多页环境',
            template: './src/index.html'
        })
    ]
}