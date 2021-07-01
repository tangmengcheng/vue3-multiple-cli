import { merge } from 'webpack-merge'
import baseConfig from '../build/webpack.base'
import devConfig from '../build/webpack.base'
import proConfig from '../build/webpack.base'
export default (env: Record<string, boolean | boolean | number>) => {
    console.log(env)
    const isProd = env.production === true
    if(isProd) {
        return merge(baseConfig, proConfig)
    } else {
        return merge(baseConfig, devConfig)
    }
}