<template>
  <!-- 通知页面 -->
  <div class="container">
    <div class="conTop">
      <span>通知</span>
    </div>
    <div class="inform_content">
      <div class="comment_main">
        <div class="comment_head">
          <div class="head_container">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">3号测试员工回复了你</div>
              <div class="time">来两口</div>
            </div>
          </div>
          <div class="option">&nbsp;</div>
        </div>
        <div class="comment_content">真好</div>
        <div class="comment_content">小雷·08月20日</div>
      </div>
      <div class="comment_main">
        <div class="comment_head">
          <div class="head_container">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">3号测试员工回复了你</div>
              <div class="time">来两口</div>
            </div>
          </div>
          <div class="option">&nbsp;</div>
        </div>
        <div class="comment_content">真好</div>
        <div class="comment_content">小雷·08月20日</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inform"
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/sylus/mixins.styl'
.container
  width 100%
  height 100%
  background-color #fff
  .conTop
    bottom-border-1px(#EDEDED)
    position absolute
    width 100%
    height 50px
    line-height 50px
    top 0
    left 0
    span
      padding-left 15px
      font-size 23px
      font-weight 600
  .inform_content
    position absolute
    top 50px
    width 90%
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
        margin-bottom 5px
        .head_container
          display flex
          display -webkit-flex
          justify-content flex-start
          -webkit-justify-content flex-start
          align-items center
          -webkit-align-items center
          .head_picture
            height 38px
            width 38px
            border-radius 50%
            background-color pink
          .head_message
            margin-left 10px
            .username
              font-size 15px
            .time
              margin-top 6px
              font-size 13px
      .comment_content
        line-height 16px
        font-size 13px
        margin-left 47px
        padding-bottom 5px
        color #989797
</style>
