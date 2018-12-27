import Vue from 'vue'
import Router from 'vue-router'
// import store from './store/index'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      meta: {title: '任务列表'}
    },
    // 首页
    {
      path: '/index',
      name: 'index',
      meta: {title: '任务列表'},
      component: resolve => {
        require(['@/views/Index/Index.vue'], resolve)
      }
    },
    // 钱包
    {
      path: '/wallet',
      name: 'wallet',
      meta: {title: '钱包'},
      component: resolve => {
        require(['@/views/Wallet/Wallet.vue'], resolve)
      }
    },
    // 任务详情
    {
      path: '/detail',
      name: 'detail',
      meta: {title: '任务详情'},
      component: resolve => {
        require(['@/views/Detail/Detail.vue'], resolve)
      }
    },
    // 任务提交
    {
      path: '/submit',
      name: 'submit',
      meta: {title: '提交任务'},
      component: resolve => {
        require(['@/views/Submit/Submit.vue'], resolve)
      }
    },
    // 我的任务
    {
      path: '/mine',
      name: 'mine',
      meta: {title: '我的任务'},
      component: resolve => {
        require(['@/views/Mine/Mine.vue'], resolve)
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router