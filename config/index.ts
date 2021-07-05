const { merge } = require('webpack-merge')
const baseConfig = require('../build/webpack.base')
const devConfig = require('../build/webpack.dev')
const proConfig = require('../build/webpack.pro')
module.exports = (env: Record<string, boolean | boolean | number>) => {
    console.log(env)
    const isProd = env.production === true
    if(isProd) {
        return merge(baseConfig, proConfig)
    } else {
        return merge(baseConfig, devConfig)
    }
}