import { CleanWebpackPlugin } from 'clean-webpack-plugin'
export default {
    mode: 'production',
    output: {
        filename: '[name].[chunkHash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}