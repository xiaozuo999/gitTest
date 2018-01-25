<template>
  <div id="app">
    <div class="header">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/test">累加测试页</router-link>
        </li>
        <li>
          <router-link to="/test3">累加测试页2</router-link>
        </li>
        <li>
          <router-link to="/select">搜索页面</router-link>
        </li>
        <li>
          <router-link to="/musicDetail">音乐详情页</router-link>
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

    <musicBar v-show="musicList.length>0"></musicBar>
    <!--<musicBar></musicBar>-->
  </div>
</template>

<script>
  import musicBar from "./musicBar.vue"
  import {mapGetters} from "vuex"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapGetters(["musicList"])
  },
  components:{
      musicBar
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
