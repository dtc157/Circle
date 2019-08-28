<template>
  <div id="membermain">
    <header class="membermain_header">
      <i class="iconfont icon-zuo" @click="back()"></i>
      <div class="header_title">
        <p>成员</p>
      </div>
      <span class="send" @click="jumpCreateGroup">创建小组</span>
    </header>
    <div class="search_wrap">
      <div class="content_search">
        <div class="iconfont icon-sousuo"> </div>
        <input class="search2" placeholder="请输入组名">
      </div>
    </div>
    <div class="membermain_body">
      <div class="circle_main">
        <img v-lazy="'http://106.13.193.45:8080/static/'+list.user[0].userPhoto">
        <p>{{list.user[0].userRealname}}(圈主)</p>
      </div>
      <div class="groups_wrap" v-for="(group,index) in groups" :key="index"
           @click="jumpGroupdetails(group.clusterId)" v-if="group.user.length>0">
        <div class="group" >
          <div class="group_title">
            <span>{{group.clusterName}}</span>
          </div>
          <div class="group_leader" v-for="(item1,index1) in group.user"
               :key="index1" v-if="index1<1" >
            <div class="leader_left">
              <img :src="'http://106.13.193.45:8080/static/'+item1.userPhoto" >
              <span>{{item1.userRealname}}</span>
              <i class="iconfont "></i>
            </div>
            <span class="leader_right">组长</span>
          </div>
          <div class="group_people" v-for="(item,index2) in group.user" :key="index2" v-if="index2>=1">
            <div class="leader_left">
              <img :src="'http://106.13.193.45:8080/static/'+item.userPhoto" >
              <span>{{item.userRealname}}</span>
              <i class="iconfont "></i>
            </div>
            <span class="leader_right">组员</span>
          </div>
        </div>
      </div>
      <div class="membermain_other">
        <div class="other">
          <div class="other_title">
            <span>其他</span>
          </div>
          <div class="other_people" v-for="(user,index) in otherlist" v-if="index>=1">
            <div class="other_left">
              <img :src="'http://106.13.193.45:8080/static/'+user.userPhoto" v-if="user.userPhoto">
              <img src="../../assets/photo/headerimg.jpeg" v-else>
              <span>{{user.userRealname}}</span>
              <i class="iconfont "></i>
            </div>
            <span class="other_right">未加入</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
  export default {
    data(){
      return{
        list:"",
        groups:"",
        otherlist:""
      }
    },
    created(){
      this.circleDetails(),
        this.queryGroup(),
        this.queryOther()
    },
    methods:{
      //查询其他人
      queryOther(){
        let self = this;
        const params = {
          clusterId: this.$route.query.clusterId,
        };
        const url = "/api/cluster/notIn";
        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            self.otherlist = res.data;
            console.log(self.otherlist)
          } else {
            this.$toast(res.msg);
          }
        });
      },
      //根据圈id查询圈子详情(找出圈主和其他人)
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
      //查询某个圈子所有的小组
      queryGroup() {
        //获取本用户信息
        let self = this;
        const params = { clusterId: this.$route.query.clusterId };
        const url = "/api/group/view";
        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            self.groups = res.data;
          } else {
            alert(res.msg);
          }
        });
      },
      //返回上一界面
      back(){
        this.$router.go(-1)
      },
      //跳转创建小组
      jumpCreateGroup(){
        this.$router.push({name:'CreateGroup',query:{clusterId:this.$route.query.clusterId}})
      },
      //跳转小组详情页
      jumpGroupdetails(clusterId){
        this.$router.push({name:'Groupdetails',query:{clusterId:clusterId}})
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #membermain
    img
      width 35px
      height 35px
      margin-right 10px
      border-radius 50%
    .membermain_header
      position fixed
      display flex
      color:#fff
      background-color #FFB10B
      justify-content space-between
      box-sizing border-box
      padding 10px
      z-index 100
      left 0
      top 0
      width 100%
      height 50px
      i
        margin-top 8px
      .send
        margin-top 8px
        font-size 14px
        margin-right 10px
      bottom-border-1px(#e5e5e5)
      .header_title
        position absolute
        top 50%
        left 50%
        transform translateX(-50%) translateY(-50%)
        display flex
        line-height 18px
        align-items center
        flex-direction column
        font-size 18px
        span,p
          text-align center
          span
            color #fff
            font-size 14px
    .search_wrap
      display flex
      padding 10px
      background-color #fff
      bottom-border-1px(#e4e4e4)
      span
        margin auto
      .content_search
        display flex
        background-color #f2f2f2
        width 100%
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
    .membermain_body
      margin 0 10px 0 10px
      .circle_main
        display flex
        height 30px
        align-items center
        background-color #ffd798
        margin-bottom 5px
        padding 10px 10px 10px 20px
        bottom-border-1px(#e4e4e4)
        p
          font-size 16px
          color black
      .groups_wrap
        background-color #ffedd1
        margin-bottom 5px
        padding 10px 20px 10px 20px
        img
          width 30px
          height 30px
          margin-right 10px
          border-radius 50%
        .group
          display flex
          flex-direction column
          .group_title
            padding 5px
            bottom-border-1px(#fff)
          .group_leader
            padding 5px
            align-items center
            justify-content space-between
            bottom-border-1px(#fff)
            display flex
            .leader_left
              display flex
              align-items center
            .leader_right
              margin-right 10px
          .group_people
            padding 5px
            align-items center
            justify-content space-between
            display flex
            bottom-border-1px(#fff)
            .leader_left
              display flex
              align-items center
            .leader_right
              margin-right 10px
      .membermain_other
        background-color #e5e5e5
        padding 10px 20px 10px 20px
        img
          width 30px
          height 30px
          margin-right 10px
          border-radius 50%
        .other
          display flex
          flex-direction column
          .other_title
            padding 5px
            bottom-border-1px(#fff)
          .other_people
            padding 5px
            align-items center
            justify-content space-between
            display flex
            bottom-border-1px(#fff)
            .other_left
              display flex
              align-items center
            .other_right
              margin-right 10px

</style>
