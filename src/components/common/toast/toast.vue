<template>
  <div class="toast" v-show="isshow">
    <div class="message2">
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "toast",
    // props:{
    //   message: {
    //     type: String,
    //     default: ''
    //   },
    //   isshow:{
    //     type: Boolean,
    //     default: false
    //   }
    // }
    data(){
      return{
        message:'',
        isshow:false
      }
    },
    methods:{
      show:function(message,time){
        this.message = message
        this.isshow = true

        setTimeout(()=>{
          this.message = ''
          this.isshow = false
        },time)
      }
    }
  }
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0,0,0,0.5);
  padding: 5px 10px;
  transform: translate(-50%);
  color: whitesmoke;
  width: 55%;
  text-align: center;
  z-index: 100;
}
</style>
