<template>
    <div class="file">
      <div class="file_header">
         <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing" @click="back()"></i>
         <p>文件</p>
       </div>
      <div class="btn_wrap">
        <div class="btn">
            <van-uploader :accept="'image/*'" :after-read="onRead" v-show="postData.length<=2">
              上传文件
              <!--<button>上传文件askmfdksamlfmlsdmfldmflsamflsdmflsdkmfks</button>-->
            </van-uploader>
            <!--<button @click="afterRead">上传</button>-->
        </div>

      </div>
      <div class="file_wrap">
        <div class="file" v-for="(item,index) in lists" :key="index">
          <div class="file_info">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1725905429,1328505641&fm=26&gp=0.jpg">
            <div class="file_right">
              <p class="file_title">{{item.filerName}}</p>
              <p class="file_msg">{{item.filerCreateTime}}     来自：小心心</p>
            </div>
          </div>
          <div class="file_download">
            <i class="iconfont icon-xiazai"></i>
          </div>
        </div>
        <div class="file">
          <div class="file_info">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1725905429,1328505641&fm=26&gp=0.jpg">
            <div class="file_right">
              <p class="file_title">学习.docx</p>
              <p class="file_msg">2019.08.12     来自：小心心</p>
            </div>
          </div>
          <div class="file_download">
            <i class="iconfont icon-xiazai"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Cookies from "js-cookie";
export default {
  data(){
    return{
      lists:"",
      postData:[]
    }
  },
  created(){
    this.queryFile()
  },
  methods:{
    //上传文件
    onRead(file) {
      this.postData.push(file)
      // 此时可以自行将文件上传至服务器
      let self = this;
      //  let formData = new FormData()
      // console.log(file)
      // formData.append('file', file.file)
      const params = {
        file: file.file,

        // filerColumnId:1,
        // filerCreateById: JSON.parse(Cookies.get("username")).userId,
        // filerclusterId:this.$route.query.clusterId,
        // request:config};
      }
      console.log(params)
      const url = "/api/filer/upfiler";
      this.$http.fetchPost(url, { params }).then(res => {
        if (res.status == 200) {
          console.log(res)
          this.$toast("上传成功")
        } else {
          this.$toast(res.msg)
        }
      });
      console.log(file);
    },
    //查询所有文件
    queryFile(){
      //获取本用户信息
      this.user = JSON.parse(Cookies.get("username"));
      //console.log(this.user)
      let self = this;
      const params = {
        clusterId: this.$route.query.clusterId,
        columnId:'1'};
      const url = "/api/filer/queryAllFileres";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.lists = res.data;
        } else {
          alert(res.msg);
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
  .file
    .file_header
      display flex
      flex-direction column
      justify-content space-between
      height 130px
      color #fff
      padding 20px
      background-size 100% 100%
      background-image url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566668486206&di=e3bc29df34d0f3134a653626b4fc9b2f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F53cdd1f7c1f21.jpg")
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

    .file_wrap
      .file
        display flex
        align-items center
        justify-content space-between
        padding 10px
        bottom-border-1px(#e5e5e5)
        .file_info
          display flex
          img
            width 50px
            height 50px
          .file_right
            padding 5px
            display flex
            flex-direction column
            justify-content space-between
            line-height 20px
            .file_title
              font-size 14px
            .file_msg
              color #818181
              font-size 12px
        .file_download
          margin-right 10px
          i
            font-size 20px
            color #888

</style>
