/* 设置整个APP的路由*/

import  Vue from 'vue'
import  VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from '../App.vue'
import letters from '../views/letters/letters.vue'
import lettersDetail from '../views/letters/lettersDetail.vue'


const router=new VueRouter({
  routes:[
    {
      path:"/",
      redirect:"app"
    },
    {
      path:'/letters',
      component:letters
    },
    {
      path:'/lettersDetail',
      component:lettersDetail
    }
  ]
})

export default router
