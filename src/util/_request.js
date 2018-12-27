import axios from 'axios'

const service = axios.create({
  baseURL: 'https://wechat-mp-test.j.cn',
  timeout: 15000
})

// 请求配置
service.interceptors.request.use(
  config => {
    config.method = 'POST'
    config.headers = { 'content-type': 'application/json' }
    config.data = {
      openId: 'zps',
      ...config.data
    }
    return config
  }
)


export default service