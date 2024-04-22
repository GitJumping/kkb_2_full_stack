<!-- 我的页面 -->
<template lang='html'>
  <div id=“index_list” class="list_con">
    <span >加载中..........</span>
    <div class="kr_tab">
      <div class="kr_tab_box">
        <div class="kr_tab_wapper" style="width: auto; position: relative; left: 0px;">
          <div class="new-channel-tab-bg">
          </div>
          <div class="new-channel-tab new-channel-tab-hover">
            <div class="tab-pop-up-pc">
              <span class="img">
              </span>
              <span class="arrow">
              </span>
              <span class="text">
                频道即将换新 敬请期待!
              </span>
            </div>
          </div>
          <ul class="am-cf stealth-scroll-bar">
            <li class="kr_active">
              <h2 class="seo_h2">
                <span>最新文章</span>
              </h2>
            </li>
            <li class="">
              <span>大公司</span>
            </li>
            <li class="">
              <span>消费</span>
            </li>
            <li class="">
              <span>娱乐</span>
            </li>
            <li class="">
              <span>前沿技术</span>
            </li>
            <li class="">
              <span>汽车交通</span>
            </li>
            <li class="">
              <span>区块链</span>
            </li>
            <li class="">
              <span>技能Get</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <div class="">
        <div>
          <div class="kr_article_list">
            <div>
              <ul class="feed_ul">
                <IndexListItem v-for="data in items" :key="data.id" :data="data"/>
              </ul>
            </div>
          </div>
          <div class="loading_more">
            浏览更多
            <span class="icon-arrow-right"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
import IndexListItem from '@/components/index_list_item'

export default {
  name: 'IndexList',
  // import引入的组件需要注入到对象中才能使用
  components: {IndexListItem},
  props: ['list'],
  data () {
    // 这里存放数据
    return {
    }
  },
  // 监听属性 类似于data概念
  computed: {
    items () {
      return this.$store.getters.list_data
    }
  },
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
  // 方法集合
  methods: {

  }
}
</script>

<style lang='css'>
</style>
