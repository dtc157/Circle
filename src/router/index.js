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
import Circlemain from '../pages/Circlemain/Circlemain.vue'
import Search from '../pages/Search/Search.vue'
import AddCircle from '../pages/AddCircle/AddCircle.vue'
import RatingInfo from "../pages/RatingInfo/RatingInfo";
import TopicSearch from "../pages/TopicSearch/TopicSearch";
import SendContent from "../pages/SendContent/SendContent";
import LookTopics from "../pages/LookTopics/LookTopics";
import Lookareas from "../pages/Lookareas/Lookareas";
import Chooseareas from "../pages/Chooseareas/Chooseareas";
import CircleInfo from "../pages/CircleInfo/CircleInfo";
import JoinCircle from "../pages/JoinCircle/JoinCircle";
import UserInfo from "../pages/UserInfo/UserInfo";

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
    },
    {
      path: '/userinfo',
      component: UserInfo,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/circlemain',
      component: Circlemain,
    },
    {
      path: '/addcircle',
      component: AddCircle,
    },
    {
      path: '/ratinginfo',
      component: RatingInfo,
    },
    {
      path: '/topicsearch',
      component: TopicSearch,
    },
    {
      path: '/sendcontent',
      component: SendContent,
    },
    ,
    {
      path: '/LookTopics',
      component: LookTopics,
    },
    {
      path: '/lookareas',
      component: Lookareas,
    },
    {
      path: '/chooseareas',
      component: Chooseareas,
    },
    {
      path: '/circleinfo',
      component: CircleInfo,
    },
    {
      path: '/joincircle',
      component: JoinCircle,
    }

  ]
})
