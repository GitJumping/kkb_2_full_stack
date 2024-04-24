<!-- 我的页面 -->
<template>
  <div class='my_page'>
    <!-- {{ article_data }} -->
    <IncHeader/>
    <div class="pagewrap pagewrap-full">
      <div class="article-detail">
        <div class="post-wrapper">
          <div class="post-detail-con-box full-reading mainlib_flex_wapper">
            <ArticleMain :data="article_data"/>
            <ArticleRight :data="article_data"/>
          </div>
        </div>
      </div>
      <DetailShare/>
      <ArticleDetail/>
    </div>
    <IncFooter/>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
// import IncHeader from '@/components/inc/header'
import IncFooter from '@/components/inc/footer'

import ArticleMain from '@/components/article_main'
import ArticleRight from '@/components/article_right'
import DetailShare from '@/components/detail_share'
import ArticleDetail from '@/components/article_detail'

export default {
  name: 'Detail',
  // import引入的组件需要注入到对象中才能使用
  components: {
    // 采用这种写法，意思是用到了才去加载，webpack会不把这个组件和主模块编译到一起，而是分开编译
    // 就是[懒加载]
    IncHeader: import('@/components/inc/header'),
    IncFooter,
    ArticleMain,
    ArticleRight,
    DetailShare,
    ArticleDetail
  },
  props: ['list'],
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {
    article_data () {
      console.log(this.$store.state.article_data)
      return this.$store.state.article_data
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    let id = this.$route.params.id
    this.$store.dispatch('loadArticle', id)
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

  }
}
</script>

<style lang='css'>
</style>
