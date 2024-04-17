// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import cmpFixedTwo from '@/components/cmp-fixed-two'
import axios from 'axios'
// import AxiosHeaders from './AxiosHeaders.js'
// const headersToObject = (thing) => thing instanceof AxiosHeaders ? { ...thing } : thing

Vue.config.productionTip = false
// 挂到Vue的实例上去
Vue.prototype.$a = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { cmpFixedTwo },
  template: '<div><router-view/><cmp-fixed-two/></div>'
})
