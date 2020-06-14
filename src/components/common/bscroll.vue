<template>
  <div class="wrapper" ref="wrapper">
<!--    默认包含内的事件监听事件是不起效果的,需要在创建时设置click为true-->
<!--    bscroll最外层的div内只能包含一个标签,可以在内部标签内插入多个标签,滚动效果才起效-->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "bscroll",
    data(){
      return{
        //用一个变量保存scroll实例对象,scroll内部不会有模块引用自己,必须设置个变量引用scroll对象,否则创建完后就会消失
        scroll:null
      }
    },
    props:{
      //让外部决定监听滚动方式,默认是不监听
      probeType:{
        type:Number,
        default:0
      },
      //默认不用上拉加载更多
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    //当所有dom元素都被创建出来时,创建滚动效果
    mounted() {
      //选择dom元素是,如果使用queryelement或document查找,在别的模块使用这个插槽时,如果有同名是,查找的是最外边的dom元素，这是就会出错
      //必须用ref标识查找唯一的dom元素
      //1.创建scroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        //设置监听方式,不能写死，要让每个页面自行决定
        probeType:this.probeType,
        //默认不用上拉加载更多,需要每个页面自行决定
        pullUpLoad:this.pullUpLoad,
      })

      //2.监听滚动的位置
      this.scroll.on('scroll',(position)=>{
      //  让谁调用,谁获得这个位置
        this.$emit('topscroll',position)
      })

      //3.监听上拉加载更多
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
    //  上拉加载更多只能加载一次,需要重新调用一个方法
      finishUp(){
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
