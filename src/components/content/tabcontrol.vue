<template>
<div class="tab-control">
<div class="tabcontrol-item" v-for="(item,index) in titles"
     :class="{active:index===indexitem}" @click="isclick(index)">
  <span>{{item}}</span>
</div>
</div>
</template>

<script>
  export default {
    name: "tabcontrol",
    data(){
      return {
        indexitem:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      },
    },
    methods:{
      isclick(index){
        this.indexitem = index
        //将子组件发生的点击事件发送给父组件
        this.$emit('tabcontrol',index)
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 40px;
  font-size: 18px;
  z-index: 9;
}
  .tabcontrol-item{
    flex: 1;
  }
  .active{
    color: pink;
  }
  .active span{
    padding-bottom: 8px;
    border-bottom: 2px solid pink;
  }
</style>
