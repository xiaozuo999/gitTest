<template>
  <div id="app">
    <head-top></head-top>
    <home-box></home-box>
  </div>
</template>

<script>
    import headTop from './components/header.vue'
    import homeBox from './page/home.vue'

    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            headTop,
            homeBox
        }
    }
</script>

<style lang="scss">

</style>
