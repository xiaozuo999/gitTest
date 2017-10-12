<template>
  <div id="app">
    <div>
      <ul>
        <li> <router-link to="/home">主页</router-link></li>
        <li> <router-link to="/news">新闻页</router-link></li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">

</style>
