import { makeMoneyGetUserInfo } from '@/api/api'

const wxToolkit = {
  data: {
    appId: 'wx014ff77b18db9ebd',
    appSecret: '2825aef9ee9188216fcd765285049a9e'
  },
  getRequest() {
    const url = location.search //获取url中"?"符后的字串
    const theRequest = {}
    if (url.indexOf("?") !== -1) {
      const str = url.substr(1)
      const strs = str.split("&")
      for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1])
      }
    }
    return theRequest
  },
  // 获取 code
  getOpenId(cb) {
    let requestParams = this.getRequest()
    if (requestParams.code) {
      // todo 获取用户信息
      makeMoneyGetUserInfo(requestParams.code).then(({ data }) => {
        cb && cb(data)
      })
    } else {
      let url = window.location.href
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.data.appId +
        '&redirect_uri=' + encodeURIComponent(url) + '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
    }
  },
}

export default wxToolkit