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
       <button @click="updateTime()">跳转到上一次位置</button>
       <audio :src=currentMusic.src autoplay  @error="errorFun()" @ended="next()" id="musicId"></audio>
      当前播放音乐是：{{currentMusic.name}}
      <!--当前播放进度：{{musicProgress}}-->
      当前播放的时间：{{currentTime}}s
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
    }
  },
  computed: {
    ...mapGetters(["currentMusic","musicList","musicProgress","currentTime","currentIndex","isPlaying","isPlayingMsg","timer"])
  },
  methods: {
    addMusic:function (item) {
      this.playMusic();
      this.$store.commit("addMusic",item);
    },
    playMusic: function () {
      var audioPlay = document.getElementById("musicId");
      var _this = this;
      var palam={
        musicProgress:"",
        currentTime:""
      }
      var musicProgress;
      var timer2;
      timer2=setInterval(function () {
          console.log("开始播放了");
        palam.musicProgress = audioPlay.currentTime / audioPlay.duration * 100 + "%";
        palam.currentTime = audioPlay.currentTime;
        _this.$store.commit("playMusic",palam);
      }, 500)
      this.$store.commit("setTimer",timer2);
      if(audioPlay.currentTime){
        audioPlay.play();
      }
    },
    turnMusic:function () {
      var audioPlay = document.getElementById("musicId");
      this.$store.commit("turnMusic");
      if (this.isPlaying) {
//        audioPlay.play();
        this.playMusic();
      }
      else {
        audioPlay.pause();
        this.$store.commit("clearTime");
      }
    },
    errorFun: function () {
      //判断是否是第一次默认加载
      if (this.musicList.length > 0) {
        console.log("歌曲出错了");
      }
    },
    //播放下一曲
    next: function () {
        this.$store.commit("next");
    },
    //更新进度条
    updateTime(){
        console.log("开始更新进度条");
      //清除之前的定时器
      this.$store.commit("clearTime");
//      var audioPlay = document.getElementById("musicId");
//      audioPlay.currentTime=this.$store.getters.currentTime;  //每次路由跳转后音乐都会重头开始播放，所以这里我重置音乐开始时间等于上次记录时间；
     // this.playMusic();  //如果不加这句，跳转路由后，音乐就停了；加了之后播放时间会不停跳动
    },
    clearTime(){
      console.log("离开前清除定时器");
      this.$store.commit("clearTime");
    }
  },
  created:function(){
  }
}
</script>
<style>
  .red{
    color: red;
  }
</style>
