<template>
  <div id="app">
    <head-top></head-top>
    <page-home></page-home>
  </div>
</template>

<script>
    import headTop from './components/header.vue'
    import footGuide from './components/footer.vue'
    import pageHome from './page/home.vue'

    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            headTop,
            footGuide,
            pageHome
        }
    }
</script>

<style lang="scss">

</style>
