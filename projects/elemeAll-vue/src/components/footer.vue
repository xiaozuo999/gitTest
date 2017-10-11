<template>
  <h1>这是尾部</h1>
  <!--<footer class="footer-menu df tac">-->
    <!--<a href="home.html" class="fx1">-->
      <!--<i class="fa fa-shopping-basket" :class="{'c-active':url.indexOf('home')>0 ? true:false}"></i>-->
      <!--<span>外卖</span>-->
    <!--</a>-->
    <!--<a href="search.html" class="fx1">-->
      <!--<i class="fa fa-search" :class="{'c-active':url.indexOf('search')>0 ? true:false}"></i>-->
      <!--<span>搜索</span>-->
    <!--</a>-->
    <!--<a href="order.html" class="fx1">-->
      <!--<i class="fa fa-reorder " :class="{'c-active':url.indexOf('order')>0 ? true:false}"></i>-->
      <!--<span>订单</span>-->
    <!--</a>-->
    <!--<a href="profile.html" class="fx1">-->
      <!--<i class="fa fa-user-o" :class="{'c-active':url.indexOf('profile')>0 ? true:false}"></i>-->
      <!--<span>我的</span>-->
    <!--</a>-->
  <!--</footer>-->
</template>

<script>
    export default {
        data () {
            return {
                url:location.href,
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss">

</style>
