import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import cmp1 from '@/components/cmp1'
import login from '@/login'
import reg from '@/reg'
// import cmpheader from '@/components/cmpheader'
// import cmpfooter from '@/components/cmpfooter'

Vue.use(Router)
// Vue.use(cmpheader)
// Vue.use(cmpfooter)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // {
    //   path: '/test',
    //   name: 'cmp1',
    //   component: cmp1
    // },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    }
  ]
})
