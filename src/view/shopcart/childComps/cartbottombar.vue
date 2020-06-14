<template>
  <div class="cart-bottom">
      <div class="check-content">
        <checkbutton class="check-button" :ischecked="selectchecked" @click.native="ischecked"></checkbutton>
        <span>全选</span>
      </div>
    <div class="price">
      合计：{{totalprice}}
    </div>
    <div class="calculate" v-on:click="calculate">
      去计算 {{checklength}}
    </div>
  </div>
</template>

<script>
  import checkbutton from "./checkbutton";
  export default {
    name: "cartbottombar",
    components:{
      checkbutton
    },
    methods:{
      ischecked(){
        if (this.selectchecked){
          this.$store.state.cartList.forEach(item=> item.ischecked=false)
        }else {
          this.$store.state.cartList.forEach(item=>item.ischecked=true)
        }
      },
      calculate(){
        if(!this.selectchecked){
          this.$emit('calculate')
        }
      }
    },
    computed:{
      totalprice(){
        return this.$store.state.cartList.filter(item=>{
          return item.ischecked
        }).reduce((prevalue,item)=>{
          return prevalue + item.price * item.count
        },0).toFixed(2)
      },
      checklength(){
        return this.$store.state.cartList.filter(item=>{return item.ischecked}).length
      },
      selectchecked(){
        if (this.$store.state.cartList.length === 0) return false
        // return !(this.$store.state.cartList.filter(item=>!item.ischecked).length)
        return !this.$store.state.cartList.find(item=>!item.ischecked)
      }
    }
  }
</script>

<style scoped>
.cart-bottom{
  height: 40px;
  line-height: 40px;
  background-color: #F4F4F4;
  border-bottom: 1px solid #494f54;
  display: flex;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 80px;
}
  .check-button{
    display: flex;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .price{
    flex: 1;
    margin-left: 20px;
  }
  .calculate{
    width: 90px;
    background-color: red;
    text-align: center;
    color: white;
  }
</style>
