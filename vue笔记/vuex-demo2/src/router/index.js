/**
 * Created by Administrator on 2018/1/19.
 */
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import App from  "../App.vue"
import test from "../test.vue"
import select from "../select.vue"
import playMusic from "../playMusic.vue"

var routers=new Router({
  routes:[
    {
      path:"/",
      component:App
    } ,
    {
      path:"/test",
      component:test
    },
    {
      path:"/playMusic",
      component:playMusic
    },
    {
      path:"/select",
      component:select
    }
  ]
})
export default  routers;

