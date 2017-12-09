<template>
<div>
  <header style="background:#019a61;text-align: center;padding: 10px;position: relative;color:#fff;">
    <button style="position: absolute;left: 10px;top: 12px;background:transparent;border: 0;color:#fff;"> < 返回 </button>
    <span >列表页</span>
  </header>

  <div style="padding: 10px;">
    <div style="display:flex;">
      <input type="text" style="width: 96%;padding: 5px;flex: 1;" v-model="keyword">
      <button style="border: 0;line-height: 16px;width:50px;margin-left: 10px;" @click="search()">搜索</button>
    </div>


    <div style="display:flex;margin-top: 15px;">
      <input id="startTime" type="text" readonly="" placeholder="开始时间" data-lcalendar="2016-05-11,2016-05-11" style="width: 20%;padding: 5px;flex: 1;margin: 0 10px;" v-model="startTime"/>
    </div>

      <!--使用router作路由-->
      <!--<li  style="margin-bottom: 10px;" v-for="item in items">-->
        <!--<router-link :to="{path:'/lettersDetail/'+item.id}">{{item.name}}</router-link>-->
      <!--</li>-->
      <!--<keep-alive>-->
      <!--<router-view></router-view>-->
      <!--</keep-alive>-->

      <!--使用父子组来传递数据-->
      <transition>
        <div v-show="keyword" class="red">
          <ul style="margin-top: 10px;">
            <li  style="margin-bottom: 10px;" v-for="item in items" @click="showDetail(item)">
              {{item.name}}
            </li>
          </ul>
        </div>
      </transition>

  </div>

    <lettersDetail ref="lettersDetail"></lettersDetail>

</div>
</template>
<script>
  import detail from "./detail.vue"
import "../assets/LCalendar.css"

  export default {
    name: 'app',
    data () {
      return {
        items:[
          {
            "name":"标题一",
            "id":"1"
          }  ,
          {
            "name":"标题二",
            "id":"2"
          }
        ],
        keyword:"",
        startTime:"",
        endTime:""
      }
    },
    components:{
        lettersDetail:detail
    },
    methods:{
      showDetail:function(item){   //父组件触发子组件方法，并向子组件方法传参数
          this.$refs.lettersDetail.show(item);
      },
      search:function(){
          var temp=new Object;
          temp.name=this.keyword;
          temp.id=this.items.length+1;
          this.items.push(temp);
      }
    },
    mounted:function(){
      var calendar = new LCalendar();
      calendar.init({
        'trigger': '#startTime', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1900-1-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
      });
    }
  }
</script>

<style>

</style>
