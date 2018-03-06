import Vue from 'vue'
import App from './App.vue'
import store from "./store/store"
import router from "./router/index"
import axios from "axios"
Vue.prototype.$axios = axios;

import Mock from "axios-mock-adapter"


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
