<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { InfiniteScroll,Spinner,Toast,Loadmore} from 'mint-ui';

  export default {
    name: 'app',
    data() {
      return {
        loading: false,
        value: '',
        list: [],
        arr:["a","b","c","d","e","a","b","c","d","e","a","b","c","d"],
        number:0,
        isOver:false,
        param:{
          page:0,
          pageSize:4
        },
        allLoaded:true
      }
    },
    methods: {
      loadMore:function(){
        var _this=this;
        _this.loading=true;
        if(_this.allLoaded){
          _this.allLoaded=false;
          _this.param.page++;
          setTimeout(function(){
            var arr2=_this.arr.slice((_this.param.page-1)*_this.param.pageSize,_this.param.page*_this.param.pageSize);//0,4,4,8
            _this.arr.splice((_this.param.page-1)*_this.param.pageSize,_this.param.page*_this.param.pageSize);
            console.log(_this.arr);
            if(arr2.length<1){
              _this.allLoaded=true;
              Toast({
                message:"已经到底了",
                position:"bottom"
              })
            }else{
              _this.list=_this.list.concat(arr2);
              _this.allLoaded=false;
            }
            _this.loading=false;
          },1500)
        }
        else{
          _this.loading=false;
          _this.isOver=true;
        }
      },
      loadTop:function(){
      Toast("上拉刷新");
//      console.log(10);
//      this.param.page=0;
//      this.arr=["a","b","c","d","e","a","b","c","d","e","a","b","c","d"];
//      this.loadMore();
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
