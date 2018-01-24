/**
 * Created by Administrator on 2018/1/19.
 */
import Vue from "vue"
import Vuex from "vuex"
import $ from "jquery"
Vue.use(Vuex);

var childModule={
  state:{
    number:500
  },
  getters:{
    number2:function(state){
      return  state.number+100;
    }
  },
  mutations:{
    mutationA:function(state){
      state.number++;
    }
  },
  actions:{
    actionA:function(content){
      content.commit("mutationA");
    }
  }
}

var selectModule={
  state:{
    keyword:60
  },
  getters: {
    lists: function () {
      var url = "https://easy-mock.com/mock/5a61abf341d8910ea886ec50/searchLists";
      // return $.get(url,{},function(result){
      //   return result.lists;
      // })
      var result = {
        lists: [
          {
            title: "数据一"
          },
          {
            title: "数据二"
          },
          {
            title: "数据三"
          }
        ]
      }
      return result.lists;
    }
  },
    mutations:{
      changeKeyword:function(state,n){
        state.keyword=n;
      }
    },
    actions:{
      changeAction:function(context,n){
        context.commit("changeKeyword",n);
      }
    }
}

var playMusic= {
  state: {
    currentMusic: {
      name: "",
      src: "",
      id: ""
    },
    musicList: [],
    musicProgress: "",
    currentTime:"",
    currentIndex: 0,
    isPlaying: false
  },
  getters: {
    isPlayingMsg:function (state) {
      var aa = state.isPlaying ? "播放" : "暂停";
      return aa;
    },
    currentMusic:function(state){
      return state.currentMusic;
    },
    musicList:function(state){
      return state.musicList;
    },
    musicProgress:function(state){
      return state.musicProgress;
    },
    currentTime:function(state){
      return state.currentTime;
    },
    currentIndex:function(state){
      return state.currentIndex;
    },
    isPlaying:function(state){
      return state.isPlaying;
    }
  },
  mutations: {
    toggleMusic: function (state) {
      state.isPlaying = !state.isPlaying;
    },
    addMusic: function (state,item) {
      state.currentMusic.name = item.name;
      state.currentMusic.src = item.src;
      state.currentMusic.id = item.id;
      //重置当前播放的进度
      state.musicProgress = 0;
      state.isPlaying = true;
      //判断是否有重复
      function isRepeat() {
        var repeat = false;
        var len = state.musicList.length;
        for (var i = 0; i < len; i++) {
          if (item.id == state.musicList[i].id) {
            repeat = true;
            state.currentIndex = i;
          }
        }
        return repeat;
      }
      //如果重复了
      //没有重复就直接添加到最后
      if (!isRepeat()) {
        state.musicList.push(item);
        state.currentIndex = state.musicList.length ? state.musicList.length - 1 : 0;
      }
    },
    playMusic:function(state,payload){
      state.musicProgress=payload.musicProgress;
      state.currentTime=payload.currentTime;
    },
    turnMusic:function(state){
      state.isPlaying = !state.isPlaying;
    },
    next:function(state){
      ++state.currentIndex;
      if (state.currentIndex >= state.musicList.length) {
        state.currentIndex = 0;
      }
      state.currentMusic = state.musicList[state.currentIndex]
    },
    updateTime:function(){

    }
  }
}

var store =new Vuex.Store({  //注意这里的Store是大写
  state:{
    count:100,
    count2:100
  },
  mutations:{
    addIncrement:function(state,n){
      setTimeout(function(){
        state.count+=n;
      },600)
    },
    reduce:function(state,n){
      setTimeout(function(){
        state.count-=n;
      },600)
    },
    addIncrement2:function(state,n){
        state.count2+=n;
    },
    reduce2:function(state,n){
        state.count2-=n;
    }
  },
  actions:{
    addAction:function(context,n){
      setTimeout(function(){
        context.commit("addIncrement2",n);
      },600)
    },
    reduceAction:function(context,n){
      setTimeout(function(){
        context.commit("reduce2",n);
      },1000)
    }
  },
  getters:{
    limitNum:function(state){
      var a=state.count>120?120:state.count;
      return a;
    },
    limitNum2:function(state){
      var a=state.count2>120?120:state.count2;
      return a;
    }
  },
  modules:{
    selectModule,
    playMusic,
    childModule
  }
})

export default store
