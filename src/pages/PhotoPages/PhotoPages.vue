<template>
  <div class="photopages">
    <div class="photopages_header">
      <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing" @click="back()"></i>
      <p>图片库</p>
    </div>
    <!--<div class="btn">-->
      <!--<button><i class="iconfont icon-xiangji"></i>  上传图片</button>-->
    <!--</div>-->
    <div class="btn_wrap">
      <div class="btn">
        <van-uploader  :after-read="Read" >
          <i class="iconfont icon-xiangji"></i>  上传图片
        </van-uploader>
      </div>
    </div>
    <div class="photo_wrap">
      <div class="img">
        <img v-preview="'http://10.96.107.14:8080/static/'+item.filerName"
             :src="'http://10.96.107.14:8080/static/'+item.filerName"
             v-for="(item,index) in lists" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    data(){
      return{
        lists:""
      }
    },
    created(){
      this.queryFile()
    },
    methods:{
      //上传文件
      async  Read(file) {
        // this.postData.push(file)
        // 此时可以自行将文件上传至服务器
        console.log(file.file)
        let self = this;
        let formdata = new FormData()
        formdata.append('file', file.file)
        let config = {
          headers: { //添加请求头
            'Content-Type': 'multipart/form-data'
          }
        }
        // console.log(params.content)
        const url = "/api/filer/upfiler";
        this.$http.filePost(url,formdata,config).then(res => {
          if (res.status == 200) {
            console.log(res)
            this.$toast("上传成功")
          } else {
            this.$toast(res.msg)
          }
        });
      },
      //查询所有图片
      queryFile(){
        //获取本用户信息
        this.user = JSON.parse(Cookies.get("username"));
        //console.log(this.user)
        let self = this;
        const params = {
          clusterId: this.$route.query.clusterId,
          columnId:'0'};
        const url = "/api/filer/queryAllFileres";
        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            self.lists = res.data;
          } else {
            this.$toast(res.msg);
          }
        });
      },
      //回到上一页
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  .photopages
    .photopages_header
      display flex
      flex-direction column
      justify-content space-between
      height 130px
      color #fff
      padding 20px
      background-size 100% 100%
      background-image url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566672704855&di=86b89b9c1bdd690bf65e69199f94eae4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201210%2F21%2F20121021201351_hx3R2.thumb.700_0.jpeg")
      p
        font-size 20px
        font-weight 500
      i
        font-size 20px
    .btn_wrap
      bottom-border-1px(#e5e5e5)
      padding 20px 10px 20px 10px
      .btn
        text-align center
        line-height 40px
        border-radius 10px
        color #fff
        background red
        height 40px
        button
          background-color red
          box-sizing border-box
          border none
          height 40px
          width 90%
          color #fff
          border-radius 10px

    .photo_wrap
      padding 0 10px 10px 10px
      .img
        padding 10px
        img
          width 100px
          height 100px
          margin 5px 0 5px 10px
</style>
