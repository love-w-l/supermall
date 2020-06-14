<template>
  <div v-if="Object.keys(commentrate).length!==0" class="comment-info">
    <div class="info-hreder">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentrate.user.avatar" alt="">
      <span>{{commentrate.user.uname}}</span>
    </div>

    <div class="info-detail">
      <p>{{commentrate.content}}</p>
      <div class="info-other">
<!--        进行时间戳转换 过滤-->
        <span class="date">{{commentrate.created|showDate}}</span>
        <span>{{commentrate.style}}</span>
      </div>
    </div>

    <div class="info-image">
      <img :src="item" alt="" v-for="(item,index) in commentrate.images" :key="index">
    </div>
  </div>
</template>

<script>
  //引入转换时间戳的函数
  import {formatData} from "../../../components/common/utils/utils";
  export default {
    name: "detailcommont",
    props:{
      commentrate:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(value){
        //1.将时间戳转换data对象
        const date = new Date(value*1000)
        //2.将时间进项格式化
        return formatData(date,'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-hreder{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .header-title{
    float: left;
    font-size: 15px;
  }
  .header-more{
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }
  .info-user{
    padding: 10px 0 5px;
  }
  .info-user img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .info-user span{
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
  .info-detail{
    padding: 0 5px 15px;
  }
  .info-detail p{
      font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .info-detail .info-other{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .info-other .date{
    margin-right: 8px;
  }
  .info-image{
    margin-top: 12px;
  }
  .info-image img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>
