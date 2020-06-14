<template>
  <div class="shopcart">
    <navbar class="navbar">
      <div slot="nav-center" class="nav-cart">购物车({{cartlength}})</div>
    </navbar>
    <cartlist></cartlist>
    <cartbottombar @calculate="calculate"></cartbottombar>
    <toast :message="message" :isshow="isshow"></toast>
  </div>
</template>

<script>
  import navbar from "../../components/common/navbar/navbar";
  import cartlist from "./childComps/cartlist";
  import {mapGetters} from 'vuex'
  import cartbottombar from "./childComps/cartbottombar";
  import toast from "../../components/common/toast/toast";
  export default {
    name: "shopcart",
    data(){
      return{
        isshow:false,
        message:''
      }
    },
    components:{
      navbar,
      cartlist,
      cartbottombar,
      toast
    },
    computed:{
      ...mapGetters(['cartlength'])
    },
    methods:{
      calculate(){
        this.isshow = true
        this.message='请至少选择一件商品'
        setTimeout(()=>{
          this.isshow=false
          this.message = ''
        },1000)
      }
    }
  }
</script>

<style scoped>
  .shopcart{
    height:100vh;
  }
.navbar{
  background-color: pink;
}
  .nav-cart{
    line-height: 40px;
    font-size: 16px;
  }
</style>
