/*
路由器对象模块
//返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由路径时才会执行
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// 声明使用插件
Vue.use(VueRouter)
 const MSite = () => import('../pages/MSite/MSite.vue')
const Inform = () => import('../pages/Inform/Inform.vue')
const Chat = () => import('../pages/Chat/Chat.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Circlemain = () => import('../pages/Circlemain/Circlemain.vue')
const Search = () => import('../pages/Search/Search.vue')
const AddCircle = () => import('../pages/AddCircle/AddCircle.vue')
const RatingInfo = () => import('../pages/RatingInfo/RatingInfo.vue')
const TopicSearch = () => import('../pages/TopicSearch/TopicSearch.vue')
const SendContent = () => import('../pages/SendContent/SendContent.vue')
const LookTopics = () => import('../pages/LookTopics/LookTopics.vue')
const Lookareas = () => import('../pages/Lookareas/Lookareas.vue')
const Chooseareas = () => import('../pages/Chooseareas/Chooseareas.vue')
const CircleInfo = () => import('../pages/CircleInfo/CircleInfo.vue')
const JoinCircle = () => import('../pages/JoinCircle/JoinCircle.vue')
const UserInfo = () => import('../pages/UserInfo/UserInfo.vue')
const Collection = () => import('../pages/Collection/Collection.vue')
const Conversation = () => import('../pages/Conversation/Conversation.vue')
const Setting = () => import('../pages/Setting/Setting.vue')
const toLogin = () => import('../pages/toLogin/toLogin.vue')
const Login = () => import('../pages/Login/Login.vue')
const NoteInfo = () => import('../pages/NoteInfo/NoteInfo.vue')
const Register1 = () => import('../pages/Register/Register1.vue')
const Register2 = () => import('../pages/Register/Register2.vue')
const Register3 = () => import('../pages/Register/Register3.vue')
const loginTest = () => import('../pages/toLogin/toLogin.vue')
const Register0 = () => import('../pages/Register/Register0.vue')
const Files = () => import('../pages/Files/File.vue')
const LoadingPage = () => import('../pages/LoadingPage/LoadingPage.vue')
const MemberMain = () => import('../pages/MemberMain/MemberMain.vue')
const PhotoPages = () => import('../pages/PhotoPages/PhotoPages.vue')
const publishNotice = () => import('../pages/LookTopics/publishNotice.vue')
const Groupdetails = () => import('../pages/Groupdetails/Groupdetails.vue')
const chatDetail = () => import('../pages/Chat/chatDetail.vue')
const CreateGroup = () => import('../pages/CreateGroup/CreateGroup.vue')
const modifyInformation = () => import('../pages/modifyInformation/modifyInformation.vue')
const myConversation = () => import('../pages/Conversation/myConversation.vue')

export default new VueRouter({
    // 所有路由
    routes: [{
            path: '/LoadingPage',
            component: LoadingPage,
            meta: {
                showFooter: false
            }
        },
        {
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
        //修改用户
        {
          path: '/modifyInformation',
          component: modifyInformation,
        },
        //我的话题
        {
          path: '/myConversation',
          component: myConversation
        },
        //加载页面
        {
          path: '/loadingpage',
          name:'LoadingPage',
          component: LoadingPage,
        },
        //用户详情页
        {
            path: '/userinfo',
            component: UserInfo,
        },
        //创建小组页
        {
          path: '/creategroup',
          name:'CreateGroup',
          component: CreateGroup,
        },
        //成员主页
        {
          path: '/membermain',
          name:'MemberMain',
          component: MemberMain,
        },
        //小组详情页
        {
          path:'/groupdetails',
          name:'Groupdetails',
          component:Groupdetails,
        },
      //通知详情
        {
          path: '/chatDetail',
          name:'chatDetail',
          component: chatDetail
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
            name: Lookareas,
            component: Lookareas,
        },
        {
            path: '/chooseareas',
            name: Chooseareas,
            component: Chooseareas,
        },
        {
            path: '/circleinfo',
            name: "CircleInfo",
            component: CircleInfo,
        },
        {
            path: '/joincircle',
            name: "JoinCircle",
            component: JoinCircle,
        },
        //照片详情页
        {
          path: '/photopages',
          name: "PhotoPages",
          component: PhotoPages,
        },
        // 我的收藏页面
        {
            path: '/Collection',
            name:'Collection',
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
            name:'Setting',
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
        },
        //文件
        {
          path: '/files',
          name:'Files',
          component: Files
        }
    ]
})
