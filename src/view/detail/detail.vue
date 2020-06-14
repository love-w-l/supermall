<template>
<div id="detail">
  <navbar class="navbar-item">
    <div slot="nav-left" @click="backclick">
      <img src="../../assets/img/home/back.svg" alt="" class="back">
    </div>
    <div slot="nav-center" class="title" ref="scroll">
      <div v-for="(item,index) in this.detailitem" class="title-item"
      :class="{titleshow:index === isshow}" @click="itemclick(index)">{{item}}</div>
    </div>
  </navbar>
  <bscroll class="content1" ref="scroll" :probe-type="3" @topscroll="detailscroll">
  <detailswiper :topimage="topimage"></detailswiper>
  <detailgoods :goods="goods"></detailgoods>
  <detailshops :shops="shops"></detailshops>
    <detailInfo :detailInfo="detailInfo" @loadingim="loadingim"></detailInfo>
    <detailparams :item-params="itemParams" ref="params"></detailparams>
    <detailcomment :commentrate="commentrate" ref="comment"></detailcomment>
    <goodslist :goods="recommend" ref="recomment"></goodslist>
  </bscroll>
  <backtop @click.native="topclick" v-show="topshow"></backtop>
  <detailbottombar @addcart="addcart"></detailbottombar>
  <toast :message="message" :isshow="isshow2"></toast>
</div>
</template>

<script>
  import navbar from "../../components/common/navbar/navbar";
  import {getdetail} from '../../network/detail'
  import detailswiper from "./children/detailswiper";
  import {debounce} from '../../components/common/utils/utils'
  //导入轮博图下面的Goods数据
  import {Goods , Shops , getrecommend} from "../../network/detail";
  import detailgoods from "./children/detailgoods";
  import detailshops from "./children/detailshops";
  import detailInfo from "./children/detailimageInfo";
  import detailparams from "./children/detailparams";
  import detailcomment from "./children/detailcomment";
  import goodslist from "../../components/content/goodslist";
  import detailbottombar from "./children/detailbottombar";
  //引入第三方滚动插件
  import bscroll from "../../components/common/bscroll";
  import backtop from "../../components/content/backtop";
  import toast from "../../components/common/toast/toast";

  export default {
    name: "detail",
    components:{
      navbar,
      detailswiper,
      detailgoods,
      detailshops,
      bscroll,
      detailInfo,
      detailparams,
      detailcomment,
      goodslist,
      detailbottombar,
      backtop,
      toast
    },
    data(){
      return {
        iid:null,
        detailitem:['商品','参数','评论','推荐'],
        isshow:0,
        topimage:[],
        goods:{},
        shops:{},
        detailInfo:{},
        itemParams:{},
        commentrate:{},
        recommend:[],
        isrefresh:null,
        detailtopy:[],
        getdetailtopy:null,
        topshow:false,
        isshow2:false,
        message:''
      }
    },
    created() {
      //1.获取自己的iid
      this.iid = this.$route.params.iid
    //  2、通过iid请求数据
      getdetail(this.iid).then(res=>{
      //  1.获取轮博图的资源
        let datas = res.data.result
        this.topimage = datas.itemInfo.topImages
        //2.获取轮博图下面的资源
        this.goods = new Goods(datas.itemInfo,datas.columns,datas.shopInfo.services)
      //  3.获取商家的资源
        this.shops = new Shops(datas.shopInfo)
      //  4.获取详情页的全部照片
        this.detailInfo = datas.detailInfo
      //  5.获取参数的数据
        this.itemParams = datas.itemParams
        //  6.获取评论内容,先进行判断是否有值
        if(datas.rate.cRate !==0){
          this.commentrate = datas.rate.list[0]
        }
        this.getdetailtopy = debounce(()=>{

        },200)
      })
    //  3.请求recommend数据
      getrecommend().then(res=>{
        // console.log(res)
        this.recommend = res.data.data.list
      })
    },
    methods:{
      addcart(){
        const cartshop = {}

        cartshop.image = this.topimage[0]
        cartshop.title = this.goods.title
        cartshop.price = this.goods.realPrice
        cartshop.desc = this.goods.desc
        cartshop.iid = this.iid
        // this.$store.commit('addcart',cartshop)
        this.$store.dispatch('addcart',cartshop).then(res=>{
          // this.message = res
          // this.isshow2 = true
          // setTimeout(()=>{
          //   this.isshow2 = false
          //   this.message = ''
          // },1500)
          this.$toast.show(res,1000)
        })

      },
      itemclick(index){
        this.isshow = index
        this.$refs.scroll.scrollTo(0,-this.detailtopy[index],200)
      },
      backclick(){
        this.$router.back()
      },
      loadingim(){
        this.$refs.scroll.scroll.refresh()
        this.detailtopy = []
        this.detailtopy.push(0)
        this.detailtopy.push(this.$refs.params.$el.offsetTop - 44)
        this.detailtopy.push(this.$refs.comment.$el.offsetTop)
        this.detailtopy.push(this.$refs.recomment.$el.offsetTop-44)
      },
      topclick(){
        //也可以将这个方法在scroll组件内部封装一下
        // this.$refs.scroll.scroll.scrollTo(0,0,500)
        //  通过访问内部的方法  先监测里面scroll里面有值没有,如果没有则返回
        this.$refs.scroll && this.$refs.scroll.scrollTo(0,0)
      },
      detailscroll(position){
        this.topshow = (-position.y) >600
        const positiony = -position.y
        let length = this.detailtopy.length
        //获取不到最后一个下标
        // for (let i =0;i<length;i++){
        //   if (positiony>this.detailtopy[i] && positiony<this.detailtopy[i+1]){
        //     console.log(i)
        //   }
        // }
        for (let i =0;i<length;i++){
          if ((i<length-1 && positiony>this.detailtopy[i]&&positiony<this.detailtopy[i+1])||(i===length-1 && positiony>this.detailtopy[i])){
            this.isshow==i
          }
        }
      }
    },
    mounted() {
      // const refresh = debounce(this.$refs.scroll.scroll.refresh,1000)
      // this.$bus.$on('detailloadimg',()=>{
      //   refresh()
      // })
      const refresh = debounce(this.$refs.scroll.scroll.refresh,1000)
      this.refresh = ()=>{
        refresh()
      }
      this.$bus.$on('loadimg',this.refresh)
    },
    destroyed() {
      this.$bus.$off('loadimg',this.refresh)
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 10;
    background-color: #FFFFFF;
    height: 100vh;
  }
.title{
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 13px;
}
  .title-item{
    flex: 1;
  }
  .titleshow{
    color: pink;
  }
  .navbar-item{
    z-index: 9;
    background-color: #f6f6f6;
  }
  .back{
    width: 18px;
    height: 18px;
    margin: 14px 0 0 20px;
  }
  .content1{
    height: calc(100% - 44px - 50px);
    overflow: hidden;
  }
</style>
