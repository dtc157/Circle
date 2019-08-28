<template>
  <div id="ratinginfo">
    <HeaderTop :title="title" style="background-color: orangered">
      <span class="header_search" slot="left">
        <i class="iconfont icon-zuo" @click="back()"></i>
      </span>
    </HeaderTop>
    <div class="item_master">
      <div class="userinfo">
        <img :src="'http://106.13.193.45:8080/static/'+topic.topicData.user.userPhoto">
        <div class="username">
          <span>{{topic.topicData.user.userRealname}}</span>
          <p>{{topic.topicData.topicCreateTime}}</p>
        </div>
      </div>
      <div class="item_update">
        <i class="iconfont icon-qitaxuanxiang"></i>
      </div>
    </div>
    <div class="wrap_content">
      <div class="item_content">
        <p>{{topic.topicData.topicContent}}</p>
        <img v-lazy="'http://106.13.193.45:8080/static/'+topic.topicData.topicPhoto" v-if="topic.topicData.topicPhoto">
      </div>
      <p class="time">最后修改时间：{{topic.topicData.topicCreateTime}}</p>
      <div class="item_operation">
        <div class="operation">
          <i class="iconfont icon-dianzan" @click="likeit()" v-if="topic.likeFlag==0"></i>
          <i
            class="iconfont icon-dianzan"
            style="color:orange"
            @click="likeit()"
            v-if="topic.likeFlag==1"
          ></i>
          <span>{{topic.topicData.topicLike}}</span>
        </div>
        <div class="operation">
          <i class="iconfont icon-xiaoxi"></i>
          <span>{{topic.topicData.comments.length}}</span>
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
        <!--<div class="header_img" v-for="(item,index) in likepeople" :key="index" v-if="index<=4">-->
          <!--<img :src="'http://106.13.193.45:8080/static/'+item.userPhoto">-->
        <!--</div>-->
        <!--<span>等</span>-->
        <span>{{topic.topicData.topicLike}}</span><span>人觉得很赞</span>
      </div>
    </div>
    <div class="comment_container">
      <div
        class="comment_main"
        v-for="(topicComments,index) in topic.topicData.comments"
        :key="index"
      >
        <div class="comment_head">
          <div class="head_container">
            <div class="head_picture">
              <img :src="'http://106.13.193.45:8080/static/'+topicComments.user.userPhoto">
            </div>
            <div class="head_message">
              <div class="username">{{topicComments.user.userRealname}}</div>
              <div class="time">{{topicComments.commentCreateTime}}</div>
            </div>
          </div>
          <div class="option">
            <span v-if="topicComments.user.userId==user.userId"
                  @click="deleteComment(topicComments.commentId)">删除</span>
            <span>·赞</span>
            <i class="iconfont icon-dianzan2"></i>
          </div>
        </div>
        <div class="comment_content">{{topicComments.commentContent}}</div>
      </div>
    </div>
    <footer class="footer">
      <input type="text" placeholder="说点什么" v-model="comment" @keydown="addcomment($event)" />
    </footer>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import Cookies from "../../api/localStorage";
export default {
  data() {
    return {
      title: "雷圈",
      topic: "",
      comment: "",
      otherlist:"",
      user: JSON.parse(Cookies.get("username")),
      dz: false,
      likeSum: "",
      likepeople:""
    };
  },
  created() {
    this.topicDetail();
    this.queryLike();

  },
  methods: {

    //删除评论
    deleteComment(value){
      let self = this;
        this.$dialog.confirm({
          title: '',
          message: '确定删除吗？'
        }).then(() => {
      const params = {id: value};
      const url = "/api/comment/delete";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.topicDetail()
          self.$toast(res.msg)
        } else {
          self.$toast(res.msg)
        }
      });
        }).catch(() => {
          // on cancel
          this.$toast("退出取消")
        });
    },
    //查询点赞人的头像
    queryLike(){
      let self = this;
      const params = {
        topicId: this.$route.query.topicId,
      };
      const url = "/api/user/selectPointUser";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.likepeople = res.data;
        } else {
          // this.$toast(res.msg)
        }
      });
    },
    //返回上一页面
    back() {
      this.$router.go(-1);
    },
    //查询话题详情
    topicDetail() {
      let self = this;
      const params = {
        topicId: this.$route.query.topicId,
        userId: this.user.userId
      };
      const url = "/api/topic/viewByTid";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.topic = res.data;
        } else {
          this.$toast(res.msg);
        }
      });
    },
    // 点赞
    likeit() {
      this.user = JSON.parse(Cookies.get("username"));
      const params = {
        userId: this.user.userId,
        topicId: this.topic.topicData.topicId
      };
      console.log(params)
      const url = "/api/point/doPoint";
      this.$http.fetchPost(url, params).then(res => {
        if (res.status == 200) {
          // this.dz = true;
          this.topicDetail();
          //this.$toast("点赞成功");
        } else {
          //this.$toast("点赞/取消失败");
        }
      });
    },
    // 添加评论
    addcomment(ev) {
      let self = this;
      if (ev.keyCode == 13) {
        //键盘回车的编码是13
        self.user = JSON.parse(Cookies.get("username"));
        // ?commentUserId=1&commentTopicId=1&commentContent=ok
        const url = "/api/comment/add";
        const params = {
          commentUserId: self.user.userId,
          commentTopicId: self.topic.topicData.topicId,
          commentContent: self.comment
        };
        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            this.$toast("评论成功");
            self.comment = "";
            self.topicDetail();
          } else {
            this.$toast("评论失败");
          }
        });
      }
    }
  },
  components: {
    HeaderTop
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/sylus/mixins.styl'
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
        margin 0 30px 10px 0
        line-height 20px
        span
          font-size 12px
          margin-left 5px
          width 25px
        i
          font-size 20px
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
    margin-bottom 50px
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
            img
              height 32px
              width 32px
              border-radius 50%
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
