<template>
  <div class="main mt40">
    <div class="top">
      <div class="jcb bdb1 df p10 bg-white">
        <span>当前定位城市</span>
        <span class="color-gray">定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to='/city/' class="bdb1 p10 df jcb bg-white">
        <span class="fz18 c-active" v-cloak>{{address.name}}</span>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
    </div>
    <div class="city-wrap city-hot">
      <div class="content-title">
        热门城市
      </div>
      <div class="content" v-cloak>
        <router-link tag="a" v-for="item in cityHot"  :to="'/city/'+item.id" :key="item.id" class="col-xs-3 c-active">
          {{item.name}}
        </router-link>
      </div>
    </div>
    <div class="city-wrap city-group">
      <div class="city-group-one" v-for="(item,index) in cityGroup" v-cloak>
        <div class="content-title">
          {{softRule[index]}}<span v-show="index=='A'" class="fz10 color-grey">(按字母排序)</span>
        </div>
        <div class="content">
          <template v-for="(item2,index2) in item">
            <a :href='"city.html?type="+item2.pinyin+"|"+index2' data-area_code="item2.area_code" class="col-xs-3 ellipsis">{{item2.name}} </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                cityHot:77,
                cityGroup:[],
                softRule:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
            }
        },
        computed:{
            address:function(){
                return  {
                    "pinyin": "shanghai",
                    "is_map": true,
                    "longitude": 121.473701,
                    "latitude": 31.23037,
                    "sort": 1,
                    "area_code": "021",
                    "abbr": "SH",
                    "name": "上海",
                    "id": 1
                }
            }
        },
        created:function(){
            this.$http.get('/json/city-hot.json',{
            }).then(function(res){
                this.cityHot=res.data;
            },function(res){
                console.log(res.status);
            })
            this.$http.get('/json/city-group.json',{
            }).then(function(res){
                var a=res.data;
                for(var i=0;i<this.softRule.length;i++){
                    var one=a[this.softRule[i]];
                    this.cityGroup.push(one);
                }
            },function(){
                console.log("请求失败");
            })
        },
        components:{
        }
    }
</script>

<style lang="scss">
  @import '/src/assets/css/index.css';
</style>