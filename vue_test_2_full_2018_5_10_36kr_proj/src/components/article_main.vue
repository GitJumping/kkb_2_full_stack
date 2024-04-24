<!-- 我的页面 -->
<template lang='html'>
  <div class="mainlib" v-if="(article && article.article)">
    <div class="center_content">
      <div class="content-wrapper">
        <div class="article-section">
          <div class="mobile_article">
            <h1>{{article.title}}</h1>
            <div class="content-font">
              <div class="am-cf author-panel">
                <div class="author am-fl">
                  <a :href="article.author_href" class="am-fl">
                    <span class="name">{{article.author_title}}</span>
                  </a>
                  <span class="time am-fl">
                    <!-- <span class="dot">&nbsp;•&nbsp;</span> -->
                    <abbr class="time">{{article.time|mktime}}</abbr>
                    <abbr class="time"></abbr>
                  </span>
                  <span class="time am-fl">
                    <span class="dot">&nbsp;•&nbsp;</span>
                    <abbr class="time">{{article.tag}}</abbr>
                  </span>
                </div>
              </div>
              <section class="summary">{{article.summary}}</section>
              <div>
                <section class="textblock" v-html="article.article['detailArticle|post'].content"></section>
                <!-- <section class="textblock"></section> -->
                <section class="article-footer-label">
                  <div>
                    <div>
                      本文经授权发布，不代表36氪立场。如若转载请联系原作者。
                    </div>
                  </div>
                </section>

                <div class="article-footer-ad">
                  <div class="plan-image plan-lazyload-box">
                  </div>
                </div>
              </div>
              <section class="ad">
              </section>
              <section class="single-post-tags">
                <a class="kr-tag-gray" href="/tags/jinrong" target="_blank">标签1</a>
                <a class="kr-tag-gray" href="/tags/xiaofei" target="_blank">标签2</a>
              </section>
              <div class="fav-wrapper">
                <div class="common-post-like-wrapper">
                  <a class="post-pc-like">
                    <span class="icon-ic_like">
                    </span>
                    <span style="margin-left: 4px;">赞</span>
                  </a>
                  <span class="count-box" style="display: block;">
                    <span class="count kr-animated">+1</span>
                  </span>
                </div>
              </div>
              <div class="share-nav">
                <div class="inner fixed" style="width: 720px;">
                  <div class="box am-cf">
                    <div class="share-author am-cf am-fl">
                      <a :href="article.author_href">
                        <img class="avatar" src="img/head_50.jpg" alt="">
                        <span class="name">{{article.author_title}}</span>
                      </a>
                      <span class="kr-tag-arrow-blue kr-size-min">
                        <span class="arrow">
                          <em></em>
                        </span>
                        <span>资深作者</span>
                      </span>
                    </div>
                    <div class="other-ctrl ctrl-box am-fr">
                      <span class="icon-readmode pure-read cell">
                        <div class="tip">
                          <div class="inner-box">
                            <span class="kr-arrow-down kr-arrow">
                              <span></span>
                            </span>
                            <div>
                              <p>“点击”尽享阅读沉浸模式,</p>
                              <p>沉浸模式下点击右上角按钮返回</p>
                            </div>
                          </div>
                        </div>
                      </span>
                      <span class="icon-back-top back cell"></span>
                    </div>
                    <div class="share-ctrl ctrl-box am-fr">
                      <span class="icon-weixin wechat cell">
                        <div class="tip">
                          <div class="inner-box">
                            <span class="kr-arrow-down kr-arrow">
                              <span></span>
                            </span>
                            <div class="am-cf">
                              <div class="img-box am-fl">
                                <img src="">
                              </div>
                              <div class="txt">
                                <p>
                                  打开微信"扫一扫",
                                </p>
                                <p>
                                  打开网页后点击屏幕
                                </p>
                                <p>
                                  右上角"分享"按钮
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                      <a class="icon-weibo weibo cell" target="_blank" href="">
                      </a>
                    </div>
                    <div class="user-ctrl ctrl-box am-fr">
                      <span class="icon-collect-min cell">
                        <b class="count-min">0</b>
                        <span class="count kr-animated ">+1</span>
                      </span>
                      <span class="icon-comment-min cell">
                        <b class="count-min">0</b>
                      </span>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h5-author-info am-cf">
                <div class="img-box am-fl">
                  <a href="/user/375349" target="_blank">
                    <img src="img/head_50.jpg">
                  </a>
                </div>
                <div class="info">
                  <p class="name">
                    <a href="/user/375349" target="_blank">名字</a>
                    <span class="kr-tag-arrow-blue kr-size-min">
                      <span class="arrow">
                        <em></em>
                      </span>
                      <span>资深作者</span>
                    </span>
                  </p>
                  <p class="intro">签名</p>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
          <div class="mobile_article">
            <section class="single-post-comment">
              <h4>
                <a name="comment" class="comment-list-title comment-title">
                  参与讨论
                </a>
              </h4>
              <div class="input-module notlogin">
                <div class="textarea-wrapper">
                  <textarea disabled="" placeholder="请登录后参与评论...">
                  </textarea>
                  <div class="user">
                    <button type="button" disabled="" title="请登录后参与评论">
                      <a href="#">
                        提交评论
                      </a>
                    </button>
                    <div class="current-user">
                      <span class="img" style="background: url(img/f3a5016d8jzc4auz.png) center center / 80% no-repeat rgb(241, 241, 241);">
                      </span>
                      <a href="#" class="name">
                        登录
                      </a>
                      <span>
                        后参与讨论
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="display-module">
              </div>
            </section>
          </div>
          <div class="related-articles-h5">
            <h4>
              相关文章
            </h4>
            <div class="list">
              <div class="each-cell am-cf">
                <div class="img-box">
                  <a href="/p/5126058.html?from=related" target="_blank" style="background-image: url(img/t1.jpg);">
                  </a>
                </div>
                <div class="info">
                  <p class="name">
                    <a target="_blank" href="#">标题</a>
                  </p>
                  <p class="note">
                    <span>文</span>
                    <span>/</span>
                    <a target="_blank" href="/user/375349">作者</a>
                  </p>
                </div>
              </div>
              <div class="each-cell am-cf">
                <div class="img-box">
                  <a href="/p/5126058.html?from=related" target="_blank" style="background-image: url(img/t1.jpg);">
                  </a>
                </div>
                <div class="info">
                  <p class="name">
                    <a target="_blank" href="#">标题</a>
                  </p>
                  <p class="note">
                    <span>文</span>
                    <span>/</span>
                    <a target="_blank" href="/user/375349">作者</a>
                  </p>
                </div>
              </div>
              <div class="each-cell am-cf">
                <div class="img-box">
                  <a href="/p/5126058.html?from=related" target="_blank" style="background-image: url(img/t1.jpg);">
                  </a>
                </div>
                <div class="info">
                  <p class="name">
                    <a target="_blank" href="#">标题</a>
                  </p>
                  <p class="note">
                    <span>文</span>
                    <span>/</span>
                    <a target="_blank" href="/user/375349">作者</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="post-detail-plan-bottom">
        <div class="plan-image plan-lazyload-box">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
import common from '@/libs/common'

export default {
  name: 'articleMain',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: [],
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {
    article () {
      // console.log('article main->', this.$attrs.data)
      return this.$attrs.data
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
  // 过滤器，或者转换器，可以放些工具类的操作
  filters: {
    mktime: common.mktime
  },
  // 复杂的业务逻辑操作，方法集合，大的方法集合
  methods: {

  }
}
</script>

<style lang='css'>
</style>
