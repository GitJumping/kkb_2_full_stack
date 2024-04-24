<!-- 我的页面 -->
<template lang='html'>
  <div class="article-detail" style="position: relative; z-index: 1111;">
    <div></div>
    <div class="only-article">
      <div class="center-content">
        <div class="content-wrapper">
          <div class="loading_article">
            <div>
              <div class="circle">
                <i class="icon-loading">
                </i>
              </div>
              <b>
                加载中
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'

export default {
  name: 'articleDetail',
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
