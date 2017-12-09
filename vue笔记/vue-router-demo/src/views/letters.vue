<template>
  <div id="app">
   <h1>数据列表</h1>
    <ul>
      <router-link v-for="item in items" tag="li" to="/lettersDetail">{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>
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
