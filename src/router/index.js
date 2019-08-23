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
import Collection from '../pages/Collection/Collection.vue'
import Conversation from '../pages/Conversation/Conversation.vue'
import Setting from '../pages/Setting/Setting.vue'
import toLogin from '../pages/toLogin/toLogin.vue'
import Login from '../pages/Login/Login.vue'
import NoteInfo from '../pages/NoteInfo/NoteInfo.vue'
import Register1 from '../pages/Register/Register1.vue'
import Register2 from '../pages/Register/Register2.vue'
import Register3 from '../pages/Register/Register3.vue'
import loginTest from '../pages/toLogin/toLogin.vue'
import Register0 from '../pages/Register/Register0.vue'
import NickName from "../pages/NickName/NickName"
import publishNotice from '../pages/LookTopics/publishNotice.vue'

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
    routes: [{
            path: '/',
            component: toLogin,
            meta: {
                showFooter: false
            }
        },
        {
            path: '/msite',
            component: MSite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/chat',
            component: Chat,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/inform',
            component: Inform,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/userinfo',
            component: UserInfo,
        },
        //昵称修改页面
        {
            path: '/nickname',
            component: NickName,
        },
        {
            path: '/search',
            component: Search,
        },
        {
            path: '/circlemain',
            name: 'Circlemain',
            component: Circlemain,
        },
        {
            path: '/addcircle',
            component: AddCircle,
        },
        {
            path: '/ratinginfo',
            name: 'RatingInfo',
            component: RatingInfo,
        },
        {
            path: '/topicsearch',
            name: 'TopicSearch',
            component: TopicSearch,
        },
        {
            path: '/sendcontent',
            name: 'SendContent',
            component: SendContent,
        },
        {
            path: '/LookTopics',
            name: 'LookTopics',
            component: LookTopics,
        },
        {
            path: '/publishNotice',
            name: 'publishNotice',
            component: publishNotice,
        },
        {
            path: '/noteinfo',
            name: 'NoteInfo',
            component: NoteInfo,
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
            name: "JoinCircle",
            component: JoinCircle,
        },

        // 我的收藏页面
        {
            path: '/Collection',
            component: Collection
        },
        // 话题页面
        {
            path: '/Conversation',
            component: Conversation
        },
        // 推送设置页面
        {
            path: '/Setting',
            component: Setting
        },
        // 进入登录页面
        {
            path: '/toLogin',
            component: toLogin,
            meta: {
                showFooter: false
            }
        },
        // 登录界面
        {
            path: '/Login',
            component: Login,

        },
        // 登录界面2
        {
            path: '/loginTest',
            component: loginTest,
            children: [{
                path: '/loginTest',
                component: loginTest
            }, {
                path: '/loginTest',
                component: loginTest
            }, {
                path: '/loginTest',
                component: loginTest
            }]

        },
        // 注册页面1
        {
            path: '/Register0',
            component: Register0
        },
        // 注册页面1
        {
            path: '/Register1',
            component: Register1
        },
        // 注册页面2
        {
            path: '/Register2',
            component: Register2
        },
        // 注册页面3
        {
            path: '/Register3',
            component: Register3
        }

    ]
})