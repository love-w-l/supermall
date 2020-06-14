<template>
  <div id="home">
    <navbar class="nav-bar">
      <div slot="nav-left"></div>
      <div slot="nav-center" class="nav-center">购物街</div>
      <div slot="nav-right"></div>
    </navbar>
    <tabcontrol class="tabcontrol2" :titles="['流行','新款','精选']" @tabcontrol="tabclick" ref="tabcontarol1" v-show="aisflex"></tabcontrol>
<!--    为组件表示一个ref,到时候通过ref就可以找到组件里面的内容和方法-->
<!--                                          probe-type:3进行实时监听-->
    <bscroll class="content"
             ref="scroll"
             :probe-type="3"
             @topscroll="contentclick" :pull-up-load="true" @pullingUp="loadmore">
    <homeswiper :banners="banners" @swiperimgload="swiperimgload"></homeswiper>
    <Homerecommend :recommend="recommend"></Homerecommend>
    <feachtrueview></feachtrueview>
    <tabcontrol class="tabcontrol" :titles="['流行','新款','精选']" @tabcontrol="tabclick" ref="tabcontarol2" ></tabcontrol>
    <goodslist :goods="goods[showgoods].lists"></goodslist>
    </bscroll>

<!--    监听小按钮的点击事件 @click对组件不能进行监听事件,必须更上一个修饰符.native对组件进行监听-->
    <backtop @click.native="topclick" v-show="topshow"></backtop>
  </div>
</template>

