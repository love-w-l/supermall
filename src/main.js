import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store";

import toast from "./components/common/toast/index";

Vue.use(toast)

Vue.config.productionTip = false

//将总事件$bus进行挂载到总事件上
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
