<template>
  <div>
    <div style="border: 1px solid #ddd;padding: 10px;margin-bottom: 20px;">
      <h2>mutations处理异步操作</h2>
      <button type="text" @click="reduce(10)">-</button>
      <span>{{count}}</span>
      <button type="text" @click="addIncrement(10)">+</button>
     <p> 限制数字： {{limitNum}}</p>
    </div>

    <div style="border: 1px solid #ddd;padding: 10px;margin-bottom: 20px;">
      <h2>actions处理异步操作</h2>
      <button type="text" @click="reduceAction(10)">-</button>
      <span>{{count2}}</span>
      <button type="text" @click="addAction(10)">+</button>
      <p> 限制数字： {{limitNum2}}</p>
    </div>

  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed:{
    ...mapState(["count","count2"]),
    ...mapGetters(["limitNum","limitNum2"])
  },
  methods:{
    ...mapMutations(["addIncrement","reduce"]),  // 同步
    ...mapActions(["addAction","reduceAction"])  //异步
  },
  created:function(){
  }
}
</script>

<style>
</style>
