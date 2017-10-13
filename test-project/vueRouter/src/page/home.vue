<template>
    <div>
        <head-box></head-box>
        <h1>我是首页</h1>
    </div>
</template>

<script>
    import headBox from '/src/components/head.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components:{
        headBox
    }
}
</script>

<style>
</style>
