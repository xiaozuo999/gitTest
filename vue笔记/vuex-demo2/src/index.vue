<template>
  <div>
    <h2>我是首页内容</h2>
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
  },
  components:{
      musicBar
  }
}
</script>

<style>
</style>
