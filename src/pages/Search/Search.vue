<template>
    <div id="search">
      <div class="search_wrap">
        <div class="content_search">
          <div class="iconfont icon-sousuo"> </div>
          <input class="search2" placeholder="发现乌托邦"  >
        </div>
        <span @click="back">取消</span>
      </div>
      <div class="content_wrap">
        <p class="recommended">推荐乌托邦</p>
        <ul>
          <li class="content_item" @click="jumpJoinCircle">
            <div class="img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566235049785&di=4ab364f229bd0517ac2e43a4dd10472d&imgtype=0&src=http%3A%2F%2Fthumb.1010pic.com%2Fpic10%2Fallimg%2F201601%2F3951-1601211A012A1.jpg">
            </div>
            <div class="content">
              <p class="title">小雷家大队</p>
              <p class="introduce">免费：吹牛逼.打广告.专业大小锤.三陪服务</p>
              <p class="sort">拆迁大队·成员 N</p>
            </div>
          </li>
          <li class="content_item">
            <div class="img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566235049785&di=4ab364f229bd0517ac2e43a4dd10472d&imgtype=0&src=http%3A%2F%2Fthumb.1010pic.com%2Fpic10%2Fallimg%2F201601%2F3951-1601211A012A1.jpg">
            </div>
            <div class="content">
              <p class="title">小雷家大队</p>
              <span class="introduce">免费：吹牛逼.打广告.专业大小锤.三陪服务</span>
              <span class="sort">拆迁大队·成员 N</span>
            </div>
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
    export default {
      methods:{
        back(){
          this.$router.back(-1)
        },
        jumpJoinCircle(){
          this.$router.push("joincircle")
        }

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #search
    .search_wrap
      display flex
      padding 10px
      background-color #fff
      bottom-border-1px(#e4e4e4)
      span
        margin auto
      .content_search
        display flex
        margin-left 17px;
        background-color #f2f2f2
        width 75%
        box-sizing border-box
        margin-top 5px
        color #7e8c8d
        border-radius 10px
        outline: none;    //消除默认点击蓝色边框效果消除
        .icon-sousuo
          margin-left 10px;
          line-height 35px;
          font-size 20px;
          width 20px;
          height 35px;
        & .search2
          margin-left 5px;
          height 35px;
          width 60%
          border-radius 10px
          background-color #f2f2f2
  .content_wrap
    background-color #fff
    padding 10px 15px 15px 15px
    .recommended
      height 30px
      line-height 30px;
      font-size 14px
    ul
      li
        display flex
        margin-bottom 10px
        .img
          margin-right 10px
          img
            height 80px
            width 80px
            border-radius 10px

        .content
          padding 5px
          line-height 15px
          .title
            margin-bottom 10px
          .introduce,.sort
            width 226px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-size 12px
            color #999
</style>
