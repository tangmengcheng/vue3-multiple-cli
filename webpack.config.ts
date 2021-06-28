import { join } from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import webpack from 'webpack'

export default {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.vue', '.js'],
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 8888
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            '__VUE_OPTIONS_API__': true,
            '__VUE_PROD_DEVTOOLS__': false
        }),
        new HtmlWebpackPlugin({
            title: 'Vue3多页环境',
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
    ]
}