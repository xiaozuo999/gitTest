<template>
   <div>
     <h3>歌曲列表</h3>
     <ul>
       <li  v-for="item in musicListAll"><a href="javascript:" @click="addMusic(item)">{{item.name}}</a></li>
     </ul>
     <musicBar ref="musicBar"></musicBar>
   </div>
</template>

<script>
  import $ from "jquery"
  import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
  import musicBar from "./musicBar.vue"
export default {
  name: 'app',
  data () {
    return {
      musicListAll:[
        {
            name:"歌曲一",
            src:"/src/assets/a.mp3",
            id:1
        },
        {
          name:"歌曲二",
          src:"/src/assets/b.mp3",
          id:2
        },
        {
          name:"歌曲三",
          src:"/src/assets/c.mp3",
          id:3
        },
        {
          name:"一首链接出错的歌曲",
          src:"/src/assets/d.mp34",
          id:4
        }
      ]
    }
  },
  computed:{
  },
  methods:{
    addMusic:function(item){
        //父组件要触发子组件的值，并传递参数；
      this.$refs.musicBar.addMusic(item);
    }
  },
  components:{
    musicBar
  },
  created:function(){
  },
  route:{
    data:function(transition){
      console.log(transition);
      console.log(101);
    }
  }
}
</script>

<style>
</style>
