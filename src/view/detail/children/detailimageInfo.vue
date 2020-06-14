<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="imageinfo">
    <div class="info-desc clear-fix">
      <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="loadingim">
    </div>
  </div>
</template>

<script>

  export default {
    name: "detailInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        count:0,
        imageslength:0
      }
    },
    methods:{
      loadingim(){
        //当全部图片加载完成是再进行刷新 等到图片加载完,再进行一次刷新
        // if(++this.count===this.imageslength) {
        //   this.$emit('loadingim')
        // }
        this.$emit('loadingim')
      }
    },
  //  监听图片的个数
    watch:{
      detailInfo(){
        //获取图片的个数
        this.imageslength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .imageinfo{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc{
    padding: 0 15px;
  }
  .info-desc .start , .info-desc .end{
    width: 90px;
    height: 1px;
    background-color: #A3A3A2;
    position: relative;
  }
  .info-desc .start{
    float: left;
  }
  .info-desc .end{
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after{
    content: "";
    width: 5px;
    height: 5px;
    background-color: black;
    position: absolute;
    bottom: 0;
  }
  .info-desc .end:after{
    right: 0;
  }
  .info-desc .desc{
    padding: 15px 0;
    font-size: 14px;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img{
    width: 100%;
  }
</style>
