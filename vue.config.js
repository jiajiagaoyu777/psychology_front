const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false,
  devServer: {
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: { //配置跨域
      '/api': {
        target: 'http://43.143.82.82:8080/',
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api/': '' //请求的时候使用这个api就可以
        }
      }
    }
  }
})
