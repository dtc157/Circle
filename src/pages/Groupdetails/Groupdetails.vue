<template>
  <div id="groupdetails">
    <header class="group_header">
      <i class="iconfont icon-zuo" @click="back()"></i>
      <div class="header_title">
        <p>{{peoples.clusterName}}</p>
      </div>
    </header>
    <div class="search_wrap">
      <div class="content_search">
        <div class="iconfont icon-sousuo"> </div>
        <!--<form @submit.prevent="formSubmit" action="javascript:return true">-->
        <input class="search2" placeholder="请输入组员"
        >
        <!--</form>-->
      </div>
    </div>
    <div class="group">
      <div class="group_people" v-for="(people,index) in peoples.user"
           :key="index" v-if="index==0">
        <div class="leader_left">
          <img v-lazy="'http://106.13.193.45:8080/static/'+people.userPhoto">
          <span>{{people.userRealname}}</span>
          <i class="iconfont "></i>
        </div>
        <span class="leader_right">组长</span>
      </div>
      <div class="group_people" v-for="(people,index) in peoples.user" :key="index" v-if="index>0" >
        <div class="leader_left">
          <img v-lazy="'http://106.13.193.45:8080/static/'+people.userPhoto">
          <span>{{people.userRealname}}</span>
          <i class="iconfont "></i>
        </div>
        <span class="leader_right">组员</span>
      </div>
    </div>
    <footer>
      <button class="join" v-show="isIn==0" @click="joinGroup">立即加入</button>
      <button class="exit"  v-show ="isIn==1" @click="exitGroup">退出</button>
    </footer>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
  export default {
    data(){
      return{
        isIn:"",
        peoples:''
      }
    },
    created(){
      this.judjeInGroup(),
        this.queryGrouppeople()
    },
    methods: {
      //返回上一界面
      back() {
        this.$router.go(-1)
      },
      //加入小组
      joinGroup(){
        const userId = JSON.parse(Cookies.get("username")).userId;
        let self = this;
        const params = {
          clusterId: this.$route.query.clusterId,
          userId:userId
        };
        const url = "/api/group/Addgroup";
        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            if(res.data==1){

              this.$toast("加入成功")
              self.queryGrouppeople()
              self.judjeInGroup()
              //this.$router.go(0);
            }
          } else if(res.status==300){
            this.$toast(res.data);
          }else{
            this.$toast(res.msg);
          }
        });
      },
      //退出小组
      exitGroup(){
        const userId = JSON.parse(Cookies.get("username")).userId;
        let self = this;
        this.$dialog.confirm({
          title: '',
          message: '确定退出吗？'
        }).then(() => {
          const params = {
            clusterId: this.$route.query.clusterId,
            userId: userId
          };
          const url = "/api/group/quit";
          this.$http.fetchGet(url, {params}).then(res => {
            if (res.status == 200) {
              self.isIn = res.data
              self.queryGrouppeople()
              this.$toast("退出成功")
              self.$router.go(-1);
            } else {
              this.$toast(res.msg);
            }
          });
        }).catch(()=>{
          this.$toast("退出取消")
        })
      },
      //判断此人是否在这个小组
      judjeInGroup() {
        const userId = JSON.parse(Cookies.get("username")).userId;
        let self = this;
        const params = {
          clusterId: this.$route.query.clusterId,
          userId:userId
        };
        const url = "/api/group/addcluster";
        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            self.isIn=res.data
          } else {
            self.$toast(res.msg);
          }
        });
      },
      //根据组id查询组员
      queryGrouppeople() {
        let self = this;
        const params = { clusterId: this.$route.query.clusterId };
        const url = "/api/group/details";
        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            self.peoples = res.data[0];
            console.log(self.peoples)
          } else {
            self.$toast(res.msg);
          }
        });
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #groupdetails
    background-color #fff
    height 100%
    img
      width 35px
      height 35px
      margin-right 10px
      border-radius 50%
    .group_header
      position fixed
      display flex
      color:#fff
      background-color #ff8a09
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
        transform translateX(-30%) translateY(-50%)
        display flex
        line-height 18px
        align-items center
        flex-direction column
        font-size 18px
        span,p
          text-align center
          span
            color #fff
            font-size 14p
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
    .group
      .group_people
        padding 10px 30px 5px 30px
        align-items center
        background-color #fff
        justify-content space-between
        display flex
        bottom-border-1px(#e5e5e5)
        .leader_left
          display flex
          align-items center
        .leader_right
          color #ff8a09
          margin-right 10px
    footer
      position absolute
      bottom 0
      left 0
      width 100%
      height 60px
      background-color #f5f5f5
      text-align center
      button
        width 90%
        height 40px
        margin-top 10px
        border-radius 10px
        color #fff
        font-size 16px
        border 0
      .join
        background-color #ff8a09
      .exit
        color #ff8a09
        background-color #ffffff
        border #ff8a09 solid 1px
</style>
