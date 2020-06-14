<template>
  <div class="checkedbutton" :class="{active:ischecked}">
    <img src="../../../assets/img/cart/tick.svg" alt="" >
  </div>
</template>

<script>
  export default {
    name: "checkbutton",
    props:{
      ischecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
.active{
  border-color: red;
  background-color: red;
}
  .checkedbutton{
    border-radius: 50%;
    border: 1px solid #666666;
  }
</style>
