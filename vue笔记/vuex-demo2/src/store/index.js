/**
 * Created by Administrator on 2018/1/19.
 */
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

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
    },
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
      },600)
    },
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
  }
})

export default store
