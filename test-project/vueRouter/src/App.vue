<template>
  <div id="app">
    <headBox></headBox>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headBox from './components/head.vue'
import homeBox from './page/home.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      headBox,
      homeBox
  }
}
</script>

<style>
</style>
