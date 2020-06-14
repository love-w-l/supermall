import {requestgoods} from './request'

export function getdetail(iid){
  return requestgoods({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getrecommend() {
  return requestgoods({
    url:'/recommend'
  })
}

//整合轮博图下面的数据
export class Goods{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

//获取商家信息
export class Shops{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodscount = shopInfo.cGoods
  }
}

