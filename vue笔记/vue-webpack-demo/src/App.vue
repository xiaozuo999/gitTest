<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view></router-view>-->

    <h3>welcome vue-webpack</h3>
    <strong>{{msg}}</strong>
  </div>
</template>

<script>
//export default {
//  name: 'app'
//}
export default{
  data () {
    return{
      msg: '我是数据'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
