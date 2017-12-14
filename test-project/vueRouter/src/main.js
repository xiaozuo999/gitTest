import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config'

Vue.use(VueRouter);
var router=new VueRouter(routerConfig);
new Vue({
    router,
  el: '#app',
  render: h => h(App)
})
