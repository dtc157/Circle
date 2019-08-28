<template>
  <div class="userinfo">
    <div class="userinfo-head">
      <div class="arrow" @click="$router.back()">
        <i class="iconfont icon-xiangzuo"></i>
        <span class="userinfo-title">账号信息</span>
      </div>
    </div>
    <div class="items-container">
      <div class="userinfo-items">
        <div class="head-img">头像</div>
        <div class="userinfo-images">
          <img :src="'http://106.13.193.45:8080/static/'+userPhoto" class="userinfo_image" />
        </div>
      </div>
      <div class="userinfo-items">
        <div class="head-img">用户名</div>
        <div>
          <div class="arrow">
            <div class="userinfo-left">{{ursername}}</div>
          </div>
        </div>
      </div>
      <div class="userinfo-items">
        <div class="head-img">真实姓名</div>
        <div class="userinfo-right2">{{userRealname}}</div>
      </div>
      <div class="userinfo-items">
        <div class="head-img">身份证号</div>
        <div class="userinfo-right2">{{userCardId}}</div>
      </div>
      <div class="userinfo-items">
        <div class="head-img">ID</div>
        <div class="userinfo-right2">{{userId}}</div>
      </div>
      <div class="userinfo-items">
        <div class="head-img">手机号</div>

        <div>
          <div class="arrow">
            <div class="userinfo-left">{{userMobile}}</div>
          </div>
        </div>
      </div>
      <div class="setting" @click="jumpModify">修改信息</div>
      <!-- <div class="setting" @click="Logout()">退出登录</div> -->
    </div>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
  export default {
    data() {
      return {
        phoneNumber: true,
        userId: JSON.parse(Cookies.get("username")).userId,
        ursername: "",
        userRealname: "",
        userCardId: "",
        userMobile: "",
        userPhoto: ""
      };
    },
    created() {
      this.reqUserinfo();
    },
    methods: {
      reqUserinfo() {
        let self = this;
        const url = "/api/user/ById";
        const params = { userId: self.userId };
        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            self.userMobile = res.data.userMobile;
            self.userCardId = res.data.userCardId;
            self.userRealname = res.data.userRealname;
            self.ursername = res.data.userName;
            self.userPhoto = res.data.userPhoto;
          }
        });
      },
      jumpModify() {
        this.$router.push({
          path: "/modifyInformation",
          query: {
            userRealname: this.userRealname,
            userMobile: this.userMobile,
            userCardId: this.userCardId
          }
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .userinfo
    width 100%
    height 100%
    background-color #ffffff
    .userinfo-head
      background white
      height 50px
      .arrow
        position relative
        margin-left 2%
        padding-top 10px
        .icon-xiangzuo
          font-size 40px
          color #7e8c8d
        .userinfo-title
          font-size 20px
          position absolute
          margin 0 auto
          left 0
          right 0
          margin-top 6px
          margin-left 40%
    .items-container
      background white
      width 90%
      margin-left 5%
      .arrow
        display flex
        justify-content space-between
        .icon-range-left
          font-size 30px
      .userinfo-items
        display flex
        display -webkit-flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        -webkit-align-items center
        height 50px
        width 95%
        margin-left auto
        margin-right auto
        .userinfo-images
          display flex
          justify-content space-between
          .userinfo_image
            padding-right 0
            width 40px
            height 40px
      .setting
        height 50px
        margin-left auto
        margin-right auto
        line-height 60px
        text-align center
        color red
</style>
