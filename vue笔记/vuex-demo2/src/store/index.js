/**
 * Created by Administrator on 2018/1/19.
 */
import Vue from "vue"
import Vuex from "vuex"
import $ from "jquery"
Vue.use(Vuex);

var store =new Vuex.Store({  //注意这里的Store是大写
  state:{
    count:100,
    count2:100,
    keyword:50
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
    changeKeyword:function(state,n){
      state.keyword=n;
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
      },600)
    },
    changeAction:function(context,n){
      context.commit("changeKeyword",n);
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
    },
    lists:function(){
      console.log(11);
      var url="https://easy-mock.com/mock/5a61abf341d8910ea886ec50/searchLists";
      // return $.get(url,{},function(result){
      //   return result.lists;
      // })
      var result={
        lists:[
          {
            title:"数据一"
          },
          {
            title:"数据二"
          },
          {
            title:"数据三"
          }
        ]
      }
      return result.lists;
    }
    }
})

export default store
