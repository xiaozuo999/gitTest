<template>
  <div>
    <input type="text" v-model="keyword" @click="isShowFun()"> <button type="text">搜索</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed:{
    ...mapState(
        {
          keyword:function(state){
              return  state.selectModule.keyword;
          }
        }
      )
  },
  methods:{
      isShowFun:function(){
          this.$emit("isShowFun2");
      }
  },
  created:function(){
  }
}
</script>

<style>
</style>
