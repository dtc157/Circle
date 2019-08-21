<template>
  <div class="profile">
    <router-link to="/userinfo" class="profile-link">
      <div class="profile-images">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566366732063&di=9a9b20ec73aa3b1f48ad268ad4c3d514&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4c7811030d895c5d40b799d4db5b1e13077370e58bff-9hnxpe_fw658" class="profile_image">
      </div>
      <div class="user">
        <div class="user-info">
          <p class="user-info-top">辣辣</p>
          <p class="user-info-top2">账号信息</p>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </router-link>
    <a class="link-wallet">
      <div class="wallet-box">
        <div class="wallet">
          <i class="iconfont icon-qianbao-"></i>
          <span class="my-wallet">我的钱包</span>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </a>
    <a class="link-topic">
      <div class="topic-box">
        <div class="topic">
          <i class="iconfont icon-huati"></i>
          <span class="my-topic">我的话题</span>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </a>
    <a class="link-colection">
      <div class="colection-box">
        <div class="colection">
          <i class="iconfont icon-yixianshi-"></i>
          <span class="my-colection">我的收藏</span>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </a>
    <a class="link-setting">
      <div class="setting-box">
        <div class="setting">
          <i class="iconfont icon-tuisong"></i>
          <span class="my-setting">推送设置</span>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </a>
    <a class="link-advice">
      <div class="advice-box">
        <div class="advice">
          <i class="iconfont icon-xiaoxi2"></i>
          <span class="my-advice">给雷圈提意见</span>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </a>
    <a class="link-recommend">
      <div class="recommend-box">
        <div class="recommend">
          <i class="iconfont icon-guanzhu"></i>
          <span class="my-recommend">把雷圈推荐给朋友</span>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </a>
    <a class="link-follow">
      <div class="follow-box">
        <div class="follow">
          <i class="iconfont icon-wechat"></i>
          <span class="my-follow">关注官方公众号</span>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </a>
    <a class="link-update">
      <div class="update-box">
        <div class="update">
          <i class="iconfont icon-gengxin"></i>
          <span class="my-update">检查更新</span>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </a>
    <span class="profile-version">v1.1.0</span>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  .profile
    margin-bottom 50px
    width 100%
    background white
    margin-top 30px
    .arrow
      margin-right 5%
      .iconfont
        font-size 25px
    span
      font-size 23px
      color black
      margin-left 3%
    .profile-link
      margin-top 20px
      .profile-images
        .profile_image
          width 60px
          height 60px
          margin 8%
      .user
        bottom-border-1px(#e4e4e4)
        display flex
        justify-content space-between
        align-items center
        .user-info
          margin-left 8%
          .user-info-top
            padding-bottom 8px
            font-weight bold
            font-size 30px
            color black
          .user-info-top2
            padding-top 10px
            font-size 15px
            color gainsboro
            padding-bottom 10px
    .link-wallet
      .wallet-box
        display flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        height 70px
        width 100%
        .wallet
          width 70%
        .icon-qianbao-
          font-weight bold
          font-size 28px
          color red
          margin-left 6%
    .link-topic
      .topic-box
        display flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        height 70px
        width 100%
        .topic
          width 70%
          .icon-huati
            font-weight bold
            font-size 28px
            color red
            margin-left 6%

    .link-colection
      .colection-box
        bottom-border-1px(#e4e4e4)
        display flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        height 70px
        width 100%
        .colection
          width 70%
          .icon-yixianshi-
            font-weight bold
            font-size 28px
            color red
            margin-left 6%

    .link-setting
      .setting-box
        bottom-border-1px(#e4e4e4)
        display flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        height 70px
        width 100%
        .setting
          width 70%
          .icon-tuisong
            font-weight bold
            font-size 28px
            color red
            margin-left 6%

    .link-advice
      .advice-box
        display flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        height 70px
        width 100%
        .advice
          width 70%
          .icon-xiaoxi2
            font-weight bold
            font-size 25px
            color red
            margin-left 6%

    .link-recommend
      .recommend-box
        display flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        height 70px
        width 100%
        .recommend
          width 70%
          .icon-guanzhu
            font-weight bold
            font-size 28px
            color red
            margin-left 6%
    .link-follow
      .follow-box
        display flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        height 70px
        width 100%
        .follow
          width 70%
          .icon-wechat
            font-size 28px
            color red
            margin-left 6%
    .link-update
      .update-box
        display flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        height 70px
        width 100%
        .update
          width 70%
          .icon-gengxin
            font-weight bold
            font-size 28px
            color red
            margin-left 6%

    .profile-version
      font-size 10px
      color #7e8c8d
      display flex
      justify-content center
      align-items center
      margin-top 30px
      padding-bottom 20px
</style>
