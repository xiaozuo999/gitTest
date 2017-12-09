<template>
  <div id="app">
   <h1>数据列表1</h1>
    <!--图片一：-->
    <!--<img src="./../../../static/images/logo-vue.png" alt="" style="width: 50px;">-->
    <!--<hr>-->
    <!--图片二：-->
    <!--<img src="././static/images/logo-vue.png" alt="" style="width: 100px;">-->
    <ul>
      <router-link v-for="item in items" tag="li" to="/lettersDetail">{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>

  import "../../../static/css/public.css"
  import "../../../static/js/common.js"

export default {
  name: 'app',
  data () {
    return {
      items:[
          {
            "name":"标题一",
            "id":1
           },
        {
          "name":"标题二",
          "id":2
        }
      ]
    }
  }
}
</script>

<style>
</style>
