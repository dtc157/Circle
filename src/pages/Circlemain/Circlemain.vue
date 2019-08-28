<template>
  <div id="circlemain">
    <button class="btn" @click="jumpSendContent()">
      <i class="iconfont icon-xie"></i>
    </button>
    <header>
      <i class="iconfont icon-zuo" @click="back()"></i>
      <div class="header_right">
        <i class="iconfont icon-sousuo--" @click="jumpTopcSearch"></i>

        <i class="iconfont icon-caidan" @click="jumpCircleInfo" v-if="role=='圈主'"></i>
      </div>
    </header>
    <div class="circle_img">
      <img v-lazy="'http://106.13.193.45:8080/static/'+list.clusterIcon">
    </div>
    <div class="circle_title">
      <span class="title">{{list.clusterName}}</span>
      <br>
      <div class="people">
        <span class="group_people" >{{allpeople}}个成员</span>
        <span @click="jumpMemberMain()">圈成员<i class="iconfont icon-range-left"></i></span>
      </div>

      <div class="user_info">
        <div class="user">
          <img v-lazy="'http://106.13.193.45:8080/static/'+user.userPhoto">
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
      <p class="stick_content" v-for="(note,index) in notes" :key="index" v-if="index<3">
        <i class="iconfont icon-xing"></i>
        &nbsp;&nbsp;{{note.noteName}}:{{note.noteContent}}
      </p>
    </div>
    <div class="all_area">
      <div class="area_title">
        <div class="title_left">
          <span><i class="iconfont icon-weibiaoti1"></i> 文件</span>
        </div>
      </div>
      <div id="area_box">
        <div class="box_item" @click="jumpFiles()">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566668486206&di=e3bc29df34d0f3134a653626b4fc9b2f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F53cdd1f7c1f21.jpg"
          />
          <p>文件</p>
        </div>
        <div class="box_item" @click="jumpPhotoPages()">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566672704855&di=86b89b9c1bdd690bf65e69199f94eae4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201210%2F21%2F20121021201351_hx3R2.thumb.700_0.jpeg"
          />
          <p>照片</p>
        </div>
        <div class="box_item1">
          <p><i class="iconfont icon-svg"></i></p>
        </div>
      </div>
    </div>
    <div id="nav">
      <p class="nav_1"><i class="iconfont icon-fenxiang2"></i> 动态</p>
      <p class="reply">
        <i class="iconfont icon-paopao"></i>最新回复
      </p>
    </div>
    <div>
      <div class="comments">
        <div
          class="comments_item"
          @click="jumpRatingInfo(topic.topicData.topicId)"
          v-for="(topic,index) in topics"
          :key="index"
        >
          <div class="item_master">
            <div class="userinfo">
              <img v-lazy="'http://106.13.193.45:8080/static/'+topic.topicData.user.userPhoto" />
              <div class="username">
                <span>{{topic.topicData.user.userRealname}}</span>
                <p>{{topic.topicData.topicCreateTime}}</p>
              </div>
            </div>
          </div>
          <div class="item_content">
            <p>{{topic.topicData.topicContent}}</p>
            <img v-lazy="'http://106.13.193.45:8080/static/'+topic.topicData.topicPhoto"
                 v-if="topic.topicData.topicPhoto">
          </div>
          <div class="item_operation">
            <div class="operation">
              <i class="iconfont icon-dianzan" v-if="topic.likeFlag==0"></i>
              <i class="iconfont icon-dianzan" style="color:orange"  v-if="topic.likeFlag==1"></i>
              <span>{{topic.topicData.topicLike}}</span>
            </div>
            <div class="operation">
              <i class="iconfont icon-xiaoxi"></i>
              <span>{{topic.topicData.comments.length}}</span>
            </div>

          </div>
          <div class="item_rating" v-for="(commentdeatail,index2) in topic.topicData.comments"
               :key="index2" v-if="index2<3">
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
    <div class="no_comments" style="display: none">
      <div class="prompt">
        <i class="iconfont icon-kong1"></i>
        <p>暂无话题</p>
      </div>
    </div>
    <footer>
      <div @click="jumptoDe">聊天</div>
      <div class="A">丨</div>
      <div @click="findtopic">动态</div>
      <div class="A">丨</div>
      <div @click="exitCircle">退圈 <i class="iconfont icon-tuichu" ></i></div>
    </footer>
  </div>
</template>
<script>
  import Cookies from "../../api/localStorage";
