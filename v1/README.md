### 代码结构和主要实现的内容

- demo1
 + webpack 初始化使用，一些配置 , 在命令行里， 先执行 npm run pre 再执行 npm run develop
 + 此处有坑，为什么这样说呢，因为老师说webpack-dev-server 把 webpack 封装了一次，
 可以直接运行 webpack-dev-server –config xx.js  ,
  但是他又说使用webpack-dev-server 生成的bundle.js在内存中，
  实际上并没有生成，自相矛盾，我觉的是错的，因为根本运行不了

### webpack 笔记

1. 安装webpack
2. 初步搭建项目和配置(deploy中的index.html是手动拷贝进去的)
3. 指定一个文件，来运行webpack的编译 (webpack --config webpack.develop.config.js)
4. 可以将3的代码放到package.json中的scripts来做，避免每次输入很多东西。只要运行 npm run develop 就行
5. 安装 webpack-dev-server 作为项目依赖
6. 可以通过webpack.develop.config.js来配置，也可以通过CLI的命令来配置：
webpack --entry ./src/js/app.js --output-filename deploy/bundle.js 来做

webpack 快的原因是有多级缓存。







