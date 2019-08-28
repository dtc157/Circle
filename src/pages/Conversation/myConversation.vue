<template>
  <div id="container">
    <!-- 顶部 -->
    <div id="Collection_top">
      <div id="back_icon" @click="back()">
        <i class="iconfont icon-zuo"></i>
      </div>
      <div id="top_title">我的话题</div>
      <div>&nbsp;</div>
    </div>
    <!-- 收藏内容 -->
    <div id="out_container">
      <div class="main_container">
        <div
          class="comments_item"
          @click="jumpRatingInfo(topic.topicData.topicId)"
          v-for="(topic,index) in topics"
          :key="index"
        >
          <div class="item_master">
            <div class="userinfo">
              <img :src="'http://106.13.193.45:8080/static/'+topic.topicData.user.userPhoto" />
              <div class="username">
                <span>{{topic.topicData.user.userRealname}}</span>
                <p>{{topic.topicData.topicCreateTime}}</p>
              </div>
            </div>
            <div class="item_update">
              <i class="iconfont icon-qitaxuanxiang"></i>
            </div>
          </div>
          <div class="item_content">
            <p>{{topic.topicData.topicContent}}</p>
            <img
              :src="'http://106.13.193.45:8080/static/'+topic.topicData.topicPhoto"
              v-if="topic.topicData.topicPhoto"
            />
          </div>
          <div class="item_operation">
            <div class="operation">
              <i class="iconfont icon-dianzan" v-if="topic.likeFlag==0"></i>
              <i class="iconfont icon-dianzan" style="color:orange" v-if="topic.likeFlag==1"></i>
              <span>{{topic.topicData.topicLike}}</span>
            </div>
            <div class="operation">
              <i class="iconfont icon-xiaoxi"></i>
              <span>{{topic.topicData.comments.length}}</span>
            </div>
            <div class="operation">
              <i id="col" class="iconfont icon-yixianshi-"></i>
              <span>收藏</span>
            </div>
            <div class="operation">
              <i class="iconfont icon-fenxiang"></i>
              <span>分享</span>
            </div>
          </div>
          <div
            class="item_rating"
            v-for="(commentdeatail,index2) in topic.topicData.comments"
            :key="index2"
            v-if="index2<3"
          >
            <p>
              <span>{{commentdeatail.user.userRealname}}:</span>
              <span class="comment_content">{{commentdeatail.commentContent}}</span>
            </p>
          </div>
          <div class="lookall_comment" v-if="topic.topicData.comments.length>3">
            <span>查看更多评价</span>
            <i class="iconfont icon-range-left"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
export default {
  data() {
    return {
      userId: JSON.parse(Cookies.get("username")).userId,
      topics: "",
      dz2: false
    };
  },
  created() {
    this.circletopic();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    //查询圈子动态话题
    circletopic() {
      let self = this
      const url = "/api/topic/viewByUid";
      const params = {
        userId: this.userId
      };
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.topics = res.data;
          // this.$toast("查询我的圈子成功");
        } else {
          //   this.Toast(res.msg);
          // this.$toast("查询我的圈子失败");
        }
      });
    },
    //跳转评论详情
    jumpRatingInfo(topicId) {
      this.$router.push({ name: "RatingInfo", query: { topicId: topicId } });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/sylus/mixins.styl'
#container
  background-color #F4F4F4
  position relative
  width 100%
  height 100%
  #Collection_top
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
      margin-top 10px
      &::-webkit-scrollbar
        display none
      .comments_item
        margin 10px
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
          padding 0 2px
          margin-bottom 10px
          display flex
          display -webkit-flex
          justify-content space-between
          -webkit-justify-content space-between
          align-items center
          -webkit-align-items center
          .operation
            height 20px
            line-height 20px
            #col
              font-size 23px
            span
              font-size 14px
              width 25px
            i
              font-size 20px
              #dianzan1
                color #FF7F27
        .item_rating
          margin-bottom 5px
          span
            color orangered
          p
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .comment_content
            color #000000
</style>
