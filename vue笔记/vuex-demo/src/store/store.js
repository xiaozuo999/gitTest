import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
//定义一个容器
var store=new Vuex.Store({  //注意这里的Store是首字母大写
  //相当于vue中的data
  state:{
    count:10
  },
  //getters相当于vue中的计算属性
  getters:{
    limitNum:function(state){
      var b=state.count>20?20:state.count;
      return  b;
    }
  },
  //同步操作,只要提交了action就会马上更改数据，异步导致数据失效；
  mutations:{
    // addIncrement:function(state,payload){
    //     state.count+=payload.n;
    // },
    //通过页面事件直接传递参数；
    addIncrement:function(state,n){
      state.count+=n;
    },
    reduce:function(state){
      state.count-=1;
    },
    reset:function(state){
      state.count=10;
    }
  },
  //异步操作:actions相当于vue中methods;
  actions:{
     // addAction:function(context,payload){    //context里面就是 store里面的所有的方法，数据（commit,dispatch,state）
     //   setTimeout(function(){
     //     context.commit("addIncrement",payload);
     //     //触发另外一个事件；
     //     context.dispatch("textAction",{n:5});
     //   },1000)
     // },
    //使用es6的解构赋值方法
    addAction:function({commit,dispatch},payload){    //context里面就是 store里面的所有的方法，数据（commit,dispatch,state）
      setTimeout(function(){
        commit("addIncrement",payload);
        dispatch("textAction",{n:4});
      },1000)
    },
    reduceAction:function(content){
      setTimeout(function(){
        content.commit("reduce");
      },1000)
    },
    textAction:function(content,obj){
     console.log(obj.n);
    }
  }
})

export default store;
