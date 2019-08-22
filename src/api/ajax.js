import axios from 'axios';
 import qs from 'qs'
import { MessageBox} from 'mint-ui'

 // 注意点,按照以下写
 var instance = axios.create();
 instance.defaults.timeout = 10000;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

 export default {
      fetchGet(url, params = {}) {
          return new Promise((resolve, reject) => {
                axios.get(url, params).then(res => {
                       if(res.data.code === 302) {
                             MessageBox('提示', '登录失效,请重新登录');
                            // MessageBox.alert('登录失效,请重新登录', '提示').then(action => {
                            //        //router.push("/login");
                            //    });
                         }
                       resolve(res.data);
                  }).catch(error => {
                      reject(error);
                   })
          })
       },
   fetchPost(url, params = {}) {

  // 解决方案二：使用qs模块(axios中自带),使用qs.stringify()序列化params
           return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params)).then(res => {
                       resolve(res.data);
                   }).catch(error => {
                      reject(error);
                   })
             })
       }
 }
