<template>
  <div id="container">
    <div id="top">
      <router-link to="/toLogin">
        <i class="iconfont icon-zuo"></i>
      </router-link>
    </div>
    <div class="router_skip">
      <router-link>账号登录</router-link>
      <span>|</span>
      <router-link>短信验证登录</router-link>
    </div>
    <!-- 登录内容 -->
    <div id="login_content">
      <div class="login_title">账号登录</div>
      <div class="inp username">
        <input type="text" placeholder="手机号/账号" />
      </div>
      <div class="inp password">
        <input type="password" v-if="true" placeholder="密码" />
        <input type="text" v-if="!true" />
        <div class="eye">
          <i class="iconfont icon-yanjing"></i>
        </div>
      </div>
      <div class="test_container">
        <div class="test_code">
          <input type="text" placeholder="请输入验证码" />
        </div>
        <div class="test_picture">验证码</div>
      </div>
      <div class="remember_password">
        <input type="checkbox" />&nbsp;记住密码
      </div>
      <button class="login_btn">登录</button>
    </div>
  </div>
</template>

<script>
export default {};
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
  .router_skip
    width 80%
    height 50px
    line-height 50px
    text-align center
    margin auto
    margin-top 0
    font-size 22px
    font-weight 700
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
    .test_container
      width 80%
      height 50px
      line-height 50px
      margin auto
      margin-bottom 10px
      display flex
      display -webkit-flex
      justify-content space-between
      -webkit-justify-content space-between
      align-items center
      -webkit-align-items center
      .test_code, .test_picture
        width 40%
        height 50px
        line-height 50px
        padding-left 10px
        border 1px solid #CECCCC
        input
          width 100%
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