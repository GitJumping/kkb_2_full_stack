// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
// 使用fetch请求，先注释掉
// import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false
// 使用fetch请求，先注释掉
// Vue.prototype.ajax = axios

// vuex undefined的问题 https://blog.csdn.net/m0_53425507/article/details/126334407
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true, // 严格模式--只能由 mutation 修改状态
  state: {
    count: 0
  },
  mutations: {
    // arg 是提交动作时候，顺便带的一个参数
    addCount (state, arg) {
      arg = arg || 1
      state.count += arg
    },
    minusCount (state, arg) {
      arg = arg || 1
      state.count -= arg
    }
  },
  actions: {
    // 和 mutations 名字可以相同，也可以不同
    addCount (store, arg) {
      store.commit('addCount', arg)
      // console.log(store)
    },
    minusCount (store, arg) {
      store.commit('minusCount', arg)
    }
  },
  getters: {

  }
})
console.log('main vuex', store)

// axios.get(`http://localhost:8081/list`).then(res => {
//   console.log('res', res)
// }, error => {
//   console.log('error', error)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  template: '<div><router-view/></div>'
})
