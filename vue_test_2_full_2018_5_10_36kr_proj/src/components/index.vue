<!-- 我的页面 -->
<template>
  <div id=“index_vue” class='my_page'>
    <!-- 用户名：{{ user }}，年龄{{ age }} -->
    <!-- <input type="button" value="设置年龄" @click="fn"/> -->
    <IncHeader/>
      <div class="index_36kr">
        <div class="pagewrap">
          <div class="mainlib_flex_wapper">
            <IndexMain/>
            <IndexSide/>
          </div>
        </div>
      </div>
    列表
    <IncFooter/>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
import IncHeader from '@/components/inc/header'
import IncFooter from '@/components/inc/footer'

import IndexMain from '@/components/index_main'
import IndexSide from '@/components/index_side'

export default {
  name: 'Index',
  // import引入的组件需要注入到对象中才能使用
  components: {IncHeader, IncFooter, IndexMain, IndexSide},
  props: ['list'],
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {
    user () {
      return this.$store.state.user.name
    },
    age () {
      return this.$store.state.user.age
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    // 自动带出，module里面各个模块各自的state属性
    // console.log('index', this.$store.state)
  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {
    fn () {
      this.$store.dispatch('setAge', 4)
    }
  }
}
</script>

<style lang="css">

</style>
