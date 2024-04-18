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
