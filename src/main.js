import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'))

Vue.component('loading', Loading)

// router.beforeEach((to, from, next) => {
//   // 如果路由轉不過來就來看這裡
//   // console.log(to.meata)
//   // if (to.meta.requiresAuth) { confirm('模擬登入狀態，請問是否已登入?') ? next('/wall') : next('/login') } else next()
// })

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
