<template>
  <div id="container">
    <!-- 顶部 -->
    <div id="top">
      <div id="back_icon" @click="back">
        <i class="iconfont icon-zuo"></i>
      </div>
      <div id="top_title">推送设置</div>
      <div>&nbsp;</div>
    </div>
    <!-- 目前引入了MUI但还没有使用，请注意，如最后不使用，请取消引用并卸载MUI -->
    <!-- 互动通知 -->
    <div class="inform_container" id="inform1">
      <div class="inform_title">互动通知</div>
      <div class="inform_content">
        <div class="content">提及</div>
        <div>&nbsp;</div>
      </div>
      <div class="inform_content">
        <div class="content">回复</div>
        <div>&nbsp;</div>
      </div>
      <div class="inform_content">
        <div class="content">赞</div>
        <div>&nbsp;</div>
      </div>
    </div>
    <!-- 新话题通知 -->
    <div class="inform_container">
      <div class="inform_title">新话题通知</div>
      <div class="inform_content">
        <div class="content">小雷</div>
        <div>&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/sylus/mixins.styl'
#container
  background-color #ffffff
  position relative
  height 100%
  #top
    display flex
    display -webkit-flex
    justify-content space-between
    -webkit-justify-content space-between
    align-items center
    -webkit-align-items center
    height 50px
    width 100%
    background-color #FFFFFF
    margin-bottom 8px
    bottom-border-1px(#EDEDED)
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
  #inform1
    bottom-border-1px(#EDEDED)
  .inform_container
    width 85%
    margin auto
    margin-top 20px
    font-size 14px
    .inform_title
     color #B4AFAF
     font-size 12px
    .inform_title
    .inform_content
      margin-bottom 15px
     
    

</style>