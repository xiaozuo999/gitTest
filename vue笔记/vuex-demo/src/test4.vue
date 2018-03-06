<template>
  <div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
      return {
      }
    },
    computed:{
    },
    methods:{
      getData2:function(){
        var url="https://easy-mock.com/mock/5a9675042356aa41c5ad5168/aiweb-backstage/dataSearch";
        var par={
          pageSize:10,
          page:1
        }
        this.$axios.get(url,{params:par}).then(function(res){
          console.log(res);
        })
      }
    },
    created:function(){
      this.getData2();
    }
  }

</script>

<style>

</style>
