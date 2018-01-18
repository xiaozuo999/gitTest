<template>
  <div id="app">
    <mt-header title="函件页" style="position: fixed;top: 0;width: 100%;z-index: 100;">
      <a href="#" slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
    </mt-header>

    <div class="container">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul  v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
        </ul>
      </mt-loadmore>
    </div>

  </div>
</template>

<script>
  import { InfiniteScroll,Spinner,Toast,Loadmore} from 'mint-ui';

  export default {
    name: 'app',
    data() {
      return {
        loading: false,
        allLoaded:""
      }
    },
    methods: {
      loadMore:function(){
        this.loading=true;
        Toast("滚动加载");
        var _this=this;
        setTimeout(function(){
          _this.loading=false;
        },1500)
      },
      loadTop:function(){
        Toast("上拉刷新");
      },
      loadBottom:function(){
        Toast("下拉刷新");
      }
    },
    created:function(){
    }
  }
</script>


<style>
  ul{
    padding: 0;
    margin: 0;
  }
  li{
    font-size: 18px;
    line-height: 200px;
    border-bottom: 1px solid #000;
    padding: 0;
    margin: 0;
  }
  .c1{
    background:#fff0f0;
  }
</style>
