<template>
    <div id="sendcontent">
      <header class="header">
        <i class="iconfont icon-zuo" @click="back()"></i>
        <div class="header_title">
          <p>编辑内容<br><span>小华</span></p>
        </div>
        <span class="send" @click="sendTopic()">发布</span>
      </header>
      <div class="choose_area" @click="Jumpchooseareas()">
        <div class="area_name">
          <i class="iconfont icon-shouye-fenlei"></i>
          <span>选择分区</span>
        </div>
        <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>

      </div>
      <textarea placeholder="有什么新消息分享给大家..." v-model="content">
      </textarea>
      <footer>
        <div class="footer_item">
          <i class="iconfont icon-tupian"></i>
          <span>图片</span>
        </div>
        <i class="iconfont icon-wenjian"></i>
        <i class="iconfont icon-lianjie"></i>
        <i class="iconfont icon-xian-buguize-tiji"></i>
      </footer>
      <div class="footer_guide border-1px">
            <span class="guide_item">
            <span class="item_icon">
                <i class="iconfont icon-tupian"></i>
            </span>
            <span>图片</span>
            </span>
        <a href="javascript:;" class="guide_item" >
            <span class="item_icon">
                <i class="iconfont icon-wenjian1"></i>
            </span>
          <span>文件</span>
        </a>
        <a href="javascript:;" class="guide_item" >
            <span class="item_icon">
                <i class="iconfont icon-lianjie_"></i>
            </span>
          <span>链接</span>
        </a>
        <a href="javascript:;" class="guide_item" >
            <span class="item_icon">
                <i class="iconfont icon-tiji"></i>
            </span>
          <span>提及</span>
        </a>
      </div>
    </div>
</template>

<script>
  import Cookies from 'js-cookie'
    export default {
      data(){
        return{
          content:""
        }
      },
      methods:{
        //返回上一界面
        back(){
          this.$router.go(-1)
        },
        //发布动态话题
        sendTopic(){
          let self=this
          const userId=JSON.parse(Cookies.get('username')).userId
          const clusterId= this.$route.query.clusterId
          const params={
            userId:userId,
            clusterId:clusterId,
            content:self.content,
          }
          const url = "http://10.96.107.14:8080/api/topic/add";
          this.$http.fetchGet(url,{params}).then(res => {
            if(res.status==200){
              console.log(res)
              alert("创建成功")
            }else{
              alert(res.msg)
            }
          })
        },
        Jumpchooseareas(){
          this.$router.push("/chooseareas")
        }
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #sendcontent
    background-color #fff
    .header
      position fixed
      display flex
      background-color orangered
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
      bottom-border-1px(#e5e5e5)
      .header_title
        display flex
        line-height 18px
        align-items center
        flex-direction column
        font-size 15px
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
      width 99%
      min-height 500px
      box-sizing border-box
      padding 10px
      border none
    .footer_guide  //footer
      top-border-1px(#e4e4e4)
      position fixed
      z-index 100
      left 0
      right 0
      bottom 0
      background-color #fff
      width 100%
      height 50px
      display flex
      .guide_item
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        margin 5px
        color #999999
        &.on
          color #02a774
        span
          font-size 12px
          margin-top 2px
          margin-bottom 2px
          .iconfont
            font-size 22px
</style>
