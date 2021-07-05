import HtmlWebpackPlugin from "html-webpack-plugin"
import { glob } from 'glob'
const { join } = require('path')


export function generatePageList(): HtmlWebpackPlugin[] {
    try {
        const files = glob.sync('src/pages/*') // 同步方法读取 *只会匹配一级文件夹，** 匹配两次文件夹
        if(files.length) {
            return files.map(item => {
                const name = item.split('/').pop()
                return new HtmlWebpackPlugin({
                    title: name,
                    template: `./${item}/index.html`,
                    filename: `${name}.html`,
                    chunks: [name!],
                    favicon: join(__dirname, '../public/logo.png')
                })
            })
        }
        return []
    } catch (error) {
        throw error
    }
}
