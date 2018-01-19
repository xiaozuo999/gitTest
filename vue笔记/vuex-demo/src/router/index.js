import Vue from "vue"
import Router from "vue-router"
Vue.use(Router);

import App from '../App.vue'
import test2 from '../test2.vue'


var routers=new Router({
  routes:[
    {
      path:"/",
      component:App
    },
    {
      path:"/test2",
      component:test2
    }
  ]
})

export default  routers
