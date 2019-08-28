<template>
    <div class="file">
      <div class="file_header">
         <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing" @click="back()"></i>
         <p>文件</p>
       </div>
      <div class="btn_wrap">
        <div class="btn">
            <van-uploader accept="*" :after-read="Read" >
              上传文件
            </van-uploader>
            <!--<button @click="afterRead">上传</button>-->
        </div>
      </div>
      <div class="file_wrap">
        <div class="file" v-for="(item,index) in lists" :key="index">
          <div class="file_info">
            <img v-lazy="'http://106.13.193.45:8080/static/'+item.icon">
            <div class="file_right">
              <p class="file_title">{{item.filerData.filerName}}</p>
              <p class="file_msg">{{item.filerData.filerCreateTime}}    来自：{{item.filerData.user.userRealname  }}</p>
            </div>
          </div>
          <a ></a>
          <a class="file_download" :href="'http://106.13.193.45:8080/static/'+item.filerData.filerName">
            <i class="iconfont icon-xiazai"></i>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
      import Cookies from "../../api/localStorage";
export default {
  data(){
    return{
      lists:"",
      postData:[],
      fileName:"",
      formdata:"",
      istrue:""
    }
  },
  watch:{
    lists(){
      this.$nextTick(()=>{
        this.queryFile()
      })
    }
  },
  created(){
    this.queryFile()
  },
  methods:{
    //返回文件
    Read(file){
      this.formdata = new FormData()
      if(file.file.name.endsWith(".doc")
        ||file.file.name.endsWith(".docx")
        ||file.file.name.endsWith(".pdf")
        ||file.file.name.endsWith(".word")
        ||file.file.name.endsWith(".ppt")
        ||file.file.name.endsWith(".xlsx")){
        this.istrue=true
        this.formdata.append('file', file.file)
      }else {
        this.istrue=false
        this.$toast("文件类型不匹配")
      }
      this.uploadFile()
    },
    //上传文件返回参数
    uploadFile() {
      //添加请求头
     if(this.istrue) {
        let config = {headers: {'Content-Type': 'multipart/form-data'}}
        const url = "/api/filer/upfiler";
        this.$http.filePost(url, this.formdata, config).then(res => {
          if (res.status == 200) {
            this.fileName = res.data
            this.sendFile();
            this.$toast("上传成功")
            this.queryFile()
            console.log(res)
          } else {
            this.$toast(res.msg)
          }
        });
     }
    },
    //将返回参数插入到数据库
    sendFile() {
      let self = this
      //创建圈子
      const a = JSON.parse(Cookies.get("username")).userId;
      let params = {
        clusterId: this.$route.query.clusterId,
        columnId:1,
        userId: a,
        filerName:self.fileName
      };
      const url = "/api/filer/add";
      self.$http.fetchGet(url, {params}).then(res => {
        if (res.status == 200) {
          self.$toast("上传成功");
        } else {
          self.$toast(res.msg);
        }
      });
    },
    //查询所有文件
    queryFile(){
      //获取本用户信息
      this.user = JSON.parse(Cookies.get("username"));
      let self = this;
      const params = {
        clusterId: this.$route.query.clusterId,
        columnId:'1'};
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
        position relative
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
