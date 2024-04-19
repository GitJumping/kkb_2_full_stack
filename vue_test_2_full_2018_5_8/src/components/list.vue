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
      items: this.$store.state.arr
    }
  },
  mounted () {
    // 使用vuex getter 触发读取，这里注释掉
    // this.$store.dispatch('loadAttr')
  },
  components: {ListItem},
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
