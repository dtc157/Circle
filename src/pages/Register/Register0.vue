<template>
  <div id="container">
    <div id="top">
      <i class="iconfont icon-zuo" @click="back"></i>
    </div>
    <!-- 登录内容 -->
    <div id="login_content">
      <div class="login_title">注册账号</div>
      <div class="inp username">
        <input type="text" placeholder="请输入您的账号" v-model="userName" />
      </div>
      <div class="inp password">
        <input type="password" v-if="show" placeholder="请输入您的密码" v-model="userPassword" />
        <input type="text" v-if="!show" placeholder="请输入您的密码" v-model="userPassword" />
        <div class="eye">
          <i class="iconfont icon-yanjing" @click="showPassword"></i>
        </div>
      </div>
      <div class="inp username">
        <input type="text" placeholder="请输入您的用户名" v-model="userRealname" />
      </div>
      <div class="inp username">
        <input type="text" placeholder="请输入您的所在学校" v-model="userAddress" />
      </div>
      <button class="login_btn" @click="register">立即注册</button>
    </div>
  </div>
</template>

<script>
  import Cookies from "js-cookie";
  export default {
    data() {
      return {
        userName: "",
        userPassword: "",
        result: "",
        show: true,
        userRealname: "",
        userAddress: ""
      };
    },
    methods: {
      //注册
      register() {
        const params = {
          userName: this.userName,
          userPassword: this.userPassword,
          userAddress: this.userAddress,
          userRealname: this.userRealname
        };
        const url = "/api/user/add";
        // const params = {
        //   userName: userName,
        //   userPassword: userPassword,
        //   userEmail: userEmail,
        //   userRealname: userRealname
        // };

        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            Cookies.set("username", res.data);
            alert("注册成功");
            this.$router.push("/msite");
          } else {
            alert("注册失败");
          }
        });
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
  #container
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
