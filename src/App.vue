<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import wxToolkit from './util/wxToolkit'

  export default {
    name: 'app',
    created() {
      const openId = sessionStorage.getItem('openId')
      if(!openId) {
        wxToolkit.getOpenId(data => {
          sessionStorage.setItem('openId', data.openId)
          sessionStorage.setItem('userInfo', JSON.stringify({avatar: data.headUrl, nickName: data.nickName}))
        })
      }
    }
  }
</script>
