<template>
  <div>
  <Swiper>
    <Swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </Swiper-item>
  </Swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/common/swiper'

  export default {
    name: "homeswiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        //设置是否加载了图片高度,默认是没有
        isload:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      imgload(){
        if(!this.isload) {
          this.$emit('swiperimgload')
          this.isload = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
