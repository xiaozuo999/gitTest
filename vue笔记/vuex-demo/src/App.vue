<template>
  <div id="app">
    <div class="header">
      <ul>
        <router-link to="/" tag="li">首页</router-link>
        <router-link to="/test" tag="li">页面一</router-link>
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
        return 100;
    },
    computed:{
    },
    methods:{
    }
  }
</script>

<style>

</style>
