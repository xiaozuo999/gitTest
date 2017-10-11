import Vue from 'vue'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

//引入模块，使用模块，配置路由，开启路由
// Vue.use(VueResource);
Vue.use(VueRouter);

import headTop from './components/header.vue'
import footGuide from './components/footer.vue'


//配置路由
var router=new VueRouter();

router.map({
    'headTop':{
        component:headTop
    },
    'footGuide':{
        component:footGuide
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

//开启路由
router.start(App,'#app');




