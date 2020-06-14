import {request,requestgoods} from './request'

export function getmultidata(){
  return request({
    url:'/home/multidata'
  })
}
//获取首页商品信息  需要传入请求的商品列表和第几页
export function gethomegoods(type,page){
  return requestgoods({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

