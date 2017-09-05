import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './Home.vue'
import News from './News.vue'

Vue.use(VueRouter);
//配置路由
const router=new VueRouter();
router.map({
    'home':Home,
    'news':News
})

new Vue({
  el: '#app',
  render: h => h(App)
})
