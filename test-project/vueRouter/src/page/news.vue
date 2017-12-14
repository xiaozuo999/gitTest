<template>
  <div>
      <h1>我是新闻页面</h1>
      <ul>
          <li>
              <router-link to="/news/detail">点击查看新闻</router-link>
          </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
