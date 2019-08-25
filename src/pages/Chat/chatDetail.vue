<template>
  <!-- 话题页面 -->
  <div id="container">
    <!-- 顶部 -->
    <div id="top">
      <div id="back_icon" @click="back()">
        <i class="iconfont icon-zuo"></i>
      </div>
      <div id="top_title">小雷</div>
      <div id="join">
        <i class="iconfont icon-chengyuan"></i>
      </div>
    </div>
    <!-- 内容 -->
    <div id="out_container">
      <div class="chatOther">
        <div class="chatOther_content">
          <div class="chatHeat_picture"></div>
          <div class="chatHeat_name">西西弗</div>
          <div class="chatContent">哦i管理局卡诺i国际上来看耨i剪了个酷哦给家里困难都i格局来看的</div>
        </div>
      </div>
      <div class="chatSelf">
        <div class="chatSelf_content">
          <div class="chatContent">哦i管理局卡诺i国际上来看耨i剪了个酷哦给家里困难都i格局来看的</div>
          <div class="chatHeat_picture"></div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div id="fooder">
      <div id="comment_area">
        <input type="text" placeholder="说点什么" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/sylus/mixins.styl'
#container
  background-color #FBFBFB
  position relative
  height 100%
  #top
    position absolute
    display flex
    display -webkit-flex
    justify-content space-between
    -webkit-justify-content space-between
    align-items center
    -webkit-align-items center
    top 0
    left 0
    height 50px
    width 100%
    color white
    background-color orangered
    #back_icon
      margin-left 13px
      height 50px
      line-height 50px
      float left
    #top_title
      height 50px
      line-height 50px
      font-size 19px
    #join
      width 40px
      height 50px
      line-height 50px
      i
        font-size 20px
  #out_container
    position absolute
    top 50px
    width 100%
    left 0
    bottom 59px
    overflow hidden
    .chatOther
      margin-top 10px
      width 80%
      float left
      padding-left 10px
      .chatHeat_picture
        position absolute
        width 35px
        height 35px
        border-radius 50%
        background-color red
      .chatHeat_name
        display inline-block
        position absolute
        left 50px
        margin-top 5px
        color #7F7F7F
      .chatContent
        position absolute
        left 50px
        width 70%
        margin-top 28px
        background-color #EAEAEA
        border-radius 10px
        padding-left 10px
        padding-top 5px
        padding-bottom 5px
        line-height 23px
    .chatSelf
      margin-top 10px
      width 80%
      float right
      padding-right 10px
      .chatHeat_picture
        position absolute
        width 35px
        height 35px
        border-radius 50%
        right 10px
        margin-top 100px
        background-color red
      .chatContent
        position absolute
        left 50px
        width 70%
        margin-top 100px
        background-color #EAEAEA
        border-radius 10px
        padding-left 10px
        padding-top 5px
        padding-bottom 5px
        line-height 23px
        color white
        background-color #01C48E
  #fooder
    position fixed
    bottom 0
    height 59px
    width 100%
    background-color #ebeaea
    display flex
    display -webkit-flex
    justify-content center
    -webkit-justify-content center
    align-items center
    -webkit-align-items center
    #comment_area
      width 88%
      height 40px
      line-height 40px
      background-color white
      padding-left 15px
      border-radius 8px
</style>
