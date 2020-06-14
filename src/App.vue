<template>
  <div id="app">
    <maintab class="rootapp"></maintab>
<!--    exclude排除详情页每次获取新的iid请求数据-->
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import maintab from './components/content/maintab'
  //引入兼容公共css样式
import '@/assets/css/base.css'
export default {
  name: 'App',
  components: {
    maintab
  }
}
</script>

<style>
  .rootapp{
    z-index: 10;
  }
</style>
