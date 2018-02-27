<template>
  <div id="app">
    <div class="header">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/test">页面一</router-link></li>
        <li><router-link to="/test2">页面二</router-link></li>
        <li><router-link to="/urlRouter">url-router测试页面</router-link></li>
      </ul>
    </div>

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
        return {};
    },
    computed:{
    },
    methods:{
    }
  }
</script>

<style>

</style>