<script>
  import navbar from "../../components/common/navbar/navbar"
  import tabcontrol from "../../components/content/tabcontrol";
  import goodslist from "../../components/content/goodslist";

  import {debounce} from "../../components/common/utils/utils";

  import homeswiper from "./childComps/homeswiper";
  import Homerecommend from "./childComps/Homerecommend"
  import feachtrueview from './childComps/feachtrueview'
  //引入第三方滚轮插件
  import bscroll from "../../components/common/bscroll";
  import backtop from "../../components/content/backtop";

  import {getmultidata,gethomegoods} from '../../network/home';
  export default {
    name: "home",
    data(){
      return{
        banners:[],
        recommend:[],
        //保存最下面的流行/新款/精选的所有图片与信息
        goods:{
          //最刚开始是初始化页面显示没有,第0页，数据也是空的,发送请求到数据存放到这里
          'pop':{page:0,lists:[]},
          'new':{page:0,lists:[]},
          'sell':{page:0,lists:[]}
        },
        //默认显示的是第一页,当点击的时候更换
        showgoods:'pop',
      //  默认回到顶部是隐藏的
        topshow:false,
      //  tabcontrol的高度
        tabcontrol:0,
      //  吸顶效果,默认是没有,等到达一定高度设置为true
        aisflex:false,
        //设置离开保存的Y值,等到切换回来的时候在压入
        saveY:0,
        //设置页面刷新的记录函数
        isrefresh:null
      }
    },
    components:{
      navbar,
      tabcontrol,
      goodslist,

      Homerecommend,
      homeswiper,
      feachtrueview,
      bscroll,
      backtop
    },
    methods:{
      //上拉加载更多
      loadmore(){
        this.gethomegoods(this.showgoods)
        //在图片请求之前scroll插件已经计算好可滚动的区域,但请求数据成功时再次刷新可滚动高度
        // this.$refs.scroll.scroll.refresh()
        // console.log(this.$refs.scroll.scroll)
      },
      //监听滚动位置的方法
      contentclick(position){
        //滚动的y值是负数
        this.topshow = (-position.y) >600
      //  tabcontrol达到指定的位置,设置flex达到吸顶效果
        this.aisflex = (-position.y) >this.tabcontrol
      },
      //监听放回顶部的组件方法
      topclick(){
        //也可以将这个方法在scroll组件内部封装一下
        // this.$refs.scroll.scroll.scrollTo(0,0,500)
      //  通过访问内部的方法  先监测里面scroll里面有值没有,如果没有则返回
        this.$refs.scroll && this.$refs.scroll.scrollTo(0,0)
      },
      //点击事件的方法
      tabclick(index){
        switch (index) {
          case 0:
            this.showgoods = 'pop'
            break
          case 1:
            this.showgoods = 'new'
            break
          case 2:
            this.showgoods = 'sell'
            break
        }
        this.$refs.tabcontarol2.indexitem = index
        this.$refs.tabcontarol1.indexitem = index
      },
      //通过获取轮播图的加载完成获取tabcontarl的高度
      swiperimgload(){
        //几张轮播图加载几次获取高度,只需要获取一次高度就行了,在轮播图内设置
        // console.log(this.$refs.tabcontarol.$el.offsetTop)
        this.tabcontrol = this.$refs.tabcontarol2.$el.offsetTop
      },

      //请求数据的方法
      //将请求逻辑放在方法中
      getmultidata(){
        getmultidata().then(res=>{
          this.banners = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      gethomegoods(type){
        //把三栏的数据都请求下来,而且请求的页数不能写死，需要传一个变量,当第一页请求成功后,请求下一页的内容
        const count = this.goods[type].page + 1
        gethomegoods(type,count)
          .then(res=>{
            this.goods[type].lists.push(...res.data.data.list)
            //当压入一次数据时,页码需要加一
            this.goods[type].page +=1
            //当上一页的数据请求成功时,调用上拉加载更多
            this.$refs.scroll.finishUp()
          }).catch(error=>{
          console.log(error)
        })
      },
      //定义一个防抖动函数  将防抖函数抽离成一个单独组件
      // debounce(func,wait){
      //   let times = null
      //   return function(){
      //     if(times) clearTimeout(times)
      //     times = setTimeout(function(){
      //       func
      //       console.log('---')
      //     },wait)
      //   }
      // }
    },
    created() {
      //在创建的时候只调用方法,逻辑在方法中写
      //1.请求多个数据
      this.getmultidata()

      //2.请求商品数据  先把三栏的数据都请求下来
      this.gethomegoods('pop')
      this.gethomegoods('new')
      this.gethomegoods('sell')
      //
    },
    //在组件全部被挂载的时候进行
    mounted() {
      //1.获取每一张图片的高度,并重新计算高度
      // const referesh = debounce(this.$refs.scroll.scroll.refresh,1000)
      // this.$bus.$on('loadimg',()=>{
      //   //必选满足前面的组件内有值才执行后面的监听  每加载一张图片就重新刷新计算一次高度
      //   // this.$refs.scroll && this.$refs.scroll.scroll.refresh()
      //   //设置防抖功能,将短时间内加载的内容相同时就加载一次
      //   referesh()
      // })

      const refresh = debounce(this.$refs.scroll.scroll.refresh,1000)
      this.isrefresh = ()=>{
        refresh()
      }
      this.$bus.$on('loadimg',this.isrefresh)

    //  2.获取tabcontrol的offsetTop高度来制作吸顶效果  通过组件获取高度是undefined,可以通过$el获取组件内元素的高度
    //  从这里获取的高度还没加上图片的高度,必须等到图片加载出来在计算offsetTop的高度，这里的案例等到轮播图加载完成在计算高度
    //   console.log(this.$refs.tabcontarol.$el.offsetTop)
    },
    //默认每个路由的组件被切换时都会销毁,切换回来是又被重新创建，在最一开始的外层标签内设置<keep-alive>标签包裹,就不会销毁了
    // destroyed() {
    // },
    activated() {
      // this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.scroll.refresh()

    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
      //取消全局事件监听事件
      this.$bus.$off('loadimg',this.isrefresh)
    }
  }
</script>
<style scoped>
.nav-center{
  line-height: 45px;
}
  .nav-bar{
    background: pink;
    /*在使用原始滚动时设置的布局，当使用bscroll是这些样式就没用了*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 9;*/
  }
  #home{
    /*padding-top: 44px;*/
    /*vh是视口高度*/
    height: 100vh;

    /*使用定位的方法*/
    position: relative;
  }
  .tabcontrol{
    /*让这个div达到一定位置停留效果 当使用插件包裹该区域时,这个样式就无效了*/
    /*position: sticky;*/
    /*top: 43px;*/
    background: #f6f6f6;
  }

  /*第一种方法*/
  /*.content{*/
  /*  !*calc一个计算像素的属性*!*/
  /*  height: calc(100% - 93px) ;*/
  /*  overflow: hidden;*/
  /*  !*顶部的导航栏的高度*!*/
  /*  margin-top: 44px;*/
  /*}*/

/*  第二种方法 定位*/
  .content{
    overflow: hidden;
    height: calc(100% - 93px);
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
.tabcontrol2{
  position: relative;
  background: #f6f6f6;
}
</style>
