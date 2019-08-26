
<template>
    <div class="footer_guide border-1px">
            <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
            <span class="item_icon">
                <i class="iconfont icon-quanzi"></i>
            </span>
            <span>圈子</span>
            </span>
            <!--<a href="javascript:;" class="guide_item" :class="{on: '/chat'===$route.path}"  @click="goTo('/chat')">-->
            <!--<span class="item_icon">-->
                <!--<i class="iconfont icon-liaotian1"></i>-->
            <!--</span>-->
            <!--<span>聊天</span>-->
            <!--</a>-->
            <a href="javascript:;" class="guide_item" :class="{on: '/inform'===$route.path}"  @click="goTo('/inform')">
            <span class="item_icon">
                <i class="iconfont icon-liaotian1"></i>
            </span>
            <span>消息</span>
            </a>
            <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}"  @click="goTo('/profile')">
            <span class="item_icon">
                <i class="iconfont icon-wode"></i>
            </span>
            <span>我的</span>
            </a>
    </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/sylus/mixins.styl"
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
          color orangered
        span
          font-size 12px
          margin-top 2px
          margin-bottom 2px
          .iconfont
            font-size 22px
</style>
