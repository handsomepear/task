module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75, // 设置根元素大小
      propList: ['*'], // 作用于哪些属性
      selectorBlackList: ['van-'] // 忽略符合规则的Css class
    }
  }
}