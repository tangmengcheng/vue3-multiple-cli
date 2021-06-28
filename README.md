# vue3-multiple-cli

Vue3 多页项目脚手架

> 初始化

```sh
npm install --save-dev typescript ts-node @types/node @types/webpack
# and, if using webpack-dev-server
npm install --save-dev @types/webpack-dev-server

npm install webpack webpack-cli -D
```

<!-- 注意：webpack现在默认能识别.ts文件，无需添加对应的loader -->

```sh
npm install clean-webpack-plugin -D
```

```sh
npm install html-webpack-plugin -D
npx tsc --init 初始化tsconfig.json文件
```

```sh
npm install webpack-dev-server -D
开发服务器
```

```sh
配置vue的环境
npm install vue-loader vue-style-loader ts-loader css-loader @babel/core babel-loader @vue/babel-preset-app vue-template-compiler -D

import VueLoaderPlugin from 'vue-loader/lib/plugin'
无法找到模块“vue-loader/lib/plugin”的声明文件
npm i --save-dev @types/vue-loader OR
添加一个包含 `declare module 'vue-loader/lib/plugin';` 的新声明(.d.ts)文件

const VueLoaderPlugin = require('vue-loader/lib/plugin') OR
import { VueLoaderPlugin } from 'vue-loader'

```

// @ts-ignore 取消下一行的警告

```sh
TypeError: Cannot read property 'parseComponent' of undefined
"vue-template-compiler": "^2.6.14", 这个版本不兼容vue3
 npm uninstall vue-loader -D
 npm install vue-loader@next -D
需要安装这个loader npm i @vue/compiler-sfc -D
```

// 运行警告，取消
You are running the esm-bundler build of Vue. Vue 版本的问题

<!-- 解决 -->

```js
http://link.vuejs.org/feature-flags
new webpack.DefinePlugin({
    '__VUE_OPTIONS_API__': true,
    '__VUE_PROD_DEVTOOLS__': false
}),
```
