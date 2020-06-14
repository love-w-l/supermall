<template>
<div class="cart-list">
  <bscroll class="content" ref="scroll">
    <shopcartitem v-for="(item,index) in cartlist" :product="item" :key="index"></shopcartitem>
  </bscroll>
</div>
</template>

<script>
  import bscroll from "../../../components/common/bscroll";
  import shopcartitem from "./shopcartitem";
  import {mapGetters} from 'vuex'
  export default {
    name: "cartlist",
    components:{
      bscroll,
      shopcartitem
    },
    computed:{
      ...mapGetters(['cartlist'])
    },
    activated() {
      this.$refs.scroll.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list{
    height: calc(100% - 44px - 49px - 40px);
  }
.content{
  height: 100%;
  overflow: hidden;
}
</style>
