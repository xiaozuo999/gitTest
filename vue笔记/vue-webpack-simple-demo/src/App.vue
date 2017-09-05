<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <ul>
      <li>
        <a v-link="{path:'/home'}">首页</a>
      </li>
      <li>
        <a v-link="{path:'/news'}">新闻页</a>
      </li>
    </ul>
    <router-view></router-view>
    <input type="button" value="点击改变" @click="change">
  </div>
</template>


<script>
//export是es6导出模块的方式：
export default {
  name: 'app',
  data () {
    return {
      nav:[
          {
              "name":"首页",
              "url":"home.html"
          },
          {
              "name":"新闻",
              "url":"new.html"
          }
      ],
      msg:"hello vue!"
    }
  },
  methods:{
      change(){
          var str=this.msg;
          str=str.split('').reverse();
          this.msg=str;
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
