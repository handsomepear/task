const path = require('path')

module.exports = {
  devServer: {
    port: 80,
    disableHostCheck: true
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/pages/task/' : '/', // 生产环境打包
  // baseUrl: process.env.NODE_ENV === 'production' ? '/pages/tasktest/' : '/', // 测试环境打包
  assetsDir: 'assets',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "./src/styles/common.less")
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75, // 换算的基数
            selectorBlackList: ['van-'], // 忽略转换正则匹配项
            propList: ['*'],
          }),
        ]
      }
    }
  }
}


