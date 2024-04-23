export default {
  state: {
    'name': '张力修己',
    'age': '35',
    'title': 'VP'
  },
  mutations: {
    setAge (state, arg) {
      state.age = arg
    }
  },
  actions: {
    setAge ({state, commit}, arg) {
      commit('setAge', arg)
    }
  },
  getters: {

  }
}
