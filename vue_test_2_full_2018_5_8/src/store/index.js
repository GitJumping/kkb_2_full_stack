import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // 严格模式--只能由 mutation 修改状态
  state: {
    // item: this.$store
    // arr: ['a', 'bc', 'd']
    arr: []
  },
  mutations: {
    // arg 是提交动作时候，顺便带的一个参数
    setAttr (state, arg) {
      // 赋值方式-1 赋值后，在组件的data数据里拿不到新的值的
      // 当然能够赋值后，状态就刷新，组件直接拿到更好--->那就是在computed里面取值更新组件的值
      // console.log('vuex store setAttr', state.arr, arg)
      state.arr = arg
      // 赋值方式-2 能拿到新的值，但是不友好，性能不高
      // 所以vuex经常和computed一起使用，尤其涉及到数据交互；然后必须要主动触发actions里的方法（loadAttr），项目大的时候容易造成混乱
      // 对服务器可能造成性能影响；可能服务器也不靠谱，可能同一个接口读多次出现问题
      // 所以这里最好不是由程序员去读，而是vuex机制去读取，见-->vuex全局状态管理-2
      //    解决方案是，不用在别的地方触发读取数据，而是把数据都放在getters里，由getters作为一个统一的接口，在其他的地方引用getters获取值
      //        获取值后，在computed里面引用就行；在日后数据有变化，computed会自动感知变化，变更相关计算或操作
      // arg.forEach(element => {
      //   state.arr.push(element)
      // })
    }
  },
  // 手动触发actions        --->        适合异步
  // 在数据交互之外的操作，方便一些
  actions: {
    async loadAttr ({commit}, arg) {
      // commit是store内置的更新函数
      let arr = await (await fetch('http://localhost:8081/a')).json()
      console.log('vuex store loadArr', arr)
      commit('setAttr', arr)
    }
  },
  // 结论：数据交互（actions，fetch），用getters更方便，getters不适合别的操作
  //    其他的异步操作，用action更方便
  // getters获取数据        --->        适合同步
  // getters异步下就很麻烦
  getters: {
    // async arr (state) {
    // getters arr 写成异步调用时，组件里，computed里直接使用 this.$store.getters.arr 返回的是一个Promise对象
    // 但是getters异步这么写也很麻烦
    // let arr = await (await fetch('http://localhost:8081/a')).json()
    // console.log('vuex store loadArr', arr)
    // store.commit('setAttr', arr)
    // }
    //
    // getters arr 写成同步调用时，dispatch return
    arr (state) {
      console.log(arguments)
      // 用同步的方式调用
      // 这样就只读一次，前提是数据确实需要缓存，不能缓存的就不要这么做
      if (state.arr.length === 0) {
        store.dispatch('loadAttr')
      }
      return state.arr
    }
  }
})
// console.log('main vuex', store)

export default store
