<template>
  <div id="joincircle" >
    <button class="btn" @click.stop="JoinCircle">
      <i class="iconfont icon-jiaru"></i>
      申请加入
    </button >
    <header>
      <i class="iconfont icon-zuo" @click="back()"></i>
      <div class="header_right">
        <i class="iconfont icon-fenxiang" ></i>
      </div>
    </header>
    <div class="circle_img">
      <img :src="'http://106.13.193.45:8080/static/'+list.clusterIcon">
    </div>
    <div class="circle_title">
      <span class="title">{{list.clusterName}}</span>
      <p class="group_people">{{allpeople}}个成员 邀请<i class="iconfont icon-jia"></i></p>
      <div class="user_info">
        <span> 类型：{{list.clusterComment}}</span>
        <span> 地址：{{list.clusterAddress}}</span>
      </div>
    </div>
    <div class="stick_wrap">
      <div class="stick">
        <div class="stick_left">
          <i class="iconfont icon-zhiding1"></i>
          <span>公告</span>
        </div>
        <div class="stick_right" @click="hint">
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
        <div class="box_item" @click="hint">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566668486206&di=e3bc29df34d0f3134a653626b4fc9b2f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F53cdd1f7c1f21.jpg"
          />
          <p>文件</p>
        </div>
        <div class="box_item" @click="hint" >
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566672704855&di=86b89b9c1bdd690bf65e69199f94eae4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201210%2F21%2F20121021201351_hx3R2.thumb.700_0.jpeg"
          />
          <p>照片</p>
        </div>
        <div class="box_item1"@click="hint">
          <p><i class="iconfont icon-svg"></i></p>
        </div>
      </div>
    </div>
    <div class="nav">
      <p class="nav_1">动态</p>
      <p class="reply"><i class="iconfont icon-paopao"></i>最新回复</p>
    </div>
    <div >
      <div class="comments">
        <div
          class="comments_item"
          @click="hint"
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
            <div class="operation">
              <i id="col" class="iconfont icon-yixianshi-"></i>
              <span>收藏</span>
            </div>
            <div class="operation">
              <i class="iconfont icon-fenxiang"></i>
              <span>分享</span>
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
    <Alert :isshow="isshow" :clusterId="isclusterId" ref="Al"></Alert>
  </div>
</template>
<script>
  import Cookies from "../../api/localStorage";
  import Alert from '../../components/Alert/Alert'
  export default {
    name:"circlemain",
    data(){
      return{
        list:"",
        user:"",
        topics:"",
        role:"",
        notes: "",
        isshow:false,
        isclusterId:'',
        allpeople:""
      }
    },
    created(){
      //初始化圈详情
      this.circleDetails(),
        //初始化圈话题
        this.circletopic(),
        //初始化圈角色
        this.judgeRole(),
        //查询圈子人数
        this.queryAllpeople()
    },
    methods:{
      //提示未加入此圈
      hint(){
        this.$toast("您还未加入此圈")
      },
      //根据圈id查询圈子详情
      circleDetails(){
        //获取本用户信息
        this.user= JSON.parse(Cookies.get('username'))
        let self=this
        const params={clusterId:this.$route.query.clusterId}
        const url = "/api/cluster/details";
        this.$http.fetchGet(url,{params}).then(res => {
          if(res.status==200){
            self.list=res.data[0]
          }else{
            this.$toast(res.msg)
          }
        })
      },
      //查询圈子动态话题
      circletopic(){
        let self=this
        const params={clusterId:this.$route.query.clusterId,userId:this.user.userId}
        const url = "/api/topic/view";
        this.$http.fetchGet(url,{params}).then(res => {
          if(res.status==200){
            self.topics=res.data
          }else{
            this.$toast(res.msg)
          }
        })
      },
      //判断当前用户进入圈子的角色
      judgeRole(){
        let self=this
        const params={clusterId:this.$route.query.clusterId,userId:this.user.userId}
        const url = "/api/cluster/Judg";
        this.$http.fetchGet(url,{params}).then(res => {
          if(res.status==200){
            self.role=res.msg
          }else{
            this.$toast(res.msg)
          }
        })
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
      //回到上一页面
      back(){
        this.$router.go(-1)
      },
      //加入圈子
      JoinCircle(){
        let self=this
        const params={ucClusterId:this.$route.query.clusterId,ucUserId:this.user.userId}
        const url = "/api/cluster/method";
        this.$http.fetchGet(url,{params}).then(res => {
          if(res.status==200){
              this.$toast("加入成功")
              this.$router.replace({name:'Circlemain',query:{clusterId:this.$route.query.clusterId}})
            }else if(res.status==201){
              self.$refs.Al.onClick()
              self.isclusterId=self.$route.query.clusterId
          }else{
            this.$toast("加入错误")
          }
        })
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
    },
    components:{
      Alert
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../common/sylus/mixins.styl"
  #joincircle
    background-color #f5f5f5
    .btn
      width 120px
      height 40px
      border-radius 20px
      background-color orangered
      bottom 30px
      right 50%
      color #fff
      transform translateX(50%)
      border none
      position fixed
      z-index 1000
      span
        font-size 14px
        color #fff
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
      padding  10px
      display flex
      color #fff
      justify-content space-between
      .header_right
        width 50px
        margin-right 20px
        display flex
        justify-content flex-end
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
      p,i
        margin-top 10px
        font-size 12px
        color #499273
      .user_info
        display flex
        justify-content space-between
        align-items center
        margin-top 15px
        font-size 14px
        color #888
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
            font-size 14px
            font-weight 600
            color #fff
            transform translateX(-50%)

        .box_item1
          background-color #e5e5e5
          width 100px
          height 80px
          margin-top 5px
          text-align center
          line-height 80px
          box-sizing border-box
          border-radius 10px
          i
            font-size 30px
    .nav
      display flex
      padding  0 10px
      line-height 30px
      font-size 14px
      color: #7f7f7f
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
          font-size 80px;
          color #999
        p

          font-size 20px
          color #999


</style>
