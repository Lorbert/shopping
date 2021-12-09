import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import Toast from 'components/common/toast'
import FastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(VueLazyLoad)
Vue.use(Toast)

//解决点击的300毫秒延迟的问题
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$bus = new Vue()
