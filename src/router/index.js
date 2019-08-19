/*
路由器对象模块
//返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由路径时才会执行
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// 声明使用插件
Vue.use(VueRouter)

import MSite from '../pages/MSite/MSite.vue'
import Inform from '../pages/Inform/Inform.vue'
import Chat from '../pages/Chat/Chat.vue'
import Profile from '../pages/Profile/Profile.vue'

// const MSite = () => import('../pages/MSite/MSite.vue')
// const Search = () => import('../pages/Search/Search.vue')
// const Order = () => import('../pages/Order/Order.vue')
// const Profile = () => import('../pages/Profile/Profile.vue')

// import Login from '../pages/Login/Login.vue'
// import Shop from '../pages/Shop/Shop.vue'
// import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
// import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
// import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'




export default new VueRouter({
// 所有路由
  routes: [
    {
      path: '/',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/chat',
      component: Chat,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/inform',
      component: Inform,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    }
  ]
})
