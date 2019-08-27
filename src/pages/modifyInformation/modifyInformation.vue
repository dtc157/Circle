<template>
  <div class="nickname">
    <div class="nickname-head">
      <div class="arrow" @click="$router.back()">
        <i class="iconfont icon-xiangzuo"></i>
      </div>
      <div class="nickname-title">修改信息</div>
      <div class="nickname-left" @click="checkModefyAll()">完成</div>
    </div>
    <div class="modify-content">
      真实姓名：
      <input
        type="text"
        id="realname"
        v-model="userRealname"
        :class="{on:userRealname_status}"
        @change="userRealnameCheck(userRealname)"
      />
      <i class="iconfont icon-cuowu" @click="removeInputrealname()"></i>
    </div>
    <div class="modify-content">
      身份证号：
      <input
        type="text"
        id="cardid"
        v-model="userCardId"
        :class="{on:userCardId_status}"
        @change="userCardIdCheck(userCardId)"
      />
      <i class="iconfont icon-cuowu" @click="removeInputCardId()"></i>
    </div>
    <div class="modify-content">
      手机号 ：
      <input
        type="text"
        v-model="userMobile"
        id="mobile"
        :class="{on:userMobile_status}"
        @change="userMobileCheck(userMobile)"
      />
      <i class="iconfont icon-cuowu" @click="removeInputMobile()"></i>
    </div>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
export default {
  data() {
    return {
      userRealname: "",
      userCardId: "",
      userMobile: "",
      userId: JSON.parse(Cookies.get("username")).userId,
      userRealname_status: false,
      userCardId_status: false,
      userMobile_status: false
    };
  },
  created() {
    this.toGetNick();
  },
  methods: {
    checkModefyAll() {
      this.userRealnameCheck(this.userRealname);
      this.userCardIdCheck(this.userCardId);
      this.userMobileCheck(this.userMobile);
      if (
        this.userRealname != "" &&
        this.userCardId != "" &&
        this.userMobile != "" &&
        this.userRealname_status == false &&
        this.userCardId_status == false &&
        this.userMobile_status == false
      ) {
        this.editNickName();
      }
    },
    editNickName() {
      let self = this;
      this.$http
        .fetchGet("/api/user/update", {
          params: {
            userId: self.userId,
            userRealname: self.userRealname,
            userCardId: self.userCardId,
            userMobile: self.userMobile
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.$toast.success("修改信息成功");
            self.$router.push("/userinfo");
          }
        });
    },
    toGetNick() {
      this.userRealname = this.$route.query.userRealname;
      this.userCardId = this.$route.query.userCardId;
      this.userMobile = this.$route.query.userMobile;
    },
    userRealnameCheck(userRealname) {
      let reg = /^[\u4e00-\u9fa5]{2,5}$/;
      if (!new RegExp(reg).test(userRealname)) {
        this.userRealname_status = true;
        this.$toast.fail("此栏必须是2-5的汉字");
      } else {
        this.userRealname_status = false;
      }
    },
    userCardIdCheck(userCardId) {
      let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!new RegExp(reg).test(userCardId)) {
        this.userCardId_status = true;
        this.$toast.fail("请输入正确的身份证号码");
      } else {
        this.userCardId_status = false;
      }
    },
    userMobileCheck(userMobile) {
      let reg = /^1[3456789]\d{9}$/;
      if (!new RegExp(reg).test(userMobile)) {
        this.userMobile_status = true;
        this.$toast.fail("请输入正确的手机号码");
      } else {
        this.userMobile_status = false;
      }
    },
    removeInputrealname() {
      this.userRealname = "";
    },
    removeInputCardId() {
      this.userCardId = "";
    },
    removeInputMobile() {
      this.userMobile = "";
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.nickname
  width 100%
  overflow hidden
  .nickname-head
    height 45px
    background white
    display flex
    justify-content space-between
    .arrow
      margin-left 2%
      margin-top 5px
      .iconfont
        font-size 35px
    .nickname-title
      margin-top 14px
    .nickname-left
      margin-right 5%
      margin-top 14px
  .modify-content
    width 100%
    height 40px
    margin-top 20px
    background white
    color #3B3B3B
    font-size 15px
    padding-left 5%
    input
      width 60%
      line-height 40px
      outline none
    #realname
      &.on
        color red
    #cardid
      &.on
        color red
    #mobile
      &.on
        color red
    .nickname-icon
      float right
      width 8%
      margin-top 10px
      margin-right 6%
      height 40px
      .iconfont
        font-size 20px
        color #7e8c8d
</style>
