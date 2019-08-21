<template>
    <div id="ratinginfo">
      <HeaderTop :title="title" style="background-color: orangered">
        <span class="header_search" slot="left">
          <i class="iconfont icon-zuo" @click="back()"></i>
        </span>
      </HeaderTop>
      <div class="item_master">
        <div class="userinfo">
          <img src="https://b-ssl.duitang.com/uploads/item/201807/24/20180724113155_QfPZZ.thumb.700_0.jpeg">
          <div class="username">
            <span>西西弗</span>
            <p>昨天 9.50</p>
          </div>
        </div>
        <div class="item_update">
          <i class="iconfont icon-qitaxuanxiang"></i>
        </div>
      </div>
      <div class="wrap_content">
        <div class="item_content">
          <p>小雷家的环境好极了，团队相处非常融洽，不信你来试试，每个人都很努力</p>
        </div>
        <p class="time">最后修改时间：11.20</p>
        <div class="item_operation">
          <div class="operation">
            <i class="iconfont  icon-dianzan "></i>
            <span>6</span>
          </div>
          <div class="operation">
            <i class="iconfont icon-xiaoxi"></i>
            <span>21</span>
          </div>
          <div class="operation">
            <i class="iconfont icon-yixianshi-"></i>
            <span>收藏</span>
          </div>
          <div class="operation">
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
        </div>
      </div>
      <div class="good_people">
        <i class="iconfont icon-xin"></i>
        <div class="header_img_component">
            <div class="header_img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566895070&di=382d2b3b3d59b7ae956f148864207da2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20130507%2F8952533_183922555000_2.jpg">
            </div>
            <div class="header_img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566895070&di=382d2b3b3d59b7ae956f148864207da2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20130507%2F8952533_183922555000_2.jpg">
            </div>
            <span>等1人觉得很赞</span>
        </div>
      </div>
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
              <span>·赞</span>
              <i class="iconfont icon-dianzan2"></i>
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
              <span>·赞</span>
              <i class="iconfont icon-dianzan2"></i>
            </div>
          </div>
          <div class="comment_content">评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</div>
        </div>
      </div>
      <footer class="footer">
        <input type="text" placeholder="说点什么">
      </footer>
    </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
    data(){
      return{
        title:"雷圈"
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    },
    components:{
      HeaderTop
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #ratinginfo
    position relative
    .item_master
      background-color #fff
      padding 10px
      display flex
      height 30px
      bottom-border-1px(#e4e4e4)
      justify-content space-between
      .userinfo
        display flex
        margin-bottom 10px
        img
          width 30px
          height 30px
          border-radius 50%
          margin-right 5px
        span
          font-size 14px
        p
          margin-top 5px
          color #999
          font-size 10px

      .item_update
        line-height 30px
    .wrap_content
      padding 10px
      background-color #fff
      .item_content
        display flex
        flex-direction column
        font-size 14px
        margin-bottom 10px
        img
          padding 10px
          background-color #f5f5f5
          max-height 300px
          line-height 50px
          border-radius 10px
        p
          line-height 20px
      .time
        font-size 10px
        margin-bottom 10px
        color #999
      .item_operation
        padding 0 5px
        display flex
        .operation
          display flex
          width 50px
          margin 0 30px 10px  0
          line-height 20px
          span
            font-size 12px
            margin-left 5px
            width 25px
          i
            font-size  20px
            &.on
              color orangered
    .good_people
      padding 10px
      display flex
      line-height 20px
      i
        margin-right 10px
        color orangered
      .header_img_component
        display flex
        line-height 20px
        img
          border #fff solid 1px
          width 20px
          height 20px
          border-radius 50%
        span
          font-size 12px
          margin-left 5px
          color orangered
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
                color #999
          .option
            margin-right 13px
            margin-bottom 18px
            color #999
            font-size 12px
        .comment_content
          line-height 16px
          font-size 13px
          margin-left 42px
          padding-bottom 8px
    .footer
      height 40px
      position fixed
      background-color #e5e5e5
      width 100%
      bottom 0
      left 0
      text-align center
      line-height 40px
      input
        width 90%
        height 30px
        border-radius 10px
        padding 0 0 0 10px

</style>
