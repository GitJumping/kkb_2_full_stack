// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
// 使用fetch请求，先注释掉
import axios from 'axios'

Vue.config.productionTip = false
// 使用fetch请求，先注释掉
Vue.prototype.ajax = axios

// axios.get(`http://localhost:8081/list`).then(res => {
//   console.log('res', res)
// }, error => {
//   console.log('error', error)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  template: '<div><router-view/></div>'
})
