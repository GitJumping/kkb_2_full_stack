<template lang="html">
  <div>
    <li>
      <h3><input type="checkbox" value="请选择" name="" v-model="checkeding">{{ data.name }}</h3>
      <span>￥{{ data.price }}</span>
      <span>月售：{{ data.sales }}</span>
      <input type="button" value="+1" @click="addOne"/>
      <input type="button" value="-1" @click="minusOne"/>
    </li>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkeding: false,
      data: {},
      state: this.$store.state
    }
  },
  mounted () { // 钩子——事件
    // 钩子能组织事件
    // console.log(this.$attrs)
    // this.txt = this.$attrs['str']
    this.data = this.$attrs.item
    // console.log('list_item mounted this', this)
    // console.log('list_item mounted this', this.$store)
  },
  methods: {
    addOne () {
      this.$store.dispatch('addCount', 2)
    },
    minusOne () {
      this.$store.dispatch('minusCount', 4)
    }
  },
  watch: {
    // 函数名称要和vue实例的属性名一致
    checkeding () {
      if (this.checkeding) {
        console.log('123wef')
        this.$attrs.plus()
      } else {
        console.log('123wefwefwe')
        this.$attrs.minus()
      }
    }
  }
}
</script>

<style lang="css">

</style>
