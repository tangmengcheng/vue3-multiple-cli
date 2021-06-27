import { join } from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

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
        new CleanWebpackPlugin()
    ]
}