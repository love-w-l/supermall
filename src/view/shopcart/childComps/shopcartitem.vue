<template>
  <div id="shop-item">
    <div class="item-selector">
      <checkbutton :ischecked="product.ischecked" @click.native="ischecked"></checkbutton>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-count right">￥{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import checkbutton from "./checkbutton";
  export default {
    name: "shopcartitem",
    components:{
      checkbutton
    },
    props:{
      product:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      ischecked(){
        this.product.ischecked = !this.product.ischecked
      }
    }
  }
</script>

<style scoped>
#shop-item{
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
  .item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title,.item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img{
    padding: 5px;
  }
  .item-img img{
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 5px;
  }
  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .item-bottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .item-bottom .item-price{
    color: red;
  }
</style>
