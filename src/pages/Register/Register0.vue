<template>
  <div id="register">
    <div id="top">
      <i class="iconfont icon-zuo" @click="back"></i>
    </div>
    <!-- 登录内容 -->
    <div id="login_content">
      <div class="login_title">注册账号</div>
      <div class="inp username">
        <input
          type="text"
          placeholder="请输入您的账号"
          class="username"
          v-model="userName"
          :class="{on:usernameCheck_status}"
          @change="usernameCheck"
          ref="username"
        />
      </div>
      <div class="inp password">
        <input
          type="password"
          v-if="show"
          class="password"
          placeholder="请输入您的密码"
          v-model="userPassword"
          :class="{on:passwordCheck_status}"
          @change="passwordCheck(userPassword)"
        />
        <input
          type="text"
          v-if="!show"
          class="password"
          placeholder="请输入您的密码"
          v-model="userPassword"
          :class="{on:passwordCheck_status}"
          @change="passwordCheck(userPassword)"
        />
        <div class="eye">
          <i class="iconfont icon-yanjing" @click="showPassword"></i>
        </div>
      </div>
      <div class="inp username">
        <input
          type="text"
          class="realname"
          placeholder="请输入您的真实姓名"
          v-model="userRealname"
          :class="{on:realnameCheck_status}"
          @change="realnameCheck(userRealname)"
        />
      </div>
      <div class="inp username">
        <input
          type="text"
          placeholder="请输入您的所在学校"
          class="useraddress"
          v-model="userAddress"
          :class="{on:schoolCheck_status}"
          @change="schoolCheck(userAddress)"
        />
      </div>
      <button class="login_btn" @click="register">立即注册</button>
    </div>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
      result: "",
      show: true,
      userRealname: "",
      userAddress: "",
      usernameCheck_status: false,
      passwordCheck_status: false,
      realnameCheck_status: false,
      schoolCheck_status: false
    };
  },
  methods: {
    //注册
    register() {
      if (
        this.userName != "" &&
        this.userPassword != "" &&
        this.userRealname != "" &&
        this.userAddress != "" &&
        this.usernameCheck_status == false &&
        this.passwordCheck_status == false &&
        this.realnameCheck_status == false &&
        this.schoolCheck_status == false
      ) {
        const params = {
          userName: this.userName,
          userPassword: this.userPassword,
          userAddress: this.userAddress,
          userRealname: this.userRealname
        };
        const url = "/api/user/add";
        this.$http.fetchPost(url, params ).then(res => {
          if (res.status == 200) {
            Cookies.set("username", res.data);
            this.$toast.success("注册成功");
            this.$router.push("/tologin");
          } else {
            this.$toast.fail("注册失败");
          }
        });
      } else {
        this.$toast.fail("请完善注册信息");
      }
    },
    // 是否显示密码
    showPassword() {
      this.show = !this.show;
    },
    // 返回上一页面
    back() {
      this.$router.go(-1);
    },
    // 用户名 表单验证
    usernameCheck() {
      let reg = /^\w{3,}$/;
      let value = this.$refs.username.value;
      if (!new RegExp(reg).test(value)) {
         this.$toast.fail("账号必须是3个以上的英文字母或数字");
        this.usernameCheck_status = true;
      }else{
        this.usernameCheck_status = false;
      }
    },

    // 密码框 表单验证
    passwordCheck(userPassword) {
      let reg = /^\w{5,12}$/;
      if (!new RegExp(reg).test(userPassword)) {
        this.passwordCheck_status = true;
        this.$toast.fail("密码必须是5-12的英文字母或数字");
      }else{
        this.passwordCheck_status = false;
      }
    },
    // recoverStatusPass() {
    //   this.passwordCheck_status = false;
    // },
    // 珍视明表单验证
    realnameCheck(userRealname) {
      let reg = /^[\u4e00-\u9fa5]{2,5}$/;
      if (!new RegExp(reg).test(userRealname)) {
        this.realnameCheck_status = true;
        this.$toast.fail("此栏必须是2-5的汉字");
      }else{
        this.realnameCheck_status = false;
      }
    },
    // recoverStatusReal() {
    //   this.realnameCheck_status = false;
    // },
    // 学校表单验证
    schoolCheck(userAddress) {
      let reg = /^[\u4e00-\u9fa5]{2,15}(大学|学院)$/;
      if (!new RegExp(reg).test(userAddress)) {
        this.schoolCheck_status = true;
        this.$toast.fail("请输入**大学或**学院");
      }else{
        this.schoolCheck_status = false;
      }
    },
    // recoverStatusSchool() {
    //   this.schoolCheck_status = false;
    // }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#register
  width 100%
  height 100%
  background-color #ffffff
  #top
    position relative
    top 0
    margin-left 15px
    height 50px
    line-height 50px
  #login_content
    width 100%
    .login_title
      margin-left 25%
      margin-bottom 20px
      width 50%
      height 50px
      line-height 50px
      text-align center
      font-size 22px
      font-weight 700
    .inp
      width 80%
      height 40px
      line-height 40px
      margin auto
      margin-bottom 15px
      border 1px solid #CECCCC
      .username
        &.on
          color red
      .password
        &.on
          color red
      .realname
        &.on
          color red
      .useraddress
        &.on
          color red
      input
        width 80%
        padding-left 10px
      &.password
        display flex
        display -webkit-flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        -webkit-align-items center
        .eye
          width 10%
          height 40px
          line-height 40px
          i
            font-size 23px
    .remember_password
      width 50%
      height 30px
      line-height 30px
      margin-left 10%
      margin-bottom 8px
      color #7F7F7F
      font-size 14px
      input
        border-color #ED1C24
    .login_btn
      width 80%
      height 50px
      line-height 50px
      text-align center
      margin-left 10%
      border-radius 27px
      background-color #ED1C24
      color #ffffff
      font-size 20px
      border 1px solid #ED1C24
</style>
