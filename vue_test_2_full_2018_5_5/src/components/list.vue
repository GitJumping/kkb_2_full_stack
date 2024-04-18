<template lang="html">
  <div>
    <span style="font-size:30px;"></span>
    已选中：{{count}}件
    <ul>
<!--      <ListItem str="qewd"/>-->
<!--      <ListItem str="vdes"/>-->
<!--      <ListItem str="rvhn"/>-->
<!--      <ListItem str="egcb"/>-->
<!--      <ListItem str="ykmy"/>-->
<!--      <ListItem str="5ybk"/>-->
      <ListItem v-for="item in items" :key="item.name" :item="item" :plus="plusOne" :minus="minusOne"/>
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/list_item'
// import axios from 'axios'

export default {
  data () {
    return {items: [
      {name: '1', price: '2', sales: '3'},
      {name: '4', price: '5', sales: '6'},
      {name: '7', price: '8', sales: '9'},
      {name: '10', price: '11', sales: '12'}
    ],
    count: 0
    }
  },
  /*
  mounnted () {
    // 第一版
    // 在 list.vue 子组件import axios，直接通过 axios 异步加载
    axios.get(`http://localhost:8081/list`).then(res => {
      console.log('list res', res)
    }, error => {
      console.log('list error', error)
    })
  },
   */
  /*
  mounted () {
    // 第二版
    // 先在main.js，在Vue 原型prototype上挂载axios，在 list.vue 用挂载变量来使用
    // console.log(this.ajax)
    this.ajax(`http://localhost:8081/list`).then(res => {
      console.log('list res', res)
    }, error => {
      console.log('list error', error)
    })
  },
  */
  // Vue实例上挂载axios，通过 Promise 方式获取，能取到
  /*
  async mounted () {
    let res = await this.ajax(`http://localhost:8081/list`)
    console.log('async mounted res', res)
  },
   */
  /*
  async mounted () {
    try {
    // 第三版
      // await ajax() 返回的是一个Promise对象，Promise当然没有data属性
      // let res = await this.ajax(`http://localhost:8081/list`).data
      // console.log(res)
      let res = (await this.ajax(`http://localhost:8081/list`)).data
      console.log(res)
      this.items = res
    } catch (e) {
      // 比如服务器没有启动，网络失败等异常
      // 有await就要有try
      alert('数据加载失败，请重试')
    }
  },
   */
  async mounted () {
    // 使用fetch请求数据
    // 原生 js 提供的改进版ajax解决方案，需要调用两次 await
    let res = await (await fetch(`http://localhost:8081/list`)).json()
    console.log('fetch mounted', res)
    this.items = res
  },
  components: {ListItem},
  methods: {
    plusOne () {
      this.count++
    },
    minusOne () {
      this.count--
    }
  }
}
</script>

<style lang="css">

</style>
