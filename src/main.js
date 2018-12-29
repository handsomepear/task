import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible'
import 'vant/lib/index.css'
import './styles/app.less'



import { Tab, Tabs, List, Loading, Toast} from 'vant'
import loading from './plugin/loading'

Vue.config.productionTip = false

Toast.setDefaultOptions({
  forbidClick: true,
  duration: 1500
})


Vue.use(Tab).use(Tabs).use(List).use(Loading)
Vue.use(loading)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
