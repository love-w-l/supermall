import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    // addcart(state,payload) {
    //   let oldproduct = null
    //   for (let item of state.cartList){
    //     if (item.iid===payload.iid){
    //       oldproduct = item
    //     }
    //   }
    //   // let oldproduct = state.cartList.find(item=>{return item.iid===payload.iid})
    //   if (oldproduct){
    //     oldproduct.count+=1
    //   }else{
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }
    addcount(state,payload){
        payload.count +=1
    },
    addtocart(state,payload){
      payload.ischecked = true
      state.cartList.push(payload)
    }
  },
  actions:{
    addcart({state,commit},payload){
      return new Promise((res,rej)=>{
        let product = state.cartList.find(item=>{return item.iid===payload.iid})
        // let product = null
        // for (let item of state.cartList){
        //   if (item.iid===payload.iid){
        //     product=item
        //   }
        // }
        if (product){
          commit('addcount',product)
          res('当前商品数量+1')
        }else{
          payload.count = 1
          commit('addtocart',payload)
          res('添加购物车成功')
        }
      })
    }
  },
  getters:{
    cartlength(state){
      return state.cartList.length
    },
    cartlist(state){
      return state.cartList
    }
  }
})
export default store

