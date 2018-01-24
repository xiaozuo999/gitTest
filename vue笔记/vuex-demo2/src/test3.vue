<template>
  <div>
    <div style="border: 1px solid #ddd;padding: 10px;margin-bottom: 20px;">
      <button @click="mutationA">mutatoins 同步方法累加1</button>
      <button @click="actionA">actions 异步方法累加1</button>
      <button @click="fun1">直接在vue中累加1（报错）</button>
      <button @click="fun2">提交一个commit累加</button>

     <p>这是number的数据：</p>
     <p> state的值：{{number}}</p>
     <p> getter处理之后的值：{{number2}}</p>
     <p> getter处理之后的值：{{number3}}</p>
    </div>

  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    computed:{
        //只有mapState要使用前缀的复杂写法；
      ...mapState({
        number:function(state){
            return state.childModule.number;
        }
      }),
      //所以可以把state的值映射一份到getters中，所有页面都直接调用getters的值，会更方便，推荐es6的写法，一行搞定
      ...mapGetters(["number2"]),
      number3:function(){
          return this.number+50;
      }
    },
    methods:{
      ...mapMutations(["mutationA"]),  // 同步
      ...mapActions(["actionA"]),  //异步
      fun1:function(){
          this.number++;   //可以this.number获取到值，但是不能直接改变要提交commit
      },
      fun2:function(){
        this.$store.commit("mutationA");
      }
    },
    created:function(){
    }
  }
</script>

<style>
</style>
