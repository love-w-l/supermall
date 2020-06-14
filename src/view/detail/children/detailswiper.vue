<template>
  <div>
  <Swiper class="swipertop">
    <SwiperItem v-for="item in topimage">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
  export default {
    name: "detailswiper",
    props:{
      topimage:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.swipertop{
  height: 300px;
}
</style>
