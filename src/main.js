import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import 'vant/lib/index.css'
import './styles/app.less'
import { Tab, Tabs } from 'vant'
Vue.config.productionTip = false
Vue.use(Tab).use(Tabs)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
