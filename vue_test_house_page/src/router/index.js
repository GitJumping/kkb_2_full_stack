import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/index'
import House from '@/House.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      // 这里带参数，后面 router-link 才能找到参数
      path: '/house/:id',
      name: 'house',
      component: House
    }
  ]
})
