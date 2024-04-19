import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 严格模式--只能由 mutation 修改状态
  state: {
    // item: this.$store
    arr: ['a', 'bc', 'd']
  },
  mutations: {
    // arg 是提交动作时候，顺便带的一个参数
    setAttr (state, arg) {
      // 赋值方式-1 赋值后，在组件的data数据里拿不到新的值的
      // 当然能够赋值后，状态就刷新，组件直接拿到更好--->那就是在computed里面取值更新组件的值
      console.log('vuex store setAttr', state.arr, arg)
      state.arr = arg
      // 赋值方式-2 能拿到新的值，但是不友好，性能不高
      // 所以vuex经常和computed一起使用，尤其涉及到数据交互；然后必须要主动触发actions里的方法（loadAttr），项目大的时候容易造成混乱
      // 对服务器可能造成性能影响；可能服务器也不靠谱，可能同一个接口读多次出现问题
      // 所以这里最好不是由程序员去读，而是vuex机制去读取，见-->vuex全局状态管理-2
      // arg.forEach(element => {
      //   state.arr.push(element)
      // })
    }
  },
  actions: {
    async loadAttr ({commit}, arg) {
      // commit是store内置的更新函数
      let arr = await (await fetch('http://localhost:8081/a')).json()
      console.log('vuex store loadArr', arr)
      commit('setAttr', arr)
    }
  },
  getters: {
    // async getCount (state) {
    //   console.log(arguments)
    //   if (state.arr.length !== 0) {
    //     return state.arr
    //   } else {
    //     let arr = await (await fetch('http://localhost:8081/a')).json()
    //     commit('setAttr', arr)
    //   }
    //   return state.count
    // }
  }
})
// console.log('main vuex', store)