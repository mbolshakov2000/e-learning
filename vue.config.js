const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'/e-learning/',
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devtool: 'source-map'
  }
  // lintOnSave:false
})
