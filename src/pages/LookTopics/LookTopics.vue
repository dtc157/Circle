<template>
    <div id="looktopics">
      <HeaderTop :title="title" style="background-color: orangered">
        <span class="header_search" slot="left">
          <i class="iconfont icon-zuo" @click="back()"></i>
        </span>
      </HeaderTop>
      <div class="comments" >
        <div class="comments_item" @click="jumpRatingInfo()">
          <div class="item_master">
            <div class="userinfo">
              <img src="https://b-ssl.duitang.com/uploads/item/201807/24/20180724113155_QfPZZ.thumb.700_0.jpeg">
              <div class="username">
                <span>西西弗  <i class="iconfont icon-zhiding2"></i></span>
                <p>昨天 9.50</p>
              </div>
            </div>
            <div class="item_update">
              <i class="iconfont icon-qitaxuanxiang"></i>
            </div>
          </div>
          <div class="item_content">
            <img src="https://b-ssl.duitang.com/uploads/item/201807/24/20180724113155_QfPZZ.thumb.700_0.jpeg">
            <p>小雷家的环境好极了，团队相处非常融洽，不信你来试试，每个人都很努力</p>
          </div>
          <div class="item_operation">
            <div class="operation">
              <i class="iconfont  icon-dianzan on"></i>
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
          <div class="item_rating">
            <p> <span>你</span> 回复 <span>wo</span>:
              sdlkfmsldmflsldfmlsdlkfssfsafdsdfs
            </p>
          </div>
          <div class="item_rating">
            <p> <span>你</span>:
              sdlkfmsldmflsldfmlsdlkfssfsafdsdfs
            </p>
          </div>
        </div>
        <div class="comments_item" @click="jumpRatingInfo()">
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
          <div class="item_content">
            <p>小雷家的环境好极了，团队相处非常融洽，不信你来试试，每个人都很努力</p>
          </div>
          <div class="item_operation">
            <div class="operation">
              <i class="iconfont  icon-dianzan on"></i>
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
          <div class="item_rating">
            <p> <span>你</span> 回复 <span>wo</span>:
              sdlkfmsldmflsldfmlsdlkfssfsafdsdfs
            </p>
          </div>
          <div class="item_rating">
            <p> <span>你</span>:
              sdlkfmsldmflsldfmlsdlkfssfsafdsdfs
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
    data(){
      return{
        title:"置顶"
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
  #looktopics
    .comments
      display flex
      flex-direction column
      .comments_item
        margin 10px;
        background-color #fff
        border-radius 5px
        padding 10px
        display flex
        flex-direction column
        >div
          display flex
        .item_master
          justify-content space-between
          .userinfo
            display flex
            margin-bottom 10px
            i
              color orangered
              font-size 12px
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
        .item_operation
          padding 0 5px
          margin-bottom 10px
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
        .item_rating
          margin-bottom 5px
          span
            color orangered
          p
            overflow hidden
            text-overflow ellipsis
            white-space nowrap

</style>
