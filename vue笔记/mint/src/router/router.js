/* 设置整个APP的路由*/

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from '../App.vue'
import letters from '../views/letters.vue'
import lettersDetail from '../views/lettersDetail.vue'

const router=new VueRouter({
  routes:[
    {
      path:'/app',
      component:app
    }
    ,{
    path:'/letters',
    component:letters
  }, {
      path:'/lettersDetail',
      component:lettersDetail
    },{
    path:"*",redirect:'/letters'
  }]
})

export default router
