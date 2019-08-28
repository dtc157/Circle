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
        <img v-preview="'http://106.13.193.45:8080/static/'+item.filerData.filerName"
             :src="'http://106.13.193.45:8080/static/'+item.filerData.filerName"
             v-for="(item,index) in lists" :key="index">
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
        imgName:"",
        formdata:""
      }
    },
    created(){
      this.queryFile()
    },
    watch:{
      lists(){
        this.$nextTick(()=>{
          this.queryFile()
        })
      }
    },

    methods:{
      //返回文件
      Read(file){
        if(file.file.name.endsWith(".jpg")){
          this.formdata = new FormData()
          this.formdata.append('file', file.file)
          this.uploadFile()
        }else{
          this.istrue=false
          this.$toast("请上传jpg格式")
        }

      },
      //上传文件返回参数
      uploadFile() {
        //添加请求头
        let config = {headers: {  'Content-Type': 'multipart/form-data'}}
        const url = "/api/filer/upfiler";
        this.$http.filePost(url,this.formdata,config).then(res => {
          if (res.status == 200) {
            this.imgName=res.data
            this.sendFile();
            this.$toast("上传成功")
            this.queryFile()
          } else {
            this.$toast(res.msg)
          }
        });
      },
      //将返回参数插入到数据库
      sendFile() {
        let self = this
        //创建圈子
        const a = JSON.parse(Cookies.get("username")).userId;
        let params = {
          clusterId: this.$route.query.clusterId,
          columnId:0,
          userId: a,
          filerName:self.imgName
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
      //查询所有图片
      queryFile(){
        //获取本用户信息
        this.user = JSON.parse(Cookies.get("username"));

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
