<!-- eslint-disable vue/require-v-for-key -->
<template lang="html">
  <div>
    <span style="font-size:30px;"></span>
    {{ items }}
    <ul>
      <!-- <ListItem v-for="item in items" :key="item.name" :item="item"/> -->
      // eslint-disable-next-line vue/require-v-for-key
      <li v-for="a in items">li-元素-{{ a }}</li>
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/list_item'
// import axios from 'axios'

export default {
  data () {
    return {
    // items: [
    //   {name: '1', price: '2', sales: '3'},
    //   {name: '4', price: '5', sales: '6'},
    //   {name: '7', price: '8', sales: '9'},
    //   {name: '10', price: '11', sales: '12'}
    // ],
      // items: this.$store.state.arr
      // items: []
    }
  },
  async mounted () {
    // 使用vuex getter 触发读取，这里注释掉
    // vuex全局状态管理-1，这里async有没有都ok
    // this.$store.dispatch('loadAttr')
  },
  components: {ListItem},
  computed: {
    // 不是一个实在的值，虚拟出来的，内部是一个函数
    // 什么时候数据变了，什么时候函数会执行，起到缓存作用；类似于是一个getter函数，获取值用的
    // vuex经常和computed配合起来用，尤其是涉及到数据交互；另一个是需要有地方去触发vuex的actions函数
    // computed兼容mutations的两种赋值

    // 1. 从getters获取值，getters是异步的场景，computed也要是异步。但是computed里不能用 async await
    // async items () {
    //   let res = await this.$store.getters.arr
    //   console.log(res)
    //   return res
    // }
    // 2. 从getters获取值，getters是同步的场景
    items () {
      // getters.arr 看起来像属性，但实际是个函数
      let res = this.$store.getters.arr
      // console.log(res)
      return res
    }
  },
  methods: {
    plusOne () {
      this.count++
    },
    minusOne () {
      this.count--
    },
    addCount () {
      console.log(this.$store)
    },
    minusCount () {
      console.log(this.$store)
    }
  }
}
</script>

<style lang="css">

</style>
