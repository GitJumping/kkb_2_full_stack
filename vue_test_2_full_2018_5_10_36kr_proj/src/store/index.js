import Vue from 'vue'
import Vuex from 'vuex'

import User from './user'
import Artical from './artical'

Vue.use(Vuex)

// 演示代码
function sleep (sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, sec * 1000)
  })
}

// 请求数据，和数据状态改变，修改
const store = new Vuex.Store({
  strict: true, // 严格模式--只能由 mutation 修改状态
  state: {
    artical_list: [],
    cuurPage: 0,
    loading: false,
    loading_more: false
  },
  mutations: {
    startLoading (state) {
      state.loading = true
    },
    endLoading (state) {
      state.loading = false
    },
    appendArticalList (state, arg) {
      state.artical_list = state.artical_list.concat(arg)
    },
    addPage (state, arg) {
      state.cuurPage++
    },
    startLoadingMore (state) {
      state.loading_more = true
    },
    endLoadingMore (state) {
      state.loading_more = false
    }
  },
  actions: {
    async loadOneMorePage ({state, commit}, arg) {
      console.log('cuurpage', state.cuurPage)
      // 页面遮罩的设计思路
      commit('startLoading')
      commit('startLoadingMore')
      await sleep(3)
      let data = await (await fetch(`http://localhost:8090/list?page=${state.cuurPage}`)).json()
      commit('endLoading')
      commit('endLoadingMore')
      commit('appendArticalList', data)
      commit('addPage')
    }
  },
  getters: {
    list_data (state) {
      if (state.cuurPage === 0) {
        store.dispatch('loadOneMorePage')
      }
      return state.artical_list
    }
  },
  // 1. 数据分隔
  // 2. mutations actions可以同名，同时被触发
  modules: {
    user: User,
    artical: Artical
  }
})
// console.log('main vuex', store)

/*
一般来说，index.js 里面是不放东西的
里面放的是全栈完全通用的东西
功能性内容全放外面
*/
export default store
