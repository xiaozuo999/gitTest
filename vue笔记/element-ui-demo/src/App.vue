<template>
  <div id="app">

    <el-input placeholder="请输入内容" v-model="value" prefix-icon="el-icon-search" suffix-icon="el-icon-date"></el-input>

      <el-button type="submit" @click="loadMore()">加载更多</el-button>

      <el-button type="submit" @click="messageBox()">点击打开弹</el-button>
    <!--<el-button type="primary">打开</el-button>-->

    <ul>
      <li v-for="item in items">{{item.name}}</li>
    </ul>

    <div style="text-align: center;" v-show="loading">
      <i class="el-icon-loading" style="font-size: 20px;" ></i>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      loading:false,
      value: '',
      items:[],
      arr:[
        {
          name:"chrome"
        },
        {
          name:"firefox"
        },
        {
          name:"IE"
        },
        {
          name:"sogou"
        },
        {
          name:"UC"
        }
      ]
    }
  },
  methods:{
    messageBox:function(){
      this.$alert("确认删除吗","警告",{
        confirmButtonText:"确认",
        callback:action=>{
          this.$message({
            showClose:true,
            type:"info",
            message:"action:$(action)"
          })
        }
      });
    },
    get:function(){
      this.loading=true;

      this.items=this.items.concat(this.arr);
      this.$message({
        showClose:true,
        message:"加载成功",
        type:"success",
        center:true
      });
      var _this=this;
      setTimeout(function(){
        _this.loading=false;
      },1000)
    },
    loadMore:function(){
      this.get();
    },
    scrollMore:function(){

    }
  },
  created:function(){
    this.get();
  }
}
</script>


<style>
  li{
    font-size: 18px;
    line-height: 50px;
  }
</style>
