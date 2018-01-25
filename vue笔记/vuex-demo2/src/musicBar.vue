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
       <audio :src=currentMusic.src autoplay  @error="errorFun()" @ended="next()" @timeupdate="update()" @canplay="playMusic()" id="musicId"></audio>
      当前播放音乐是：{{currentMusic.name}}
      当前播放的时间：{{currentTime | parseIntFun}}s
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
    ...mapGetters(["currentMusic","musicList","musicProgress","currentTime","currentIndex","isPlaying","isPlayingMsg"])
  },
  methods: {
    update:function(){
      var audioPlay = document.getElementById("musicId");
      var palam = {
        musicProgress: "",
        currentTime: ""
      }
      //获取当前时间；
      palam.musicProgress = audioPlay.currentTime / audioPlay.duration * 100 + "%";
      palam.currentTime = audioPlay.currentTime;
      this.$store.commit("playMusic", palam);
    },
    playMusic: function () {
      var audioPlay = document.getElementById("musicId");
      audioPlay.play();
    },
    turnMusic:function () {
      var audioPlay = document.getElementById("musicId");
      this.$store.commit("turnMusic");
      if (this.isPlaying) {
        audioPlay.play();
      }
      else {
        audioPlay.pause();
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
    }
  },
  created:function(){
  },
  filters:{
    parseIntFun:function(val){
        return val?parseInt(val):"";
    }
  }
}
</script>
<style>
  .red{
    color: red;
  }
</style>
