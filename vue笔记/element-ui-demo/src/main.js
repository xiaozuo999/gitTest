import Vue from 'vue'
import App from './App.vue'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(element)

new Vue({
  el: '#app',
  render: h => h(App)
})
