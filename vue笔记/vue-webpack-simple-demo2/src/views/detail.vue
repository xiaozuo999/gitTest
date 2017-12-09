<template>
  <transition>
  <div style="position: fixed;background:#fff;width: 100%;height: 100%;z-index:100;top:0;" v-show="showFlag" class="detail">
    <header style="background:#019a61;text-align: center;padding: 10px;position: relative;color:#fff;">

    <!--<router-link :to="{path:'/letters'}" tag="button" style="position: absolute;left: 10px;top: 12px;background:transparent;border: 0;color:#fff;"> < 返回 </router-link>-->
    <button  style="position: absolute;left: 10px;top: 12px;background:transparent;border: 0;color:#fff;" @click="hide()"> < 返回 </button>

      <span >详情页</span>
    </header>

    <div>
      <h1>我是详情页</h1>
      <p>
        传过来的ID是：{{id}}
      </p>
    </div>
  </div>
  </transition>
</template>
<script>
import VueRouter from "vue-router"

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        id:"",
        showFlag:false
      }
    },
    methods:{
      show:function(item){
//         this.id=item.id;
        console.log(item);
        this.showFlag=true;
      },
      hide:function(){
        this.showFlag=false;
      }
    },
    created:function(){
    }
  }
</script>

<style>
  .detail.v-leave { left: 0; opacity: 1;}
  .detail.v-leave-active {transition: all 0.5s ease;}
  .detail.v-leave-to { left: 375px; opacity: 0;}


  .detail.v-enter { left: 375px;  opacity: 0;}
  .detail.v-enter-active {transition: all 0.5s ease;}
  .detail.v-enter-to { left: 0; opacity: 1;}
</style>
