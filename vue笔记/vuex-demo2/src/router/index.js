/**
 * Created by Administrator on 2018/1/19.
 */
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import App from  "../App.vue"
import test from "../test.vue"

var routers=new Router({
  routes:[
    {
      path:"/",
      component:App
    } ,
    {
      path:"/test",
      component:test
    }
  ]
})
export default  routers;

