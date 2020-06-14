<template>
<div class="recommend">
  <div class="recommend-item" v-for="item in recommend">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <span>{{item.title}}</span>
    </a>
  </div>
</div>
</template>

<script>
  export default {
    name: "Homerecommend",
    props:{
      recommend:{
        type:Array
      }
    }
  }
</script>

<style scoped>
.recommend{
  margin-top: 20px;
  display: flex;
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 6px solid #f6f6f6  ;
}
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 85%;
  }
</style>
