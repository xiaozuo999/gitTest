<template>
   <div>
     <h3>歌曲列表</h3>
     <ul>
       <li  v-for="item in musicListAll"><a href="javascript:" @click="addMusic(item)">{{item.name}}</a></li>
     </ul>
   </div>
</template>

<script>
  import $ from "jquery"
  import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
export default {
  name: 'app',
  data () {
    return {
      musicListAll:""
    }
  },
  methods:{
    addMusic:function(item){
      this.$store.commit("addMusic",item);
    }
  },
  computed:{
  },
  created:function(){
    var url="https://easy-mock.com/mock/5a61abf341d8910ea886ec50/musicList";
    var _this=this;
    $.get(url,{},function(result){
        console.log(result);
      _this.musicListAll=result.musicListAll;
    })
  }
}
</script>

<style>
</style>
