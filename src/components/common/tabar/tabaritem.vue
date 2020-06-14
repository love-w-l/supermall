<template>
  <div class="tabar-item" @click="isclick">
    <div v-if=!isshow>
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-active"></slot>
    </div>
    <div :style="isactivecolor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabaritem",
    props:{
      path: {
        type:String,
      },
      activecolor: {
        type:String,
        default:'red'
      }
    },
    computed:{
      isshow(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      isactivecolor(){
        return this.isshow ? {color:this.activecolor} : {}
      }
    },
    methods:{
      isclick(){
        this.$router.push(this.path).catch(err=>err)
      }
    }
  }
</script>

<style scoped>

  .tabar-item{
    flex: 1;
    text-align: center;
  }
  .tabar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
  }
  /*.active{*/
  /*  color: red;*/
  /*}*/
</style>