<template>
   <div>
     <h3>我是音乐详情页</h3>
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
  },
  components:{
    musicBar
  },
  created:function(){
  },
  //在进入路由前
  beforeRouteEnter:function(to,from,next){
    next(function(vm){     //参数vm代表vue这个实例
       vm.$refs.musicBar.updateTime();
    });
    //父级触发子组件的事件
  },
  //路由离开
  beforeRouteLeave:(to,from,next)=>{
      next();
  }
}
</script>

<style>
</style>
