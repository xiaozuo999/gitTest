import  Vue from 'vue'
import  VueRouter from 'vue-router'
Vue.use(VueRouter)


import letters from '../views/letters2.vue'
import detail from '../views/detail.vue'
import lettersDetail from '../views/detail.vue'


const router=new VueRouter({
  routes:[
    {
      path:"/",
      redirect:'/letters'
    },
    {
      path:'/letters',
      component:letters,
      children:[
        {
          path:'detail',
          component:detail
        }
      ]
    },
    {
      path:'/lettersDetail',
      component:lettersDetail,
      children:[
        {
          path:'*',
          component:lettersDetail
        }
      ]
    }
  ]
})

export default router
