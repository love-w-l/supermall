<template>
  <div id="tabar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabar"
  }
</script>

<style scoped>
  #tabar{
    display: flex;
    height: 49px;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
