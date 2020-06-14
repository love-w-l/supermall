<template>
  <div class="goods">
  <goodslistitem v-for="item in goods" :goodsitem="item">
  </goodslistitem>
  </div>
</template>

<script>
  import goodslistitem from "./goodslistitem";
  export default {
    name: "goodslist",
    components:{
      goodslistitem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
}
</style>
