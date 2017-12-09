<template>
  <div id="app">
   <h1>我是路由页面</h1>
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
  },
  created:function(){
      var router="letters";
        if(router=="lawsDetail"){
          location.href="./laws/test.html";
        }
        else{
          location.href="/#/"+router;
        }
  }
}
</script>

<style>
</style>
