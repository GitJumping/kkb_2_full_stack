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
    }
  },
  async mounted () {
    // 使用vuex getter 触发读取，这里注释掉
    // vuex全局状态管理-1，这里async有没有都ok
    this.$store.dispatch('loadAttr')
  },
  components: {ListItem},
  computed: {
    // 不是一个实在的值，虚拟出来的，内部是一个函数
    // 什么时候数据变了，什么时候函数会执行，起到缓存作用
    // vuex经常和computed配合起来用，尤其是涉及到数据交互；另一个是需要有地方去触发vuex的actions函数
    // computed兼容mutations的两种赋值
    items () {
      return this.$store.state.arr
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
