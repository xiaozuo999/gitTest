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
//    ...mapState([""])
    ...mapGetters(["lists"])
  },
  methods:{
    ...mapActions(["changeAction"])
  },
  created:function(){
//    var a=this.$store.getters.lists;
//    this.lists=a;
//    console.log(a);
  }
}
</script>

<style>
</style>
