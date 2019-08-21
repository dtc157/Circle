<template>
  <div id="chooseareas">
    <header class="header1">
      <i class="iconfont icon-zuo" @click="back()"></i>
      <div class="header_title">
        <p>选择分区<br><span>6个分区</span></p>
      </div>
    </header>
    <div class="area_wrap">
      <div class="area_item">
        <div class="area_left">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566314606385&di=0c2ce2ae2661cbbfecfdb75b4628d8da&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2Fbizi%2Fdesktop%2F000055597%2F1211%2F3_750450.jpg">
        </div>
        <div class="area_right">
          <span>社长报道</span>
          <p>社长可以在这里介绍你的社区</p>
        </div>
      </div>
      <div class="area_item">
        <div class="area_left">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566314606385&di=0c2ce2ae2661cbbfecfdb75b4628d8da&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2Fbizi%2Fdesktop%2F000055597%2F1211%2F3_750450.jpg">
        </div>
        <div class="area_right">
          <span>社长报道</span>
          <p>社长可以在这里介绍你的社区</p>
        </div>
      </div>
      <div class="area_item">
        <div class="area_left">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566314606385&di=0c2ce2ae2661cbbfecfdb75b4628d8da&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2Fbizi%2Fdesktop%2F000055597%2F1211%2F3_750450.jpg">
        </div>
        <div class="area_right">
          <span>社长报道</span>
          <p>社长可以在这里介绍你的社区</p>
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
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #chooseareas
    .header1
      position fixed
      display flex
      color #fff
      justify-content center
      background-color orangered
      box-sizing border-box
      padding 10px
      z-index 100
      left 0
      top 0
      width 100%
      height 50px
      i
        position absolute
        left 10px
        margin-top 8px
      .send
        margin-top 8px
      bottom-border-1px(#e5e5e5)
      .header_title
        text-align center
        display flex
        line-height 18px
        font-size 15px
        span
          margin-left 10px
          color #7d7d7d
          font-size 12px
    .area_wrap
      padding  0 10px 10px 10px
      background-color #fff
      .area_item
        padding-bottom 10px
        padding-top 10px
        display flex
        bottom-border-1px(#e5e5e5)
        .area_left
          img
            width 50px
            height 50px
            border-radius 5px
        .area_right
          padding 5px 0 5px 0
          margin-left 10px
          line-height 20px
          p
            font-size 12px
            color #808080
</style>
