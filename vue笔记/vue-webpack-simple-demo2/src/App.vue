<template>
  <div id="app">
    <img src="src/assets/logo.png" alt="">
    <p>这是APP页面</p>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
</style>
