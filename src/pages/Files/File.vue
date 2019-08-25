<template>
    <div class="file">
      <div class="file_header">
         <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing" @click="back()"></i>
         <p>文件</p>
       </div>
      <div class="btn">
        <van-uploader accept="text/*">
          上传文件
          <!--<button>上传文件askmfdksamlfmlsdmfldmflsamflsdmflsdkmfks</button>-->
        </van-uploader>
        <button @click="afterRead">上传</button>
      </div>
      <div class="file_wrap">
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
  methods:{
    //上传文件
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      let self = this;
      let formData = new FormData()
      formData.append('file', file.file)
      let config = {
        headers: { //添加请求头
          'Content-Type': 'multipart/form-data'
        }
      }
      const params = {
        file:formData,
        filerColumnId:1,
        filerCreateById: JSON.parse(Cookies.get("username")).userId,
        filerclusterId:this.$route.query.clusterId,
        request:config};
      console.log(params)
      const url = "http://10.96.107.14:8080/api/filer/upfiler";
      this.$http.fetchPost(url, { params }).then(res => {
        if (res.status == 200) {
          console.log(res)
        } else {
          this.$toast(res.msg)
        }
      });
      console.log(file);
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
    .btn
      text-align center
      line-height 40px
      border-radius 10px
      color #fff
      background red
      height 40px
      margin  15px 10px 15px 10px
      bottom-border-1px(#e5e5e5)
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

</style>
