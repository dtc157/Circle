<template>
    <div id="circleinfo">
      <header>
        <i class="iconfont icon-zuo" @click="back()"></i>
        <div class="header_right">
        </div>
      </header>
      <div class="circle_img">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566229549207&di=521990d0053a919c638f80b335f110c6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F19%2F20170719211350_4PnBt.jpeg">
      </div>
      <div class="wrap_content">
        <div class="circle_name">
           <span>雷圈官方</span>
          <div class="signin " >
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
        </div>
        <div class="circle_set">
          <span>设置</span>
          <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
        </div>
        <div class="circle_people">
          <span>成员</span>
          <div>
            <span class="s">1125人</span>
            <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
          </div>
        </div>
        <div class="circle_card">
          <span >我的名片</span>
          <div>
            <span class="s">西西弗</span>
            <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
          </div>
        </div>
        <div class="circle_topic">
          <span >我的话题</span>
          <div>
            <span class="s">0</span>
            <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
          </div>
        </div>
        <div class="circle_new_topic">
          <span >新话题通知</span>
          <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      methods:{
        back(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #circleinfo
    background-color #fff
    header
      height 90px
      box-sizing border-box
      width 100%
      top 0
      left 0
      background-color orangered
      line-height 30px
      padding  10px
      display flex
      color #fff
      justify-content space-between
      .header_right
        width 100px
        display flex
        justify-content space-between
        i
          font-size 18px
    .circle_img
      position absolute
      left 30px
      top 60px
      z-index 102
      img
        border #fff solid 3px
        width 50px
        height 50px
        border-radius 50%
    .wrap_content
      background-color #fff
      .circle_name
        padding  40px 40px 20px 20px
        bottom-border-1px(#e4e4e4)
        font-weight 500
        font-size 25px
        .signin
          display inline-block
          float right
          width 70px
          height 25px
          text-align center
          line-height 25px
          font-size 12px
          border-radius 25px
          color #ff4200
          border #ff4200 solid 1px
          i
            font-size 16px
            color #ff4200
      >div
        display flex
        padding 20px
        justify-content space-between
        bottom-border-1px(#e4e4e4)
        .s
          color #999
          font-size 12px
        i
          color #999
          font-weight 600
</style>
