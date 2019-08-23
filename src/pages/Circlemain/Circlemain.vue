<template>
  <div id="circlemain">
    <button class="btn" @click="jumpSendContent()">
      <i class="iconfont icon-xie"></i>
    </button>
    <header>
      <i class="iconfont icon-zuo" @click="back()"></i>
      <div class="header_right">
        <i class="iconfont icon-sousuo--" @click="jumpTopcSearch"></i>
        <i class="iconfont icon-xiaoxi"></i>
        <i class="iconfont icon-caidan" @click="jumpCircleInfo"></i>
      </div>
    </header>
    <div class="circle_img">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566229549207&di=521990d0053a919c638f80b335f110c6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F19%2F20170719211350_4PnBt.jpeg"
      />
    </div>
    <div class="circle_title">
      <span class="title">{{list.clusterName}}</span>
      <p class="group_people">
        10个成员 邀请
        <i class="iconfont icon-jia"></i>
      </p>
      <div class="user_info">
        <div class="user">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566379173402&di=9eb4b5a0175c1593be5b8fd03ca78edd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F02%2F20160402161853_ZQWhz.thumb.700_0.jpeg"
          />
          <span class="username">{{user.userRealname}}({{role}})</span>
        </div>
        <div class="signin">
          <i class="iconfont icon-xiezi"></i>
          <span>签到</span>
        </div>
        <div class="signin1" style="display: none">
          <i class="iconfont icon-icon-test3"></i>
          <span>签到成功</span>
        </div>
      </div>
    </div>
    <div class="stick_wrap">
      <div class="stick">
        <div class="stick_left">
          <i class="iconfont icon-zhiding1"></i>
          <span>公告</span>
        </div>
        <div class="stick_right" @click="jumpLookTopics">
          <span>查看全部{{notes.length}}</span>
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
      <p class="stick_content" v-for="(note,index) in notes" :key="index">
        <i class="iconfont icon-xing"></i>
        &nbsp;&nbsp;{{note.noteName}}:{{note.noteContent}}
      </p>
    </div>
    <div class="all_area">
      <div class="area_title">
        <div class="title_left">
          <i class="iconfont icon-fenlei1"></i>
          <span>全部分区6</span>
        </div>
        <div class="title_right" @click="jumpLookareas()">
          <span>查看全部</span>
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
      <div class="area_box">
        <div class="box_item">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566279520407&di=6042610925884fbd53d813e9e566d12b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F491e61eff9a351d71d50db5197f5f5f883c9e565.jpg"
          />
          <p>社长报道</p>
        </div>
        <div class="box_item">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566279520407&di=6042610925884fbd53d813e9e566d12b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F491e61eff9a351d71d50db5197f5f5f883c9e565.jpg"
          />
          <p>社长报道</p>
        </div>
        <div class="box_item">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566279520407&di=6042610925884fbd53d813e9e566d12b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F491e61eff9a351d71d50db5197f5f5f883c9e565.jpg"
          />
          <p>社长报道</p>
        </div>
        <div class="box_item">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566279520407&di=6042610925884fbd53d813e9e566d12b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F491e61eff9a351d71d50db5197f5f5f883c9e565.jpg"
          />
          <p>社长报道</p>
        </div>
        <div class="box_item">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566279520407&di=6042610925884fbd53d813e9e566d12b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F491e61eff9a351d71d50db5197f5f5f883c9e565.jpg"
          />
          <p>社长报道</p>
        </div>
        <div class="box_item">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566279520407&di=6042610925884fbd53d813e9e566d12b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F491e61eff9a351d71d50db5197f5f5f883c9e565.jpg"
          />
          <p>社长报道</p>
        </div>
      </div>
    </div>
    <div class="nav">
      <p class="nav_1">动态</p>
      <p class="reply">
        <i class="iconfont icon-paopao"></i>最新回复
      </p>
    </div>
    <div>
      <div class="comments">
        <div
          class="comments_item"
          @click="jumpRatingInfo(topic.topicId)"
          v-for="(topic,index) in topics"
          :key="index"
        >
          <div class="item_master">
            <div class="userinfo">
              <img :src="'http://10.96.107.14:8080/static/'+topic.user.userPhoto" />
              <div class="username">
                <span>{{topic.user.userRealname}}</span>
                <p>{{topic.topicCreateTime}}</p>
              </div>
            </div>
            <div class="item_update">
              <i class="iconfont icon-qitaxuanxiang"></i>
            </div>
          </div>
          <div class="item_content">
            <!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566379001016&di=39b7ed8e1f893c8ef7e9bd0f31ee1f52&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F13%2F20150413H5949_CWaPL.thumb.700_0.jpeg">-->
            <p>{{topic.topicContent}}</p>
          </div>
          <div class="item_operation">
            <div class="operation">
              <i class="iconfont icon-dianzan on"></i>
              <span>6</span>
            </div>
            <div class="operation">
              <i class="iconfont icon-xiaoxi"></i>
              <span>{{topic.comments.length}}</span>
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
          <div class="item_rating" v-for="(commentdeatail,index2) in topic.comments" :key="index2">
            <p>
              <span>{{commentdeatail.user.userRealname}}:</span>
              <span class="comment_content">{{commentdeatail.commentContent}}</span>
            </p>
          </div>
          <!-- <div class="item_rating">
            <p>
              <span>你</span>:
              sdlkfmsldmflsldfmlsdlkfssfsafdsdfs
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="no_comments" style="display: none">
      <div class="prompt">
        <i class="iconfont icon-kong1"></i>
        <p>暂无话题</p>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  name: "circlemain",
  data() {
    return {
      list: "",
      user: "",
      topics: "",
      role: "",
      notes: ""
    };
  },
  created() {
    //初始化圈详情
    this.circleDetails(),
      //初始化圈话题
      this.circletopic(),
      //初始化圈角色
      this.judgeRole(),
      this.queryNotes();
  },
  methods: {
    //根据圈id查询圈子详情
    circleDetails() {
      //获取本用户信息
      this.user = JSON.parse(Cookies.get("username"));
      //console.log(this.user)
      let self = this;
      const params = { clusterId: this.$route.query.clusterId };
      const url = "http://10.96.127.250:8080/api/cluster/details";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.list = res.data[0];
        } else {
          alert(res.msg);
        }
      });
    },
    //查询圈子动态话题
    circletopic() {
      let self = this;
      const params = { clusterId: this.$route.query.clusterId };
      const url = "http://10.96.107.14:8080/api/topic/view";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.topics = res.data;
          console.log(self.topics);
        } else {
          alert(res.msg);
        }
      });
    },
    //判断当前用户进入圈子的角色
    judgeRole() {
      let self = this;
      const params = {
        clusterId: this.$route.query.clusterId,
        userId: this.user.userId
      };
      const url = "http://10.96.127.250:8080//api/cluster/Judg";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.role = res.msg;
          console.log(self.role);
        } else {
          alert(res.msg);
        }
      });
    },
    //查询当前圈子的公告
    queryNotes() {
      let self = this;
      const params = { clusterId: this.$route.query.clusterId };
      const url = "http://10.96.107.14:8080/api/note/view";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.notes = res.data;
          console.log(self.notes);
        } else {
          alert(res.msg);
        }
      });
    },

    //回到上一页面
    back() {
      this.$router.go(-1);
    },
    //跳转评论详情
    jumpRatingInfo(topicId) {
      this.$router.push({ name: "RatingInfo", query: { topicId: topicId } });
    },
    //跳转话题搜索
    jumpTopcSearch() {
      this.$router.push({
        name: "TopicSearch",
        query: { clusterId: this.$route.query.clusterId }
      });
    },
    //跳转内容发布
    jumpSendContent() {
      this.$router.push({
        name: "SendContent",
        query: { clusterId: this.$route.query.clusterId }
      });
    },
    //跳转查看全部置顶
    jumpLookTopics() {
      let b = this;
      this.$router.push({
        name: "LookTopics",
        query: {
          clusterId: this.$route.query.clusterId,
          role: this.role
        }
      });
    },
    //跳转查看分区详情
    jumpLookareas() {
      this.$router.push("/lookareas");
    },
    //跳转圈子信息
    jumpCircleInfo() {
      this.$router.push("/circleinfo");
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/sylus/mixins.styl'
#circlemain
  background-color #f5f5f5
  .btn
    width 40px
    height 40px
    border-radius 50%
    background-color orangered
    bottom 30px
    right 30px
    border none
    position fixed
    z-index 1000
    i
      color #fff
      font-size 20px
  header
    height 200px
    box-sizing border-box
    z-index 0
    position absolute
    width 100%
    top 0
    left 0
    background-color orangered
    line-height 30px
    padding 10px
    display flex
    color #fff
    justify-content space-between
    .header_right
      width 120px !important
      margin-right 10px
      display flex
      justify-content space-between
      i
        font-size 18px
  .circle_img
    position absolute
    left 30px
    top 60px
    z-index 102
    img
      border #fff solid 3px
      width 50px
      height 50px
      border-radius 50%
  .circle_title
    margin 90px 10px 10px 10px
    padding 30px 10px 0 10px
    box-sizing border-box
    height 120px
    position relative
    z-index 101
    background-color #fff
    border-radius 10px
    p, i
      margin-top 10px
      font-size 12px
      color #499273
    .user_info
      display flex
      margin-top 10px
      align-items center
      justify-content space-between
      .user
        display flex
        align-items center
      img
        width 30px
        height 30px
        border-radius 50%
      .username
        margin-top 5px
        margin-left 10px
        font-size 12px
      .signin
        display inline-block
        float right
        width 70px
        height 25px
        text-align center
        line-height 25px
        font-size 12px
        border-radius 25px
        color #ff4200
        border #ff4200 solid 1px
        i
          font-size 16px
          color #ff4200
      .signin1
        display inline-block
        padding 0 10px
        float right
        width 70px
        height 25px
        text-align center
        line-height 25px
        font-size 12px
        border-radius 25px
        color #fc9020
        border #fc9020 solid 1px
        &.on
          color #999
          border-color #999
          i
            color #999
        i
          font-size 16px
          color #fc9020
  .stick_wrap
    background-color #fff
    position relative
    z-index 101
    display flex
    margin 10px
    box-sizing border-box
    padding 10px
    border-radius 5px
    flex-direction column
    .stick
      display flex
      font-size 14px
      justify-content space-between
      .stick_left
        color #fc9020
        i
          font-size 20px
      .stick_right, i
        text-align center
        line-height 10px
        color #999
        font-size 12px
    .stick_content
      display inline-block
      font-size 14px
      padding 5px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      bottom-border-1px(#e4e4e4)
      i
        color #fc9020
  .all_area
    display flex
    background-color #fff
    margin 10px
    border-radius 5px
    flex-direction column
    .area_title
      display flex
      margin 10px 10px 0 10px
      color #7f7f7f
      font-size 14px
      justify-content space-between
    .area_box
      display flex
      justify-content flex-start
      flex-wrap wrap
      padding 10px
      .box_item
        position relative
        margin 5px auto
        img
          width 100px
          height 80px
          border-radius 10px
        p
          position absolute
          bottom 10px
          left 50%
          font-size 12px
          font-weight 600
          color #fff
          transform translateX(-50%)
  .nav
    display flex
    padding 0 10px
    line-height 30px
    font-size 14px
    color #7f7f7f
    border-radius 5px
    background-color #fff
    margin 10px
    height 30px
    justify-content space-between
    p
      i
        font-size 20px
        color red
      &.on
        color black
  .comments
    display flex
    flex-direction column
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
        .comment_content
          color #000000
  .no_comments
    color #f5f5f5
    height 300px
    .prompt
      display flex
      box-sizing border-box
      flex-direction column
      padding-top 50px
      width 100%
      align-items center
      i
        font-size 80px
        color #999
      p
        font-size 20px
        color #999
</style>
