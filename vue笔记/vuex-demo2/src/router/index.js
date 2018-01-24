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
import test3 from "../test3.vue"
import musicDetail from "../musicDetail.vue"

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
      path:"/test3",
      component:test3
    },
    {
      path:"/musicDetail",
      component:musicDetail
    },
    {
      path:"/select",
      component:select
    }
  ]
})
// routers.beforeEach((to,from,next)=>function(){
//   console.log(11);
//   next();  //跳转到下一个页面；
// })
export default  routers;

