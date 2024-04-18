<template lang="html">
  <div>
    <li>
      <input type="checkbox" value="请选择" name="" v-model="checkeding">{{checkeding}}
      {{ data.name }}--{{ data.price }}--{{ data.sales }}
    </li>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkeding: false,
      data: ''
    }
  },
  mounted () { // 钩子——事件
    // 钩子能组织事件
    console.log(this.$attrs)
    // this.txt = this.$attrs['str']
    this.data = this.$attrs.item
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
