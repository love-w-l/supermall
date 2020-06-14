<template>
  <div id="shops">
    <div class="shop-logo">
      <img :src="shops.logo" alt="">
      <div class="title">{{shops.name}}</div>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left" >
        <div class="info-sells">
          <div class="selles-count">
            {{shops.sells}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shops.goodscount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shops.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-beeter':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-bottom">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailshops",
    props:{
      shops:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #shops{
    padding: 25px 8px;
    border-bottom: 5px solid red;
  }
.shop-logo{
  line-height: 45px;
  /*让元素垂直中心对齐*/
  display: flex;
  align-content: center;
}
  .shop-logo img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-logo .title{
    margin-left: 20px;
    vertical-align: center;
  }
  .shop-middle{
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .shop-middle-item{
    flex: 1;
  }
  .shop-middle-left{
    display: flex;
    justify-content: space-between;
    color: #333;
    padding-right: 20px;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .selles-count ,.goods-count{
    font-size: 18px;
  }
.sells-text, .goods-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right {
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
  .shop-middle-right .score{
    color: #5ea732;
  }
  .shop-middle-right .score-beeter{
    color: #f13e3a;
  }
.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shop-middle-right .better-more span {
  background-color: #f13e3a;
}
  .shop-bottom{
    text-align: center;
    margin-top: 10px;
  }
  .enter-bottom{
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
