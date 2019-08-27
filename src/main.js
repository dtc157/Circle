/*
    入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './api/ajax';
import axios from 'axios'
import qs from 'qs'
import Vant from 'vant'
import 'vant/lib/index.css'
//import Cookies from '../src/api/localStorage'
import loading from "../src/assets/lazyloading/loading.gif"
import VueLazyload from 'vue-lazyload'
import vuePicturePreview from 'vue-picture-preview'
import './fiters/index'
 //加载过滤器
// import Back from ' ../src/api/Back '

Vue.use(VueLazyload, { //内部自定义了一个指令lazy
  loading
})
Vue.use(vuePicturePreview)
Vue.use(Vant)
Vue.prototype.$http =http
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
new  Vue({
  el:'#app',
  render: h=>h(App),
  router,//使用vue-router
})
