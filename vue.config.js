const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8088,
    // disableHostCheck: true,
    host:'0.0.0.0'
  }
})
