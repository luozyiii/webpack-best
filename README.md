## Webpack 5

### 任务一：转译JS
把src/index.js 变成大部分浏览器支持的JS

```bash
# 查看webpack 版本
npm info webpack versions

# webpack 编译
./node_modules/.bin/webpack

```

#### tree sharking

#### 知识点
- 如何安装webpack 和 webpack-cli 最新版本
```bash
npm info xxx versions
```

- mode 为 development 和 production 的区别是什么?
```bash
开发环境方便开发者，生产环境方便用户
development 有注释、代码分析
```

- devtool 为 eval 和 false 的区别是什么？
```
是否使用 eval ，用eval可方便开发者工具创建文件
```

- 如何回答 A技术 和 B技术 的区别是什么？
```
先分别回答是什么？然后分别分析优缺点
```

- webpack 是怎么处理依赖的
```
全写到文件里，然后互相引用
```

- 什么是 tree-shaking
```
把没用的依赖删掉
```

- 注意：目前的了解并不深入，每个问题都能再深究

### 任务一变形1
```
把src/index.js 改为src/main.js
查看webpack.config 文档，改entry
```

#### 知识点
- 为什么src/main.js 不行， ./src/main.js 行
```
没有为什么，webpack就是这么设计的
```

### 任务一变形2
```
输出为dist/xxx.js 而不是dist/main.js
看文档，改output.filename
```

### 任务一变形3
```
把src/a.js 和 src/b.js 分别转译成两个文件
看文档 改entry 为对象

entry: {
    a:'./src/a.js',
    b: './src/b.js'
},
```

### 任务一变形4
```js
提取共用依赖
文档基本没用，去网上找博客

// a.html => a.js
// b.html => b.js

// -------

// a.html => wyz.js & a.js
// b.html => ---- b.js

optimization: {
    splitChunks: {
        minSize: 1,
        chunks(chunk) {
            return !['wuyanzu'].includes(chunk.name)
        },
        name: 'commons'
    }
}
```

#### 知识点
- splitChunks 的这些属性是做什么的
```
minSize: 2000                                - 多少字节的文件才抽离出来
minChunks: 1                                 - 被多少chunk 共享才抽离出来
chunks: 'async' | 'initial' | 'all' | 函数   - 要分析并优化哪些chunk
```

### 任务一变形5:
```
IE11 不支持箭头函数，能兼容一下？
使用babel 并且装一些插件即可
webpack 还要配置一下
```

```js
// 依赖
npm install -D babel-loader @babel/core @babel/preset-env

// 配置
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                    ]
                }
            }
        }
    ]
}

target: ['web', 'es5'],
```