<template>
  <div id="sendcontent">
    <header class="sendcontent_header">
      <i class="iconfont icon-zuo" @click="back()"></i>
      <div class="header_title">
        <p>发动态</p>
      </div>
    </header>
    <textarea placeholder="有什么新消息分享给大家..." v-model="content">
      </textarea>
    <div class="left">
      <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
    </div>
    <button @click="sendTopic">确认发布</button>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
  export default {
    data(){
      return{
        content:"",
        fileList: [],
        formdata:"",
        imgName1:""
      }
    },
    methods: {
      //上传图片的回调放入format中
      afterRead(file) {
        this.formdata = new FormData()
        this.formdata.append('file', file.file)
        this.sedImg1()
      },
      //上传图片
      sedImg1() {
        //添加请求头
        let config = {headers: {'Content-Type': 'multipart/form-data'}}
        const url = "/api/filer/upfiler";
        this.$http.filePost(url, this.formdata, config).then(res => {
          if (res.status == 200) {
            this.imgName1 = res.data
            console.log(this.imgName1)
            this.$toast("上传成功")
          } else {
            this.$toast(res.msg)
          }
        }).catch(rej => {
          this.$toast(rej)
        });
      },
      //发布动态话题
      sendTopic() {
        let self = this
        const userId = JSON.parse(Cookies.get('username')).userId
        const clusterId = this.$route.query.clusterId
        const params = {
          userId: userId,
          clusterId: clusterId,
          content: self.content,
          photo: self.imgName1
        }
        console.log(params)
        const url = "/api/topic/add";
        this.$http.fetchGet(url, {params}).then(res => {
          if (res.status == 200) {
            this.$toast("发布成功")
            this.$router.go(-1)
          } else {
            this.$toast(res.msg)
          }
        })
      },
      //返回上一界面
      back() {
        this.$router.go(-1)
      },
      Jumpchooseareas() {
        this.$router.push("/chooseareas")
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #sendcontent
    height 100%
    background-color #fff
    text-align center
    .sendcontent_header
      position fixed
      display flex
      color:#fff
      background-color red
      justify-content space-between
      box-sizing border-box
      padding 10px
      z-index 100
      left 0
      top 0
      width 100%
      height 50px
      i
        margin-top 8px
      .send
        margin-top 8px
        font-size 14px
        margin-right 10px
      bottom-border-1px(#e5e5e5)
      .header_title
        position absolute
        top 50%
        left 50%
        transform translateX(-50%) translateY(-50%)
        display flex
        line-height 18px
        align-items center
        flex-direction column
        font-size 18px
        span,p
          text-align center
          span
            color #fff
            font-size 14px
    .choose_area
      display flex
      padding 10px
      line-height 30px
      height 30px
      font-size 14px
      justify-content space-between
      bottom-border-1px(#e5e5e5)
      i
        color #999
        font-size 20px
    textarea
      width 90%
      min-height 180px
      box-sizing border-box
      padding 20px
      border none
    .left
      float left
      margin-left 40px
    button
      background-color red
      margin-top 30px
      border none
      height 40px
      width 80%
      color #fff
      border-radius 10px
</style>