export default {
  name: "circlemain",
  data() {
    return {
      list: "",
      user: "",
      topics: "",
      role: "",
      notes: "",
      allpeople:""
    };
  },
  created() {
    //初始化圈详情
    this.circleDetails(),
      //初始化圈话题
      this.circletopic(),
      //初始化圈角色
      this.judgeRole(),
      //查询公告
      this.queryNotes();
      //查询圈子人数
      this.queryAllpeople()
  },
  methods: {
    findtopic(){
      if(this.topics.length==0){
        this.$toast("暂无动态")
      }
      document.getElementById('area_box').scrollIntoView()
    },
    //根据圈id查询圈子详情
    circleDetails() {
      //获取本用户信息
      this.user = JSON.parse(Cookies.get("username"));
      let self = this;
      const params = { clusterId: this.$route.query.clusterId };
      const url = "/api/cluster/details";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.list = res.data[0];
        } else {
          self.$toast(res.msg);
        }
      });
    },
    //查询圈子动态话题
    circletopic() {
      let self = this;
      const params = {
        clusterId: this.$route.query.clusterId ,
        userId: this.user.userId};
      const url = "/api/topic/view";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.topics = res.data;
        } else {
          //this.$toast(res.msg)
        }
      });
    },
    //查询圈子总人数
    queryAllpeople(){
      let self = this;
      const params = {clusterId: this.$route.query.clusterId};
      const url = "/api/cluster/sum";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.allpeople = res.data;
        } else {
          this.$toast(res.msg)
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
      const url = "/api/cluster/Judg";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.role = res.msg;
        } else {
          this.$toast(res.msg)
        }
      });
    },
    //查询当前圈子的公告
    queryNotes() {
      let self = this;
      const params = { clusterId: this.$route.query.clusterId };
      const url = "/api/note/view";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.notes = res.data;
        } else {
          //this.$toast(res.msg)
        }
      });
    },
    //退出圈子
    exitCircle(){
      if(this.role=="圈主"){
        this.$toast("圈主不可退出")
      }else{
        let self = this;
        this.$dialog.confirm({
          title: '',
          message: '确定退出吗？'
        }).then(() => {
          // 退出
          const params = {
            clusterId: this.$route.query.clusterId,
            userId: this.user.userId
          };
          const url = "/api/cluster/quit";
          this.$http.fetchGet(url, { params }).then(res => {
            if (res.status == 200) {
              self.role = res.msg;
              self.$router.go(-1)
            } else {
              this.$toast(res.msg)
            }
          });
        }).catch(() => {
          // on cancel
          this.$toast("退出取消")
        });
      }

    },
    //回到上一页面
    back() {
      this.$router.go(-1);
    },
    //跳转照片详情页
    jumpPhotoPages(){
      this.$router.push({name:"PhotoPages",query:{clusterId: this.$route.query.clusterId }})
    },
    //跳转文件详情页
    jumpFiles(){
      this.$router.push({name:"Files",query:{clusterId: this.$route.query.clusterId }})
    },
    //跳转成员主页
    jumpMemberMain(){
      this.$router.push({name:"MemberMain",query:{clusterId: this.$route.query.clusterId }})
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
    //跳转圈子信息
    jumpCircleInfo() {
      this.$router.push({name:"CircleInfo",query:{clusterId: this.$route.query.clusterId}});
    },
    //跳转圈子聊天界面
    jumptoDe(){
      this.$router.push({name:'chatDetail',
        query:{
        clusterId:this.$route.query.clusterId,
          clusterName:this.list.clusterName}});
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
      bottom 80px
      right 40px
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
        margin-right 10px
        display flex
        justify-content space-between
        i
          margin-right 20px
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
        font-size 14px
        color #499273
      .people
        font-size 14px
        display flex
        color #999
        padding-bottom 5px
        align-items center
        height 20px
        justify-content space-between
        flex-direction row
        bottom-border-1px(#e5e5e5)
        .group_people
          font-size 12px
          margin-top 5px
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
          margin-left 15px
          font-size 14px
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
      #area_box
        display flex
        justify-content space-between
        flex-wrap wrap
        padding 10px
        .box_item
          width  30%
          position relative
          img
            width 100%
            height 80px
            border-radius 10px
          p
            position absolute
            bottom 10px
            left 50%
            font-size 14px
            font-weight 600
            color #fff
            transform translateX(-50%)
        .box_item1
          background-color #e5e5e5
          width 30%
          height 80px
          text-align center
          line-height 80px
          box-sizing border-box
          border-radius 10px
          i
            font-size 30px
    #nav
      display flex
      padding 0 10px
      line-height 30px
      font-size 16px
      color #7f7f7f
      border-radius 5px
      background-color #fff
      margin 10px 10px 0 10px
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
      margin-bottom 50px
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
          align-items center
          -webkit-align-items center
          .operation
            height 20px
            margin-right 50px
            margin-left 10px
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
      .lookall_comment
        display flex
        margin-top 5px
        justify-content space-between
        color #888
        font-size 12px
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
    footer
      display flex
      height 50px
      font-size 16px
      align-items center
      background-color #fff
      position fixed
      bottom 0
      width 100%
      justify-content space-around
      border-top #dedede solid 1px
      >div
        width 33%
        text-align center
        box-sizing border-box
      .A
        color #9f9f9f

</style>
