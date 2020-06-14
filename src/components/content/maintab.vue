<template>
  <tabar>
    <tabaritem path="/home" activecolor="red">
      <img slot="item-img" src="~@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-active" src="~@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabaritem>
    <tabaritem path="/category" activecolor="green">
      <img slot="item-img" src="~@/assets/img/tabbar/category.svg" alt="">
      <img slot="item-active" src="~@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabaritem>
    <tabaritem path="shopcart" activecolor="pink">
      <img slot="item-img" src="~@/assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-active" src="~@/assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabaritem>
    <tabaritem path="profile" activecolor="yellow">
      <img slot="item-img" src="~@/assets/img/tabbar/profile.svg" alt="">
      <img slot="item-active" src="~@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabaritem>
  </tabar>
</template>

<script>
  import tabar from '../common/tabar/tabar'
  import tabaritem  from '../common/tabar/tabaritem';
  export default {
    name: "maintab",
    components:{
      tabar,
      tabaritem
    }
  }
</script>

<style scoped>

</style>
