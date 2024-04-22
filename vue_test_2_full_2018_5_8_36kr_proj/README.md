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


# 图片的请求方式
<img alt="标题" class="load-img fade" :src="getImageUrl(data.src)" >
getImageUrl (data) {
    // http://localhost:8090/img?src=0fyj7svry8kn0zou.jfif
    // console.log('index_list_item->', data)
    return `http://localhost:8090/img?src=${data}`
}

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
