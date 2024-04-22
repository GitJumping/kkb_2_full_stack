import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 请求数据，和数据状态改变，修改
const store = new Vuex.Store({
  strict: true, // 严格模式--只能由 mutation 修改状态
  state: {
    artical_list: [],
    cuurPage: 0,
    loading: false
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
    }
  },
  actions: {
    async loadOneMorePage ({state, commit}, arg) {
      console.log('cuurpage', state.cuurPage)
      commit('startLoading')
      let data = await (await fetch(`http://localhost:8090/list?page=${state.cuurPage}`)).json()
      commit('endLoading')
      
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
  }
})
// console.log('main vuex', store)

export default store
