<template>
  <div id="app">
    <div class="header">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/test">页面一</router-link>
        </li>
        <li>
          <router-link to="/select">搜索页面</router-link>
        </li>
        <li>
          <router-link to="/playMusic">音乐播放页</router-link>
        </li>
      </ul>
    </div>

    <!--<h1>我是首页</h1>-->
    <!--<transition>-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <!--</transition>-->
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
  .header li{
    list-style:none;
    display: inline-block;
    padding: 10px;
  }
</style>
