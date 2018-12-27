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

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.bizStatus === 0) {
        return Promise.resolve(response)
      }
      return Promise.reject(response)
    }
  },
  err => {
    return Promise.reject(err)
  }
)


export default service