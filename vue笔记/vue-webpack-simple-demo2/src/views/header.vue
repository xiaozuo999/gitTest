<template>
<div style="margin: 50px;">
  我是组件头部
  <span class="logo"></span>
  <img src="../assets/logo.png" alt="">
------------
</div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    methods:{
    }
  }
</script>
<style>
.logo{
  background: url("../assets/logo.png") no-repeat;
  background-size:100px;
  display: inline-block;
  width: 100px;
  height: 100px;
}
</style>
