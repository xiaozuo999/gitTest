<template>
  <div>
    <button type="text" @click="reduce()">-</button>
    <span>{{count}}</span>
    <button type="text" @click="add()">+</button>
    <br>
    <span>{{count2}}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
      count:function(){
          return this.$store.state.count;  //获取store值的方法
      },
      count2:function(){
        var a=this.$store.state.count;
              //var b=a>20?20:a;  //把计算方法放在模板中，不推荐这样写，所有涉及到数据的都建议写在store.js文件中；
             var b=this.$store.getters.limitNum;  //getters相当于vue中的计算属性；
             return b;
         }
  },
  methods:{
      add:function(){
        //同步的写法
        //写法一：修改
          //this.$store.commit("addIncrement",{n:5});  //提交变化

        //写法二,store中方法配置文件不变；
//          this.$store.commit(
//            {
//              type:"addIncrement",
//              n:2
//            }
//          );

        //异步处理的方法：
        this.$store.dispatch("addAction",{n:5});

      },
    reduce:function(){
     this.$store.commit("addIncrement",{n:-5});
    }
  }
}

</script>

<style>

</style>
