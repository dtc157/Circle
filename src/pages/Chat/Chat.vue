<template>
  <div class="container">
    <div class="conTop">
      <span>聊天</span>
    </div>
    <div class="inform_content">
      <div class="comment_main" @click="jumptoDe">
        <div class="comment_head">
          <div class="head_container">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">小雷</div>
              <div class="time">西西弗：哈哈哈</div>
            </div>
          </div>
          <div class="option">11分钟前</div>
        </div>
      </div>
      <div class="comment_main" @click="jumptoDe">
        <div class="comment_head">
          <div class="head_container">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">小雷</div>
              <div class="time">西西弗：哈哈哈</div>
            </div>
          </div>
          <div class="option">11分钟前</div>
        </div>
      </div>
      <div class="comment_main" @click="jumptoDe">
        <div class="comment_head">
          <div class="head_container">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">小雷</div>
              <div class="time">西西弗：哈哈哈</div>
            </div>
          </div>
          <div class="option">11分钟前</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data(){
      return{

      }
  },
  methods:{
      jumptoDe(){
          this.$router.push('/chatDetail');
      }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/sylus/mixins.styl'
.container
  width 100%
  height 100%
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
      width 100%
      margin-left 5%
      padding-bottom 10px
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
        .option
          margin-right 13px
          margin-bottom 18px
          color #B7B6B6
          font-size 12px
</style>
