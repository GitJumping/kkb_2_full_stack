<!-- 我的页面 -->
<template lang='html'>
  <li>
    <div class="am-cf inner_li inner_li_abtest">
      <span class="undefined mark h5_mark">{{ data.tag }}</span>
      <a href="#">
        <div class="img_box list-img-loaded">
          <div>
            <!-- bind属性里面，传递参数的写法 -->
            <img alt="标题" class="load-img fade" :src="getImageUrl(data.src)" >
          </div>
          <span class=" undefined mark pc_mark">{{ data.tag }}</span>
        </div>
        <div class="intro">
          <h3>{{ data.title }}</h3>
          <div class="abstract">{{ data.summary }}</div>
        </div>
      </a>
      <div class="info">
        <div class="info-list info-list-abtest">
          <div class="user-info">
            <a :href="data.author.href" class="name">{{ data.author.title }}</a>
            <span class="oblique_line">·</span>
          </div>
          <div class="time-div">
            <span class="time" title="时间">时间</span>
            <span class="time h5_time">时间</span>
          </div>
        </div>
        <div class="tags-list">
          <i class="icon-tag">
          </i>
          <span>
            <a href="/tags/jinrong">标签1</a>
            <span>，</span>
          </span>
          <span>
            <a href="/tags/touzi">标签2</a>
          </span>
        </div>
        <div class="comments-list">
          <span class="comments">
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'

export default {
  name: 'IndexListItem',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: ['list'],
  data () {
    // 这里存放数据
    return {
      data: this.$attrs.data
    }
  },
  // 监听属性 类似于data概念
  computed: {
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
    getImageUrl (data) {
      // http://localhost:8090/img?src=0fyj7svry8kn0zou.jfif
      // console.log('index_list_item->', data)
      return `http://localhost:8090/img?src=${data}`
    }
  }
}
</script>

<style lang='css'>
</style>
