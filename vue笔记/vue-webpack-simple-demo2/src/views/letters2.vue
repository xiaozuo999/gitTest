<template>
<div style="margin: 50px;">
  <span class="logo"></span>
  <!--11-->
  <img src="../assets/logo.png" alt="">
  <input id="startTime" type="text" readonly="2017-11-15" placeholder="开始时间22" data-lcalendar="2016-05-11,2016-05-11"  v-model="startTime"/>
  <!--<headerBar></headerBar>-->
</div>
</template>

<script>
import "../assets/LCalendar.css"
import headerBar from "./header.vue"

  export default {
    name: 'app',
    data () {
      return {
        startTime:"2017-11-12"
      }
    },
    methods:{
        timeSelect:function(){
          var calendar = new LCalendar();
          calendar.init({
            'trigger': '#startTime', //标签id
            'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
            'minDate': '1900-1-1', //最小日期
            'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
          });
        }
    },
    mounted:function(){
      this.timeSelect();
    },
    components:{
        headerBar
    }
  }
</script>
<style>
.logo{
  background: url("../assets/logo.png") no-repeat;
  background-size:100px;
  display: inline-block;
  width: 100px;
  height: 100px;
}
</style>
