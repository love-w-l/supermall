<template>
<!--                       添加一个点击事件,点击进入详情页面-->
    <div class="goods-item" @click="aclick">
<!--                                           图片加载完成调用的事件  -->
      <img :src="showimg" alt="" @load="imgload">
      <div class="goodsinfo">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "goodslistitem",
    props:{
      goodsitem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showimg(){
        return this.goodsitem.image || this.goodsitem.show.img
      }
    },
    methods:{
      imgload(){
        //vue总事件$bus必须在原型上绑定一下,默认是没有$bus这个事件的

        //判断是首页还是详情页进行对应的页面刷新
        // if(this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('loadimg')
        // }else if (this.$route.path.indexOf('/detail')){
        //   this.$bus.$emit('detailloadimg')
        // }

        //通过混入进行对应的页面刷新
        this.$bus.$emit('loadimg')
      },
      aclick(){
        this.$router.push('/detail/'+this.goodsitem.iid)
      }
    }
  }
</script>

<style scoped>
.goods-item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goodsinfo{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goodsinfo p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
.goodsinfo .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsinfo .collect {
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../assets/img/home/collect.svg") 0 0/14px 14px;
}
</style>
