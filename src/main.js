/*
    入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './api/ajax';
import axios from 'axios'
import qs from 'qs'


Vue.prototype.$http =http
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
new  Vue({
  el:'#app',
  render: h=>h(App),
  router,//使用vue-router
})
