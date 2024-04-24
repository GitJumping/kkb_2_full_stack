import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      // http://localhost:8080/#/detail/5127611
      path: '/detail/:id/',
      name: 'detail',
      component: Detail
    }
  ]
})
