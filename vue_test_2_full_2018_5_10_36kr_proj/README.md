# vue_test_2_full_2018_5_8_36kr_proj

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# 图片的请求方式
```html
<img alt="标题" class="load-img fade" :src="getImageUrl(data.src)" >
getImageUrl (data) {
    // http://localhost:8090/img?src=0fyj7svry8kn0zou.jfif
    // console.log('index_list_item->', data)
    return `http://localhost:8090/img?src=${data}`
}
```

# 时间戳的毫秒计算
```html
<span class="time" :title="mkTime(data.time*1000)">{{mkTime(data.time*1000)}}</span>
```

# 过滤，或者转换
```html
<!--要转换的内容|过滤器/转换器-->
    {{ 12|aaa }}
```

# v-for 写法
vue_test_2_full_2018_5_10_36kr_proj/src/components/index_list.vue
```html
<span v-for="(json,index) in data.catalogs" :key="index"></span>
```

# 实在是异步加载的数据，但是又需要代码里引用返回报文参数，用 v-if 做一下判断控制
vue_test_2_full_2018_5_10_36kr_proj/src/components/article_main.vue
vue_test_2_full_2018_5_10_36kr_proj/src/components/article_right.vue
```html
<div class="mainlib" v-if="article">
<div class="mainlib" v-if="(article && article.article)">
<div class="rightlib cover_css" v-if="article">
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
