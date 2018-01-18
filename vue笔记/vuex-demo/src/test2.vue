<template>
  <div>
    <button type="text" @click="reduce()">-</button>
    <span>{{count}}</span>
    <button type="text" @click="add(4)">+</button>
    <button type="text" @click="reset()">reset</button>
    <p>{{count2}}</p>
    <!--<p>{{count3}}</p>-->
    <p>{{limitNum}}</p>
  </div>
</template>

<script>
  //vuex中的辅助函件,数据，计算属性，方法，
import {mapState,mapGetters,mapActions,mapMutations} from "vuex"

export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        n:100
      }
    },
    //mapState是一个函数，返回值是store中state数据的集合，可以直接调用；
    computed:{
        abc:function(){
            return 88;
        },
      ...mapState({   //可以传入一个对象/数组，数组相同名字可以省略写法；
        count: "count",
        count2: function (state) {
          return  state.count+this.n;  //这里的this就是vue本身；
        }
      }),
      ...mapGetters({
        limitNum:"limitNum",
        //count3:"111"  //这种写法是错误的
        })
      },
    //  computed: mapState(["count"]),   //如果名字相同可以直接简写，传入一个数组；
    methods:{
      ...mapActions({
        //完整写法一：
//        add:{
//          type:"addAction",
//          n:5
//        },
        //简写：把参数写在事件中；
        add:"addAction",    //带参数
        reduce:"reduceAction"  //不带参数
      }),
      ...mapMutations({
        reset:"reset"
      })
    }
  }

</script>

<style>

</style>
