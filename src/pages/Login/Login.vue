<template>
  <div id="login">
    <div id="top">
      <i class="iconfont icon-zuo" @click="back"></i>
    </div>
    <!-- 登录内容 -->
    <div id="login_content">
      <div class="login_title">账号登录</div>
      <div class="inp username">
        <input type="text" placeholder="账号" v-model="userName"  />
      </div>
      <div class="inp password">
        <input type="password" v-if="show" placeholder="密码" v-model="userPassword" />
        <input type="text" v-if="!show" placeholder="密码" v-model="userPassword" />
        <div class="eye">
          <i class="iconfont icon-yanjing" @click="showPassword"></i>
        </div>
      </div>
      <div class="remember_password">
        <input id="rememberPassword" type="checkbox" />&nbsp;记住密码
      </div>
      <button class="login_btn" @click="login1">登录</button>
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
        show: true
      };
    },
    mounted() {
      this.decideRemember();
    },
    methods: {
      // 记住密码
      decideRemember() {
        if (Cookies.get("rememberPasswordStatus")) {
          const PasswordStatus = JSON.parse(
            Cookies.get("rememberPasswordStatus")
          );
          if (PasswordStatus.rememberStatus == true) {
            this.userName = PasswordStatus.userName;
            this.userPassword = PasswordStatus.userPassword;
            document.getElementById("rememberPassword").checked = true;
          }
        } else {
          this.$toast("没有登录记录");
        }
      },
      // 登录
      async login1() {
        if (this.userName != "" && this.userPassword != "") {
          const url = "/api/user/login";
          const { userName, userPassword } = this;
          this.$http
            .fetchPost(url, { username: userName, password: userPassword })
            .then(res => {
              if (res.status == 200) {
                Cookies.set("username", res.data);
                if (document.getElementById("rememberPassword").checked) {
                  let rememberPasswordStatus = {
                    rememberStatus: true,
                    userName: res.data.userName,
                    userPassword: res.data.userPassword
                  };
                  Cookies.set("rememberPasswordStatus", rememberPasswordStatus);
                } else {
                  let rememberPasswordStatus = {
                    rememberStatus: false,
                    userName: "",
                    userPassword: ""
                  };
                  Cookies.set("rememberPasswordStatus", rememberPasswordStatus);
                }
                this.$router.push("/msite");
              } else {
                this.$toast.fail("用户名密码错误");
              }
            });
        } else {
          this.$toast.fail("请输入用户名和登录密码");
        }
      },
      // 是否显示密码
      showPassword() {
        this.show = !this.show;
      },
      // 返回上一页面
      back() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #login
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
      margin-top 50px
      width 100%
      .login_title
        margin-top 20px
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
        height 50px
        line-height 50px
        margin auto
        background-color #fff
        margin-bottom 20px
        border 1px solid #CECCCC
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
