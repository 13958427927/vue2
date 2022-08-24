// 脚手架是不是封装webpack
// 在webpack.config.js配置
// vue把webpack配好了, 隐藏了webpack的配置
// 但是vue考虑到, 有可能有一些webpack的需求
// 提供了vue.config.js配置webpack

// vue.config.js 分为两部分配置
//  - vue自己的配置
//  - webpack的配置, 可以配置到 configureWebpack
const { defineConfig } = require('@vue/cli-service')

// defineConfig 为了给代码提示的
module.exports = defineConfig({
  lintOnSave: false ,
  // 给babel用的, babel转移js代码,transpileDependencies: true
  // babel在转移的时候 会把node_modules下的所有代码转移一遍
  transpileDependencies: true,
  // vue自己的配置
  configureWebpack: {
    // 所写的所有的东西和webpack的配置一样
    devServer: {
      open: true,
      port: 8888,
      // 指定域名到本机
      host: 'localhost'
    }
  }
})

/*
原生webpack.config.js里 假如说,打开服务器的时候自动打开浏览器, 并且端口号设置8888

module.exports = {
  devServer:{
    open:true,
    port:8888
  }
}
*/