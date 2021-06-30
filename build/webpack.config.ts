import { join } from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import webpack from 'webpack'
import { generatePageList } from '../config/utils'

export default {
    mode: 'development',
    entry: {
        home: './src/pages/home/index.ts',
        about: './src/pages/about/index.ts'
    },
    output: {
        path: join(__dirname, '../dist'),
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
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        port: 8888,
        index: 'home.html' // 以它默认为主页
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            '__VUE_OPTIONS_API__': true,
            '__VUE_PROD_DEVTOOLS__': false
        }),
        ...generatePageList()
        // new HtmlWebpackPlugin({
        //     title: 'Home',
        //     template: './src/pages/home/index.html',
        //     filename: 'home.html',
        //     chunks: ['home']
        //     // filename: 'home/index.html' 如果需要指定index.html放在哪个目录
        // }),
        // new HtmlWebpackPlugin({
        //     title: 'About',
        //     template: './src/pages/about/index.html',
        //     filename: 'about.html',
        //     chunks: ['about']
        // }),
    ]
}