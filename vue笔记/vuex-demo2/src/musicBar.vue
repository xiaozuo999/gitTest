<template>
   <div>
     <div style="border: 1px solid #ddd;padding: 10px;margin-top: 50px;">
       <div>
         <p>选中的歌曲列表</p>
         <ul>
           <li v-for="item in musicList" @click="playListMusic()">{{item.name}}</li>
         </ul>
       </div>
       <button @click="turnMusic"><span>{{isPlayingMsg}}</span></button>
       <audio :src=currentMusic.src autoplay id="musicId"></audio>
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
          src:""
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

      this.musicList.push(item);
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
</style>
