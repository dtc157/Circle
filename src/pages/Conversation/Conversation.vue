<template>
  <!-- 话题页面 -->
  <div id="container">
    <!-- 顶部 -->
    <div id="container_top">
      <div id="back_icon" @click="back()">
        <i class="iconfont icon-zuo"></i>
      </div>
      <div id="top_title">小雷</div>
      <div id="join">进入此乌托邦</div>
    </div>
    <!-- 内容 -->
    <div id="out_container">
      <div class="main_content">
        <!-- 头部 -->
        <div class="head_content">
          <div class="head_container">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">3号测试员工</div>
              <div class="time">8小时前</div>
            </div>
          </div>
          <div class="option">
            <i class="iconfont icon-qitaxuanxiang"></i>
          </div>
        </div>
        <!-- 动态的主内容 -->
        <div class="content">
          <img src="../../assets/photo/test2.jpg" width="95%" />
        </div>
        <div class="readed">已读 1</div>
        <div class="list_icon">
          <div class="list">
            <div>
              <i class="iconfont icon-dianzan2 on"></i>
              <span>1</span>
            </div>
            <div>
              <i class="iconfont icon-huifu"></i>
              <span>5</span>
            </div>
            <div>
              <i id="collect_icon" class="iconfont icon-yixianshi-"></i>
              <span>收藏</span>
            </div>
            <div>
              <i class="iconfont icon-fenxiang"></i>
              <span>分享</span>
            </div>
          </div>
        </div>
        <!-- 评论 -->
        <div class="comment_container">
          <div class="comment_main">
            <div class="comment_head">
              <div class="head_container">
                <div class="head_picture"></div>
                <div class="head_message">
                  <div class="username">3号测试员工</div>
                  <div class="time">11:53</div>
                </div>
              </div>
              <div class="option">
                <span>删除</span>
                <span>·</span>
                <span>赞</span>
                <i class="iconfont icon-dianzan2 on"></i>
              </div>
            </div>
            <div class="comment_content">评论</div>
          </div>
          <!-- 评论测试2 -->
          <div class="comment_main">
            <div class="comment_head">
              <div class="head_container">
                <div class="head_picture"></div>
                <div class="head_message">
                  <div class="username">3号测试员工</div>
                  <div class="time">11:53</div>
                </div>
              </div>
              <div class="option">
                <span>删除</span>
                <span>·</span>
                <span>赞</span>
                <i class="iconfont icon-dianzan2 on"></i>
              </div>
            </div>
            <div class="comment_content">评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</div>
          </div>
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
  methods:{
    back(){
      this.$router.go(-1)
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
  #container_top
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
      font-size 13px
      margin-right 11px
  #out_container
    position absolute
    top 50px
    width 100%
    left 0
    bottom 59px
    overflow hidden
    .main_content
      position absolute
      top 0
      left 0
      bottom 0
      overflow auto
      width 100%
      overflow -moz-scrollbars-none
      &::-webkit-scrollbar
        display none
      .head_content
        bottom-border-1px(#EDEDED)
        display flex
        display -webkit-flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        -webkit-align-items center
        height 55px
        width 100%
        background-color #ffffff
        .head_container
          display flex
          display -webkit-flex
          justify-content flex-start
          -webkit-justify-content flex-start
          align-items center
          -webkit-align-items center
          .head_picture
            height 32px
            width 32px
            border-radius 50%
            background-color pink
            margin-left 13px
          .head_message
            margin-left 10px
            .username
              font-size 14px
            .time
              margin-top 6px
              font-size 13px
              color #CBCBCB
        .option
          margin-right 13px
          color #D8D5D5
      .content
        margin-top 13px
        margin-left 13px
        background-color #ffffff
      .readed
        margin-top 8px
        margin-left 13px
        color #CBCBCB
        font-size 14px
        background-color #ffffff
      .list_icon
        height 35px
        line-height 35px
        width 75%
        margin-left 13px
        background-color #ffffff
        .list
          display flex
          display -webkit-flex
          justify-content space-between
          -webkit-justify-content space-between
          align-items center
          -webkit-align-items center
          font-size 14px
          color #B1B0B0
          i
           &.on
            color #32C75E
          #collect_icon
            font-size 18px
      .comment_container
        top-border-1px(#EDEDED)
        width 100%
        background-color #FBFBFB
        .comment_main
          bottom-border-1px(#EDEDED)
          width 90%
          margin-left 13px
          .comment_head
            display flex
            display -webkit-flex
            justify-content space-between
            -webkit-justify-content space-between
            align-items center
            -webkit-align-items center
            padding-top 10px
            height 38px
            width 100%
            .head_container
              display flex
              display -webkit-flex
              justify-content flex-start
              -webkit-justify-content flex-start
              align-items center
              -webkit-align-items center
              .head_picture
                height 32px
                width 32px
                border-radius 50%
                background-color pink
              .head_message
                margin-left 10px
                .username
                  font-size 13px
                .time
                  margin-top 6px
                  font-size 10px
                  color #CBCBCB
            .option
              margin-right 13px
              margin-bottom 18px
              color #D8D5D5
              font-size 12px
              i
               &.on
                color #32C75E
          .comment_content
            line-height 16px
            font-size 13px
            margin-left 42px
            padding-bottom 8px
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
