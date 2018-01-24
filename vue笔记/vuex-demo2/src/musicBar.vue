<template>
   <div>
     <div style="border: 1px solid #ddd;padding: 10px;margin-top: 50px;">
       <div>
         <p>选中的歌曲列表</p>
         <ul>
           <li v-for="(item,index) in musicList" @click="playListMusic()" :class="{red:currentIndex==index}">{{item.name}}</li>
         </ul>
       </div>
       <button @click="turnMusic"><span>{{isPlayingMsg}}</span></button>
       <button @click="next()">下一首</button>
       <audio :src=currentMusic.src autoplay  @error="errorFun()" @ended="next()" id="musicId"></audio>
      当前播放音乐是：{{currentMusic.name}}
      当前播放进度：{{musicProgress}}
     </div>
   </div>
</template>

<script>
  import $ from "jquery"
  import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
export default {
  name: 'app',
  data () {
    return {
      musicList:[],
      musicProgress:"",
      currentMusic:{
          name:"",
          src:"",
          id:""
      },
      currentIndex:0,
      isPlaying:false
    }
  },
  computed:{
    isPlayingMsg:function(){
      var aa=this.isPlaying?"播放中":"已暂停";
      return  aa;
    }
  },
  methods:{
    addMusic:function(item){
      this.currentMusic.name=item.name;
      this.currentMusic.src=item.src;
      //重置当前播放的进度
      this.musicProgress=0;
      this.isPlaying=true;
      this.playMusic();

      //判断是否有重复
      var _this=this;
      function isRepeat(){
        var repeat=false;
        var len=_this.musicList.length;
        for(var i=0;i<len;i++){
            if(item.id==_this.musicList[i].id){
              repeat=true;
              _this.currentIndex=i;
//              break;
            }
        }
        return  repeat;
      }
      console.log(isRepeat());
      //如果重复了
      //没有重复就直接添加到最后
      if(!isRepeat()){
        this.musicList.push(item);
        this.currentIndex=this.musicList.length?this.musicList.length-1:0;
      }
    },
    playListMusic:function(){

    },
    playMusic:function(){
        var audioPlay=document.getElementById("musicId");
        var _this=this;
        setInterval(function(){
          _this.musicProgress=audioPlay.currentTime/audioPlay.duration*100+"%";
        },500)
    },
    pauseMusic:function(){
    },
    turnMusic:function(){
      var audioPlay=document.getElementById("musicId");
      this.isPlaying=!this.isPlaying;
      if(this.isPlaying){
        audioPlay.play();
      }
      else{
        audioPlay.pause();
      }
    },
    errorFun:function(){
       //判断是否是第一次默认加载
      if(this.musicList.length>0){
//        alert("歌曲出错了");
        console.log("歌曲出错了");
      }
    },
    //播放下一曲
    next:function(){
        ++this.currentIndex;
        if(this.currentIndex>=this.musicList.length){
            this.currentIndex=0;
        }
        this.currentMusic=this.musicList[this.currentIndex]
    }
  },
  route:{
      data(){
          console.log(100);
      }
  }
}
</script>

<style>
  .red{
    color: red;
  }
</style>
