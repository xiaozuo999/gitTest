import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routerConfig from './router.config.js'

//引入模块，使用模块，配置路由，开启路由
Vue.use(VueRouter);

//配置路由
var router=new VueRouter(routerConfig);


new Vue({
    router,
  el: '#app',
  render: h => h(App)
})





