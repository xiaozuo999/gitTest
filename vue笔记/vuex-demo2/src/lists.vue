<template>
   <div>
      <ul>
         <li v-for="item in lists" @click="changeAction(item.title)">{{item.title}}</li>
      </ul>
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
    ...mapGetters(["lists"])
  },
  methods:{
    changeAction:function(title){
      this.$store.state.selectModule.keyword=title;    //改变store的方法只有使用commit才行，这样赋值，实例仓库的值不会改变；
    }
//    ...mapActions(["changeAction"])
  },
  created:function(){

  }
}
</script>

<style>
</style>
