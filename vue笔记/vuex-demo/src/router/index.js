import Vue from "vue"
import Router from "vue-router"
Vue.use(Router);

import App from '../App.vue'
import test2 from '../test2.vue'
import test4 from '../test4.vue'
import urlRouter from '../urlRouter.vue'


var routers=new Router({
  routes:[
    {
      path:"/",
      component:App
    },
    {
      path:"/urlRouter",
      component:urlRouter
    },
    {
      path:"/test2",
      component:test2
    },
    {
      path:"/test4",
      component:test4
    }
  ]
})

export default  routers
