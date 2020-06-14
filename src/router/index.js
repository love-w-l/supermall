import Vue from 'vue'
import VueRouter from 'vue-router'

//1.使用插件
Vue.use(VueRouter)

//4.将对应的组件挂载到路由上
const home = () => import('@/view/home/home')
const shopcart = () => import('@/view/shopcart/shopcart')
const category = () => import('@/view/category/category')
const profile = () => import('@/view/profile/profile')
const detail = () => import('@/view/detail/detail')

//3.将路由配置对象抽离出来

const routes = [
  {
    path:'',
    redirect:'/home',
    meta:{
      title:'首页'
    }
  },{
    path:'/home',
    component:home,
    meta:{
      title:'首页'
    }
  },{
    path:'/category',
    component:category,
    meta:{
      title:"分类"
    }
  },{
    path:'/shopcart',
    component:shopcart,
    meta:{
      title:'购物车'
    }
  },{
    path:'/profile',
    component:profile,
    meta:{
      title:'我的'
    }
  },{
  path:'/detail/:iid',
    component:detail,
    meta:{
    title:'详情'
    }
  }
]



const router = new VueRouter({
  routes,
  mode:'history',
})
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})
//2.导出实例化对象
export default router
