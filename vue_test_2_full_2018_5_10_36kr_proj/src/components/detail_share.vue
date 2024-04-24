<!-- 我的页面 -->
<template lang='html'>
  <div class="share-nav-h5">
    <div class="inner">
      <div class="box am-cf">
        <div class="each-cell">
          <span class="icon-collect cell">
          </span>
        </div>
        <div class="each-cell">
          <span class="icon-comments cell">
          </span>
        </div>
        <div class="each-cell">
          <a class="icon-weibo weibo cell" href="http://share.baidu.com/s?type=text&amp;searchPic=1&amp;sign=on&amp;to=tsina&amp;key=595885820&amp;url=http://36kr.com/p/5127978.html&amp;title=%E7%8B%AC%E8%A7%92%E5%85%BD%E5%BD%92%E6%9D%A5%EF%BC%9A%E6%9C%BA%E9%81%87%E5%92%8C%E9%A3%8E%E9%99%A9">
          </a>
        </div>
        <div class="each-cell">
          <span class="icon-back-top back cell">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'

export default {
  name: 'detailShare',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: [],
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 过滤器，或者转换器，可以放些工具类的操作
  filters: {
    t (input) {
      return input + ''
    }
  },
  // 复杂的业务逻辑操作，方法集合，大的方法集合
  methods: {

  }
}
</script>

<style lang='css'>
</style>
