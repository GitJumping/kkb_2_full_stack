import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    /*
      addCount (store, arg) {
        store.commit('addCount', arg)
        // console.log(store)
      },
      minusCount (store, arg) {
        store.commit('minusCount', arg)
      }
      */
    // 另一种写法
    addCount ({commit}, arg) {
      commit('addCount', arg)
      // console.log(store)
    },
    minusCount ({commit}, arg) {
      commit('minusCount', arg)
    }
  },
  getters: {
    getCount (state) {
      return state.count
    }
  }
})
// console.log('main vuex', store)
