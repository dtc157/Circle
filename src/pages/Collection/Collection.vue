<template>
  <div id="collection">
    <!-- 顶部 -->
    <div id="collection_top">
      <div id="back_icon" @click="back()">
        <i class="iconfont icon-zuo"></i>
      </div>
      <div id="top_title">我的收藏</div>
      <div>&nbsp;</div>
    </div>
    <!-- 收藏内容 -->
    <div id="out_container">
      <div class="main_container">
        <div class="main_content">
          <div class="head_content">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">3号测试员工</div>
              <div class="time">8小时前</div>
            </div>
          </div>
          <div class="content">真好</div>
          <div class="list_icon">
            <div class="list">
              <div>
                <i class="iconfont icon-dianzan2"></i>
                <span>1</span>
              </div>
              <div>
                <i class="iconfont icon-huifu"></i>
                <span>5</span>
              </div>
              <div>
                <i class="iconfont icon-fenxiang"></i>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="foot_content">
            <div class="foot_name">小雷</div>
            <div class="foot_icon">
              <i class="iconfont icon-range-left"></i>
            </div>
          </div>
        </div>
        <!-- 测试2 -->
        <div class="main_content">
          <div class="head_content">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">3号测试员工</div>
              <div class="time">8小时前</div>
            </div>
          </div>
          <div class="content">真好</div>
          <div class="list_icon">
            <div class="list">
              <div>
                <i class="iconfont icon-dianzan2"></i>
                <span>1</span>
              </div>
              <div>
                <i class="iconfont icon-huifu"></i>
                <span>5</span>
              </div>
              <div>
                <i class="iconfont icon-fenxiang"></i>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="foot_content">
            <div class="foot_name">小雷</div>
            <div class="foot_icon">
              <i class="iconfont icon-range-left"></i>
            </div>
          </div>
        </div>
        <!-- 测试3 -->
        <div class="main_content">
          <div class="head_content">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">3号测试员工</div>
              <div class="time">8小时前</div>
            </div>
          </div>
          <div class="content">真好</div>
          <div class="list_icon">
            <div class="list">
              <div>
                <i class="iconfont icon-dianzan2"></i>
                <span>1</span>
              </div>
              <div>
                <i class="iconfont icon-huifu"></i>
                <span>5</span>
              </div>
              <div>
                <i class="iconfont icon-fenxiang"></i>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="hr"></div>
          <div class="foot_content">
            <div class="foot_name">小雷</div>
            <div class="foot_icon">
              <i class="iconfont icon-range-left"></i>
            </div>
          </div>
        </div>
        <!-- 测试4 -->
        <div class="main_content">
          <div class="head_content">
            <div class="head_picture"></div>
            <div class="head_message">
              <div class="username">3号测试员工</div>
              <div class="time">8小时前</div>
            </div>
          </div>
          <div class="content">真好</div>
          <div class="list_icon">
            <div class="list">
              <div>
                <i class="iconfont icon-dianzan2"></i>
                <span>1</span>
              </div>
              <div>
                <i class="iconfont icon-huifu"></i>
                <span>5</span>
              </div>
              <div>
                <i class="iconfont icon-fenxiang"></i>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="hr"></div>
          <div class="foot_content">
            <div class="foot_name">小雷</div>
            <div class="foot_icon">
              <i class="iconfont icon-range-left"></i>
            </div>
          </div>
        </div>
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
#collection
  background-color #F4F4F4
  position relative
  width 100%
  height 100%
  #collection_top
    position absolute
    color white
    top 0
    display flex
    display -webkit-flex
    justify-content space-between
    -webkit-justify-content space-between
    align-items center
    -webkit-align-items center
    height 50px
    width 100%
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
      margin-right 20px
  #out_container
    position absolute
    top 50px
    width 100%
    left 0
    bottom 0
    overflow hidden
    .main_container
      position absolute
      overflow auto
      width 100%
      top 0
      left 0
      bottom 0
      &::-webkit-scrollbar
        display none
      .main_content
        margin 8px auto 7px
        width 95%
        border-radius 8px
        background-color #ffffff
        .head_content
          display flex
          display -webkit-flex
          justify-content flex-start
          -webkit-justify-content flex-start
          align-items center
          -webkit-align-items center
          height 60px
          width 100%
          .head_picture
            height 35px
            width 35px
            border-radius 50%
            background-color pink
            margin-left 13px
          .head_message
            margin-left 10px
            .username
              font-size 14px
            .time
              margin-top 7px
              font-size 13px
              color #CBCBCB
        .content
          margin-left 13px
          padding-bottom 5px
        .list_icon
          height 35px
          line-height 35px
          width 65%
          margin-left 13px
          .list
            display flex
            display -webkit-flex
            justify-content space-between
            -webkit-justify-content space-between
            align-items center
            -webkit-align-items center
            color #B1B0B0
            font-size 14px
        .foot_content
          top-border-1px(#EDEDED)
          display flex
          display -webkit-flex
          justify-content space-between
          -webkit-justify-content space-between
          align-items center
          -webkit-align-items center
          height 35px
          width 100%
          .foot_name
            margin-left 13px
          .foot_icon
            margin-right 13px
</style>
