<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="nav-left"></slot></div>
    <div class="nav-center"><slot name="nav-center"></slot></div>
    <div class="nav-right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
  }
  .nav-left,.nav-right{
    width: 60px;
  }
  .nav-center{
    flex: 1;
    text-align: center;
  }
</style>
