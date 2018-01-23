<template>
  <div>
    <div>
     <h2>这是父级标题</h2>
      <inputA v-on:isShowFun2="isShowFun()"></inputA>
      <listsA v-show="isShow"></listsA>
    </div>
    <musicBar></musicBar>
  </div>
</template>

<script>
  import listsA from "./lists"  //当前路径要加./
  import inputA from "./inputA"
  import musicBar from "./musicBar.vue"
  import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
export default {
  name: 'app',
  data () {
    return {
        isShow:false
    }
  },
  computed:{
  },
  methods:{
      isShowFun:function(){
          this.isShow=!this.isShow;
      }
  },
  created:function(){
  },
  components:{
    inputA,
    listsA,
    musicBar
  }
}
</script>

<style>
</style>
